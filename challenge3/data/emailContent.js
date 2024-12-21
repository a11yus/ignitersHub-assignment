module.exports = {
  from: "aayuvd123@gmail.com", // Replace with your email
  to: "hr@ignitershub.com",
  subject: "Challenge 3 Completed - Ayush",
  html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Challenge 3 Completed</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; margin: 0; padding: 0;">
        <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
          <h2 style="color: #4CAF50; text-align: center; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">Challenge 3 Completed</h2>
          <p style="margin-bottom: 20px;">Hello HR Team,</p>
          <p style="margin-bottom: 20px;">Below are my details for the submission:</p>
          <table style="border-collapse: collapse; width: 100%; margin: 20px 0; background-color: #f9f9f9; border-radius: 8px; overflow: hidden;">
            <tr>
              <th style="text-align: left; padding: 12px; background-color: #4CAF50; color: white;">Field</th>
              <th style="text-align: left; padding: 12px; background-color: #4CAF50; color: white;">Details</th>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #ddd;">Name</td>
              <td style="padding: 12px; border-bottom: 1px solid #ddd;">Ayush</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #ddd;">Semester</td>
              <td style="padding: 12px; border-bottom: 1px solid #ddd;">5</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #ddd;">Branch</td>
              <td style="padding: 12px; border-bottom: 1px solid #ddd;">Computer Science</td>
            </tr>
            <tr>
              <td style="padding: 12px;">Roll Number</td>
              <td style="padding: 12px;">12345</td>
            </tr>
          </table>
          <p style="margin-bottom: 20px;">Attached is the image as part of the submission.</p>
          <p style="margin-bottom: 20px;">Thank you!</p>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #555;">
            <p style="margin: 0;">Best regards,</p>
            <p style="margin: 0; font-weight: bold;">Ayush</p>
          </div>
        </div>
      </body>
      </html>
    `,
  attachments: [
    {
      filename: "avatar.jpeg",
      path: "./images/avatar.jpeg", // Ensure this file exists
      contentType: "image/jpeg", // Specify the MIME type
    },
  ],
};
