import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Privacy Policy
            </h1>
            <p className="text-center text-lg font-semibold mb-8">
              Body of Christ International Fellowship
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              <strong>Effective Date:</strong> October 17, 2025
            </p>

            <div className="space-y-6 text-foreground">
              <p>
                Body of Christ International Fellowship ("we," "us," or "our") is committed to protecting the privacy of our visitors, members, and users of our website. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you visit our website or engage with our services. By using our website, you consent to the practices described in this policy.
              </p>

              <section>
                <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
                <p className="mb-3">We may collect the following types of information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Personal Information:</strong> Information you voluntarily provide, such as your name, email address, phone number, mailing address, or other details when you register for events, submit donations, sign up for newsletters, or contact us through our website.
                  </li>
                  <li>
                    <strong>Non-Personal Information:</strong> Information that does not identify you personally, such as browser type, IP address, device type, and website usage data collected through cookies or similar technologies.
                  </li>
                  <li>
                    <strong>Sensitive Information:</strong> In some cases, we may collect information related to your participation in church activities, such as prayer requests or membership details, which you provide voluntarily.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">2. How We Collect Information</h2>
                <p className="mb-3">We collect information in the following ways:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Directly from You:</strong> When you fill out forms on our website, register for events, make donations, or communicate with us via email or other channels.
                  </li>
                  <li>
                    <strong>Automatically:</strong> Through cookies, web beacons, and other tracking technologies that collect data about your interaction with our website.
                  </li>
                  <li>
                    <strong>From Third Parties:</strong> From service providers, such as payment processors or analytics providers, that assist us in operating our website and services.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">3. How We Use Your Information</h2>
                <p className="mb-3">We may use your information for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To communicate with you about church events, services, or updates.</li>
                  <li>To process donations or payments for church-related activities.</li>
                  <li>To respond to your inquiries, prayer requests, or other communications.</li>
                  <li>To improve our website, services, and user experience.</li>
                  <li>To send newsletters, announcements, or other promotional materials (with your consent, where required).</li>
                  <li>To comply with legal obligations or protect the safety and security of our community.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">4. How We Share Your Information</h2>
                <p className="mb-3">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Service Providers:</strong> With trusted third-party vendors (e.g., payment processors, email service providers) who assist us in operating our website and services, provided they agree to keep your information confidential.
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> When required by law, such as in response to a subpoena, court order, or other legal process.
                  </li>
                  <li>
                    <strong>Church Community:</strong> In limited cases, such as sharing contact information with ministry leaders to facilitate church activities (e.g., small groups or events), with your consent.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">5. Cookies and Tracking Technologies</h2>
                <p>
                  Our website uses cookies and similar technologies to enhance your experience, analyze website performance, and deliver personalized content. You can manage your cookie preferences through your browser settings. By continuing to use our website, you consent to our use of cookies as described in this policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">6. Data Security</h2>
                <p>
                  We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">7. Your Choices and Rights</h2>
                <p className="mb-3">You have the following rights regarding your personal information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Access and Update:</strong> You may request access to or updates to the personal information we hold about you.
                  </li>
                  <li>
                    <strong>Opt-Out:</strong> You may unsubscribe from our newsletters or promotional communications by following the instructions in those communications.
                  </li>
                  <li>
                    <strong>Deletion:</strong> You may request the deletion of your personal information, subject to legal or operational requirements.
                  </li>
                </ul>
                <p className="mt-3">
                  To exercise these rights, please contact us at info@thebocfellowship.org.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">8. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review their privacy policies before providing any personal information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">9. Children's Privacy</h2>
                <p>
                  Our website and services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">10. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website with a revised effective date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">11. Contact Us</h2>
                <p className="mb-3">
                  If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="pl-6 space-y-1">
                  <p><strong>Body of Christ International Fellowship</strong></p>
                  <p>Nairobi, Kenya [Headquarters]</p>
                  <p>Telephone: +254721658788</p>
                  <p>Email: info@thebocfellowship.org</p>
                  <p>Website: www.thebocfellowship.org</p>
                </div>
              </section>

              <p className="mt-8 text-sm text-muted-foreground italic">
                By using our website, you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;