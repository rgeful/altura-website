import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const { name, business, email, phone, instagram, details, company } = await req.json();

    // honeypot check (for spam bots)
    if (company) {
      return Response.json({ message: "Message sent." });
    }

    // Basic validation
    if (!name || !details || (!email && !phone && !instagram)) {
      return Response.json(
        { message: "Please fill out all required fields." },
        { status: 400 }
      );
    }

    // Gmail SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER, // Gmail address
        pass: process.env.SMTP_PASS, // App Password
      },
    });

    const mailOptions = {
      from: `Altura Website <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL || process.env.SMTP_USER,
      subject: `New Inquiry from ${name}${business ? ` (${business})` : ""}`,
      replyTo: email || undefined,
      text: `
Name: ${name}
Business: ${business || "N/A"}
Email/Phone: ${email || phone || "N/A"}
Instagram: ${instagram || "N/A"}

Service Request:
${details}
      `,
      html: `
        <div style="font-family:Arial,sans-serif;font-size:14px;line-height:1.6">
          <p><strong>Name:</strong> ${name}</p>
          ${business ? `<p><strong>Business:</strong> ${business}</p>` : ""}
          ${email ? `<p><strong>Email:</strong> ${email}</p>` : ""}
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          ${instagram ? `<p><strong>Instagram:</strong> ${instagram}</p>` : ""}
          <p><strong>Service Request:</strong></p>
          <p>${String(details).replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ message: "Message sent successfully! We'll get back to you soon." });
  } catch (err) {
    console.error("[contact-error]", err);
    return Response.json(
      { message: "Email failed. Please try again later." },
      { status: 500 }
    );
  }
}
