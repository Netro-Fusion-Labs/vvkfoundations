function doGet(e) {
  return handleRequest(e);
}

function doPost(e) {
  return handleRequest(e);
}

function handleRequest(e) {
  try {
    var ss;
    try {
      ss = SpreadsheetApp.openById("143W7ALmZ2D-7MLF9bvH1RwTjLTo87V-e4nG7Lzy5jZ8");
    } catch(err) {
      ss = SpreadsheetApp.getActiveSpreadsheet();
    }
    
    // Parse incoming data payload (prioritize raw JSON body over query parameters)
    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    // Target Sheet Tab Name
    var sheetName = "Farmer Award Applications";
    var sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
    }

    // Standard Expected Headers in Order (18 Columns)
    var standardHeaders = [
      "Timestamp", 
      "Application No", 
      "Farmer Name", 
      "Father / Husband Name", 
      "Taluk", 
      "Mobile Number", 
      "Postal Address", 
      "Educational Qualification", 
      "Dry Land (Acres)", 
      "Irrigated Land (Acres)", 
      "Irrigation Source", 
      "Adopted Activities",
      "Innovation / Tech Name",
      "Purpose / Problem Addressed",
      "How Implemented",
      "Benefits / Results Achieved",
      "Practices Adopted",
      "Key Achievements"
    ];

    // If sheet is totally empty, create full header row
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(standardHeaders);
      sheet.getRange(1, 1, 1, standardHeaders.length).setFontWeight("bold").setBackground("#2b9348").setFontColor("#ffffff");
    }

    // Get current headers from Row 1
    var currentHeaders = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

    // Auto-append any missing standard headers to Row 1
    standardHeaders.forEach(function(header) {
      if (currentHeaders.indexOf(header) === -1) {
        currentHeaders.push(header);
        sheet.getRange(1, currentHeaders.length).setValue(header).setFontWeight("bold").setBackground("#2b9348").setFontColor("#ffffff");
      }
    });

    // Map each column by exact Header Name to ensure 100% accurate column placement
    var rowData = currentHeaders.map(function(header) {
      switch(header.trim()) {
        case "Timestamp": return data.timestamp || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
        case "Application No": return data.memberId || data.appId || "";
        case "Farmer Name": return data.farmerName || "";
        case "Father / Husband Name": return data.parentName || "";
        case "Taluk": return data.taluk || "";
        case "Mobile Number": return data.mobile || "";
        case "Postal Address": return data.address || "";
        case "Educational Qualification": return data.education || "";
        case "Dry Land (Acres)": return data.dryLand || "0";
        case "Irrigated Land (Acres)": return data.irrigatedLand || "0";
        case "Irrigation Source": return data.irrigationSource || "N/A";
        case "Adopted Activities": return data.activities || "N/A";
        case "Innovation / Tech Name": return data.innovationName || "N/A";
        case "Purpose / Problem Addressed": return data.innovationPurpose || "N/A";
        case "How Implemented": return data.innovationImplementation || "N/A";
        case "Benefits / Results Achieved": return data.innovationBenefits || "N/A";
        case "Practices Adopted": return data.practicesAdopted || "N/A";
        case "Key Achievements": return data.keyAchievements || "N/A";
        default: return data[header] || "";
      }
    });

    // Append the mapped row data to the sheet
    sheet.appendRow(rowData);

    return ContentService.createTextOutput(JSON.stringify({ result: "success", memberId: data.memberId || data.appId }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ result: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
