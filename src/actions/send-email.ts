// 'use server';

// import { Resend } from 'resend';

// import { env } from '@/env.mjs';
// import { TFormSchema } from '@/lib/form-schema';

// const resend = new Resend(env.RESEND_API_KEY);

// export const sendEmailAction = async ({ email, message }: TFormSchema) => {
//   try {
//     await resend.emails.send({
//       from: 'Contact Form <onboarding@resend.dev>',
//       to: 'skolakmichal1@gmail.com',
//       subject: 'Message from contact form',
//       replyTo: email,
//       text: `email: ${email} \nmessage: ${message}`,
//     });

//     return {
//       data: 'Email sent successfully!',
//     };
//   } catch {
//     return {
//       error: `Something went wrong!`,
//     };
//   }
// };
// actions/send-email.ts
'use server';

import { Resend } from 'resend';

import { env } from '@/env.mjs';
import { TFormSchema } from '@/lib/form-schema';

const resend = new Resend(env.RESEND_API_KEY);

export const sendEmailAction = async ({ email, message }: TFormSchema) => {
  try {
    await resend.emails.send({
      from: 'Portfolio Contact <contact@mail.vijaypal.me>',
      to: '23bds067@iiitdwd.ac.in',
      subject: 'New message from portfolio',
      replyTo: email,
      text: `From: ${email}\n\nMessage:\n${message}`,
    });

    return { data: 'Email sent successfully!' };
  } catch {
    return { error: 'Something went wrong!' };
  }
};
