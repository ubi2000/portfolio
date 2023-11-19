

const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const sendEmailController = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Nodemailer configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASSWORD, 
      },
    });

    // Email configuration
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).send({
      success: true,
      message: 'Your message was sent successfully',
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send({
      success: false,
      message: 'Error sending email',
      err,
    });
  }
};

module.exports = { sendEmailController };
