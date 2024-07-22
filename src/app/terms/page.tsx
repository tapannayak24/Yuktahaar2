import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

export default function Terms() {
  return (
    <Container>
      <SectionTitle
        preTitle="Legal"
        title="Terms and Conditions"
      >
        Please read these terms carefully before using our services.
      </SectionTitle>

      <div className="prose dark:prose-invert max-w-none">
        <h2>1. Introduction</h2>
        <p>Welcome to Yuktahaar. These Terms and Conditions govern your use of our services and form a binding contractual agreement between you and us.</p>

        <h2>2. Acceptance of Terms</h2>
        <p>By using Yuktahaar's services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these Terms and Conditions, you must not use our services.</p>

        <h2>3. Changes to Terms</h2>
        <p>We reserve the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon notification to our users. Your continued use of our services following the notification of revised Terms and Conditions means that you accept and agree to the changes.</p>

        <h2>4. Use of Services</h2>
        <p>You agree to use Yuktahaar's services only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the services. This includes respecting the community guidelines in our WhatsApp groups and other communication channels.</p>

        <h2>5. Order and Delivery</h2>
        <p>By placing an order through Yuktahaar, you agree to provide accurate and complete information about your order and delivery details. Yuktahaar reserves the right to refuse or cancel any order for any reason at any time.</p>

        <h2>6. Product Information</h2>
        <p>While we strive to provide accurate product information, Yuktahaar does not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free. If a product offered by Yuktahaar is not as described, your sole remedy is to return it in unused condition.</p>

        <h2>7. Pricing and Payment</h2>
        <p>All prices are subject to change without notice. Yuktahaar reserves the right to modify or discontinue any product without notice. We are not responsible for any pricing, typographical, or other errors, and reserve the right to cancel any orders arising from such errors.</p>

        <h2>8. Limitation of Liability</h2>
        <p>To the fullest extent permitted by applicable law, Yuktahaar shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your use or inability to use our services.</p>

        <h2>9. Governing Law</h2>
        <p>These Terms and Conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in Nagpur, Maharashtra.</p>

        <h2>10. Contact Us</h2>
        <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
        <p>
          Email: info@yuktahaar.org<br />
          Email: yuktahaarorganics@gmail.com<br />
          Phone: +91 7987624802<br />
          Address: Plot no 26, Dharampeth housing society, 4th layout, Jaiprakash nagar, khamla, Nagpur 440025
        </p>
      </div>
    </Container>
  );
}