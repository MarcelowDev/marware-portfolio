import { NextResponse } from 'next/server';
import EmailTemplate from '@/emails/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, subject, message } = await request.json();

        const { data, error } = await resend.emails.send({
            from: 'MarWare Contact <onboarding@resend.dev>',
            to: ['albertomarcelorosales@gmail.com'],
            subject: subject || 'New Contact Form Submission',
            react: EmailTemplate({ name, email, subject, message }),
            // Note: In a real scenario, you'd probably want to include the message and sender email 
            // in the EmailTemplate or as part of the email body.
        });

        if (error) {
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error(error);
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}

