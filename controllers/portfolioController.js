

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
        user: process.env.EMAILUSER, 
        pass: process.env.EMAILPASSWORD, 
      },
    });

    // Email configuration
    const mailOptions = {
      from: process.env.EMAILUSER,
      to: process.env.RECIPIENTEMAIL,
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
