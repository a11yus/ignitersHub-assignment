const transporter = require("../config/nodemailerConfig");
const emailContent = require("../data/emailContent");

async function sendEmail() {
  try {
    const info = await transporter.sendMail(emailContent);
    console.log("✅ Email sent successfully! Details:");
    console.log(`   - To: ${emailContent.to}`);
    console.log(`   - Subject: ${emailContent.subject}`);
    console.log(`   - Response: ${info.response}`);
  } catch (error) {
    console.error("❌ Error sending email:", error.message);
  }
}

module.exports = sendEmail;
