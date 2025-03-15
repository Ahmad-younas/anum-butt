import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Please fill in all fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email that will be sent to Anum
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio Inquiry: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Portfolio Inquiry</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
            <p><strong>Visitor Name:</strong> ${name}</p>
            <p><strong>Visitor Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 5px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This inquiry was sent from your portfolio website's contact form.
          </p>
        </div>
      `,
    };

    // Send email to Anum
    await transporter.sendMail(mailOptions);

    // Confirmation email to the visitor
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting Anum Butt",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank You for Your Message</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
            <p>Dear ${name},</p>
            <p>Thank you for reaching out through my portfolio website. I have received your message regarding "${subject}" and will review it shortly.</p>
            <p>I typically respond within 1-2 business days. If your matter is urgent, please mention that in any follow-up communication.</p>
            <p>Best regards,<br>Anum Butt<br>Senior Software Engineer</p>
          </div>
          <div style="margin-top: 20px; padding: 15px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 14px;">Connect with me:</p>
            <p style="color: #666; font-size: 14px;">
              Website: <a href="${process.env.NEXT_PUBLIC_SITE_URL}" style="color: #0066cc;">My Portfolio</a>
            </p>
          </div>
        </div>
      `,
    };

    // Send confirmation to visitor
    await transporter.sendMail(confirmationMailOptions);

    return NextResponse.json(
      {
        message:
          "Your message has been sent successfully! I'll get back to you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        error:
          "Sorry, there was a problem sending your message. Please try again later.",
      },
      { status: 500 }
    );
  }
}
