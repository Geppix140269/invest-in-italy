import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactEmail = async (data: {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  interest: string;
  message: string;
}) => {
  try {
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #2c3e50; color: white; padding: 20px; text-align: center; }
            .content { background: #f9f9f9; padding: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #2c3e50; }
            .value { margin-top: 5px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Investment Inquiry</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${data.firstName} ${data.lastName}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${data.email}</div>
              </div>
              ${data.phone ? `
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${data.phone}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">Area of Interest:</div>
                <div class="value">${data.interest}</div>
              </div>
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${data.message}</div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const result = await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_TO!,
      subject: `New Investment Inquiry - ${data.interest}`,
      html: emailHtml,
      replyTo: data.email,
    });

    return { success: true, data: result };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};

export const sendWelcomeEmail = async (email: string, firstName: string) => {
  try {
    const result = await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: email,
      subject: 'Welcome to Invest in Italy',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #2c3e50; color: white; padding: 20px; text-align: center; }
              .content { padding: 20px; }
              .button { background: #d4a056; color: white; padding: 12px 30px; text-decoration: none; display: inline-block; margin-top: 20px; border-radius: 5px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>Welcome to Invest in Italy</h2>
              </div>
              <div class="content">
                <p>Dear ${firstName},</p>
                <p>Thank you for your interest in Italian investment opportunities. Our team of international executives is here to guide you through every step of your investment journey.</p>
                <p>We'll be in touch within 24 hours to discuss your specific requirements and explore how we can help you achieve your investment goals.</p>
                <p>In the meantime, feel free to explore our resources:</p>
                <ul>
                  <li>Tax Benefits Guide</li>
                  <li>Hospitality Investment Opportunities</li>
                  <li>Market Intelligence Reports</li>
                </ul>
                <a href="${process.env.NEXT_PUBLIC_SITE_URL}" class="button">Visit Our Website</a>
                <p>Best regards,<br/>The Invest in Italy Team</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return { success: true, data: result };
  } catch (error) {
    console.error('Error sending welcome email:', error);
    return { success: false, error };
  }
};
