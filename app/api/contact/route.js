import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
    const { name, email, message } = await request.json();

    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    let mailOptions = {
        from: email,
        to: 'contact@zkorp.xyz',
        subject: 'New Contact Form Message',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Message received!' });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Error sending message' }, { status: 500 });
    }
}
