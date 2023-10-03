import { GoogleSpreadsheet } from "google-spreadsheet";

// Function to submit data to Google Sheets
export async function submitDataToGoogleSheets(values) {
  try {
    // Initialize GoogleSpreadsheet instance
    const doc = new GoogleSpreadsheet(
      process.env.REACT_APP_GOOGLE_SHEETS_DOCUMENT_ID
    );

    // Authenticate using credentials from .env
    await doc.useServiceAccountAuth({
      client_email: process.env.REACT_APP_CLIENT_EMAIL,
      private_key: process.env.REACT_APP_PRIVATE_KEY.replace(/\\n/g, "\n"), // Handle line breaks
    });

    // Load the Google Spreadsheet
    await doc.loadInfo();

    // Select the sheet you want to write to (by id)
    const sheet = doc.sheetsById[process.env.REACT_APP_SHEET_ID];

    // Create a new row with the form data
    await sheet.addRow({
      Name: values.name,
      Email: values.email,
      Title: values.title,
      Terms: values.terms === "checked" ? "Yes" : "No",
    });

    return { success: true, message: "Data submitted successfully." };
  } catch (error) {
    console.error("Error submitting data to Google Sheets:", error);
    return {
      success: false,
      message: "An error occurred while submitting data.",
    };
  }
}
