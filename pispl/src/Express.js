// Server Side Code
const express = require('express');
const { google } = require('googleapis');
const { OAuth2 } = google.auth;

const oauth2Client = new OAuth2(
    '314302706920-9c6lni04i9s72eopbp5oqn5bbdaus8f9.apps.googleusercontent.com',
    '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',
    'http://localhost:3000/callback'
  );

// Generate the authorization URL
const authorizationUrl = oauth2Client.generateAuthUrl({
    scope: 'https://www.googleapis.com/auth/spreadsheets',
  });

  // Exchange the authorization code for tokens
const { tokens } = await oauth2Client.getToken(authorizationCode);

// Use the tokens object as the authentication object
oauth2Client.setCredentials(tokens);
  


const app = express();
app.use(express.json());

// Create an instance of the Google Sheets API
const sheets = google.sheets({
  version: 'v4',
  auth: { tokens } // Replace with your actual authentication object
});

// Define the route to handle form submissions
app.post('/submit', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Append the form data to the Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: '1pyqEKZcCqQ5hHhOAXt-flU7EKWQlZ3R-UD7_CccG03Q', // Replace with your actual spreadsheet ID
      range: 'Sheet1', // Replace with your actual sheet name or range
      valueInputOption: 'RAW',
      requestBody: {
        values: [[name, email, message]]
      }
    });

    console.log('Form data submitted to Google Sheet');

    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting form data:', error);
    res.status(500).json({ error: 'Failed to submit form' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});