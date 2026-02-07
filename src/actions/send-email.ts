'use server';

import { Resend } from 'resend';

import { env } from '@/env.mjs';
import { TFormSchema } from '@/lib/form-schema';

const resend = new Resend(env.RESEND_API_KEY);

export const sendEmailAction = async ({ email, message }: TFormSchema) => {
  try {
    console.log('=== EMAIL SEND DEBUG ===');
    console.log('API Key exists:', !!env.RESEND_API_KEY);
    console.log('API Key length:', env.RESEND_API_KEY?.length);
    console.log('From:', email);
    console.log('To:', '23bds067@iiitdwd.ac.in');

    const result = await resend.emails.send({
      from: 'Vijay Pal Singh <contact@mail.vijaypal.me>',
      to: '23bds067@iiitdwd.ac.in',
      subject: `Portfolio Contact: Message from ${email.split('@')[0]}`,
      replyTo: email,
      html: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
<div style="background-color: #f4f4f4; border-left: 4px solid #4CAF50; padding: 15px; margin-bottom: 20px;">
<h2 style="margin: 0 0 10px 0; color: #333;">New Portfolio Contact Message</h2>
<p style="margin: 0; color: #666;"><strong>From:</strong> ${email}</p>
</div>
<div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
<h3 style="margin-top: 0; color: #333;">Message:</h3>
<p style="white-space: pre-wrap; color: #333;">${message}</p>
</div>
<div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px; font-size: 12px; color: #777;">
<p style="margin: 0;">This email was sent from your portfolio contact form</p>
<p style="margin: 5px 0 0 0;">Reply directly to this email to respond to ${email}</p>
</div>
</body>
</html>`,
      text: `New Portfolio Contact Message\n\nFrom: ${email}\n\nMessage:\n${message}\n\n---\nThis email was sent from your portfolio contact form.\nReply directly to respond to ${email}`,
    });

    console.log('Send result:', result);

    if (result.error) {
      console.error('Resend API Error:', result.error);
      return { error: `Email failed: ${result.error.message}` };
    }

    console.log('Email sent successfully! ID:', result.data?.id);
    return { data: 'Email sent successfully!' };
  } catch (error) {
    console.error('=== EMAIL SEND EXCEPTION ===');
    console.error('Error type:', error?.constructor?.name);
    console.error('Error details:', error);
    return {
      error: `Failed to send email: ${error instanceof Error ? error.message : 'Unknown error'}`,
    };
  }
};
