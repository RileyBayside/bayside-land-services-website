import { Resend } from 'resend';
import type { Submission } from '@/types/quote';
import { SERVICE_LABELS } from '@/data/quote-fields';

const resend = new Resend(process.env.RESEND_API_KEY);

function formatJobDetails(submission: Pick<Submission, 'service' | 'job_details'>): string {
  const details = submission.job_details as unknown as Record<string, string | number>;
  return Object.entries(details)
    .map(([key, value]) => `${key.replace(/_/g, ' ')}: ${value}`)
    .join('\n');
}

export async function sendNotificationEmail(submission: Submission) {
  const serviceName = SERVICE_LABELS[submission.service];
  const jobDetails = formatJobDetails(submission);

  await resend.emails.send({
    from: 'Bayside Land Services <quotes@baysideslashing.com.au>',
    to: process.env.ADMIN_EMAIL!,
    subject: `New Quote Request — ${serviceName} from ${submission.contact_name}`,
    html: `
      <h2>New Quote Request</h2>
      <p><strong>Submitted:</strong> ${new Date(submission.created_at).toLocaleString('en-AU')}</p>

      <h3>Contact</h3>
      <p>
        Name: ${submission.contact_name}<br>
        Phone: ${submission.contact_phone}<br>
        Email: ${submission.contact_email}
      </p>

      <h3>Property</h3>
      <p>
        Address: ${submission.property_address}<br>
        Size: ${submission.property_size}
      </p>

      <h3>Service: ${serviceName}</h3>
      <pre>${jobDetails}</pre>

      ${submission.notes ? `<h3>Additional Notes</h3><p>${submission.notes}</p>` : ''}

      <p><a href="${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://bls-website.vercel.app'}/admin/submissions/${submission.id}">View in admin →</a></p>
    `,
  });
}

export async function sendQuoteEmail(
  submission: Submission,
  quoteRef: string,
  pdfBuffer: Buffer
) {
  await resend.emails.send({
    from: 'Bayside Land Services <quotes@baysideslashing.com.au>',
    to: submission.contact_email,
    subject: `Your Quote from Bayside Land Services — ${quoteRef}`,
    html: `
      <p>Hi ${submission.contact_name},</p>
      <p>Thank you for your enquiry. Please find your quote attached.</p>
      <p>This quote is valid for 30 days from the date of issue. If you have any questions or would like to proceed, please don't hesitate to get in touch.</p>
      <p>
        Kind regards,<br>
        <strong>Bayside Land Services</strong><br>
        (07) 3207 3510<br>
        riley@baysideslashing.com.au
      </p>
    `,
    attachments: [
      {
        filename: `${quoteRef}.pdf`,
        content: pdfBuffer,
      },
    ],
  });
}
