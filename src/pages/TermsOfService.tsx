import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Terms of Service
            </h1>
            <p className="text-center text-lg font-semibold mb-8">
              Body of Christ International Fellowship
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              <strong>Effective Date:</strong> October 17, 2025
            </p>

            <div className="space-y-6 text-foreground">
              <p>
                Welcome to the website of Body of Christ International Fellowship ("we," "us," or "our"). These Terms of Service ("Terms") govern your access to and use of our website, including any content, services, or features provided through the website (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree with these Terms, please do not use our Services.
              </p>

              <section>
                <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using our website, you confirm that you are at least 18 years of age or have the consent of a parent or legal guardian, and you agree to comply with these Terms. We reserve the right to modify these Terms at any time, and such changes will be effective upon posting on our website. Your continued use of the Services after any changes constitutes your acceptance of the updated Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">2. Use of the Services</h2>
                <p className="mb-3">
                  You agree to use the Services only for lawful purposes and in a manner consistent with the mission and values of Body of Christ International Fellowship. You may not:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the Services in any way that violates applicable laws or regulations.</li>
                  <li>Engage in conduct that disrupts, interferes with, or harms the functionality or security of the Services.</li>
                  <li>Attempt to gain unauthorized access to any part of the Services, including other users' accounts or data.</li>
                  <li>Post, upload, or share content that is offensive, defamatory, or inappropriate, including content that promotes hatred, discrimination, or violence.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">3. User Content</h2>
                <p className="mb-3">
                  You may have the opportunity to submit content, such as comments, prayer requests, or event registrations, through the Services ("User Content"). By submitting User Content, you:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Grant us a non-exclusive, royalty-free, worldwide license to use, display, and distribute your User Content in connection with our Services.</li>
                  <li>Represent that you own or have the necessary rights to share the User Content and that it does not violate any laws or infringe on the rights of others.</li>
                  <li>Acknowledge that we may review, moderate, or remove User Content at our discretion.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">4. Donations and Payments</h2>
                <p className="mb-3">
                  Our website may facilitate donations or payments for events, programs, or other church-related activities. All payments are processed through secure third-party payment processors. By making a payment, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete payment information.</li>
                  <li>Comply with the terms of service of the third-party payment processor.</li>
                  <li>Understand that donations are voluntary and non-refundable unless otherwise stated.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">5. Intellectual Property</h2>
                <p>
                  All content on our website, including text, images, logos, and other materials (collectively, "Content"), is owned by or licensed to Body of Christ International Fellowship and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works of the Content without our prior written consent, except for personal, non-commercial use.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">6. Third-Party Links and Services</h2>
                <p>
                  Our website may contain links to third-party websites or services that are not owned or controlled by us. We are not responsible for the content, policies, or practices of these third-party sites. Your use of third-party sites is at your own risk, and you should review their terms and policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">7. Termination</h2>
                <p>
                  We reserve the right to suspend or terminate your access to the Services at our sole discretion, without notice, if we believe you have violated these Terms or engaged in conduct that harms our community or operations. Upon termination, your right to use the Services will immediately cease.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">8. Disclaimer of Warranties</h2>
                <p>
                  The Services are provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied. We do not guarantee that the Services will be uninterrupted, error-free, or secure. To the fullest extent permitted by law, we disclaim all warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">9. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, Body of Christ International Fellowship, its affiliates, and their respective officers, employees, or agents will not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the Services, even if advised of the possibility of such damages. Our total liability to you for any claim arising from these Terms or the Services will not exceed the amount you paid, if any, to us in connection with the Services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">10. Indemnification</h2>
                <p>
                  You agree to indemnify, defend, and hold harmless Body of Christ International Fellowship, its affiliates, and their respective officers, employees, and agents from any claims, liabilities, damages, or expenses (including reasonable attorneys' fees) arising out of your use of the Services, your violation of these Terms, or your infringement of any third-party rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">11. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the state or country where Body of Christ International Fellowship is headquartered, without regard to its conflict of law principles. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in that jurisdiction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">12. Changes to These Terms</h2>
                <p>
                  We may update these Terms from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated Terms on our website with a revised effective date. Your continued use of the Services after such changes constitutes your acceptance of the updated Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">13. Contact Us</h2>
                <p className="mb-3">
                  If you have any questions or concerns about these Terms or our Services, please contact us at:
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
                By using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsOfService;