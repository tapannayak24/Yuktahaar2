import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

export default function Privacy() {
  return (
    <Container>
      <SectionTitle
        preTitle="Legal"
        title="Privacy Policy"
      >
        Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.
      </SectionTitle>

      <div className="prose dark:prose-invert max-w-none">
        <h2>1. Introduction</h2>
        <p>Welcome to Yuktahaar. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services or visit our website.</p>

        <h2>2. Information We Collect</h2>
        <p>We may collect information about you in various ways, including:</p>
        <ul>
          <li><strong>Personal Data:</strong> Name, address, email, phone number, and other information you provide when using our services or joining our WhatsApp groups.</li>
          <li><strong>Order Information:</strong> Details about the products you order, including quantity and frequency.</li>
          <li><strong>Communication Data:</strong> Information from your interactions with us via WhatsApp, email, or phone.</li>
          <li><strong>Payment Information:</strong> Details related to your payments, though we do not store complete credit card information.</li>
        </ul>

        <h2>3. Use of Your Information</h2>
        <p>We use the collected information to:</p>
        <ul>
          <li>Process and deliver your orders</li>
          <li>Communicate with you about product availability and orders</li>
          <li>Improve our services and product offerings</li>
          <li>Send you information about organic farming and healthy living</li>
          <li>Manage our community of consumers and producers</li>
        </ul>

        <h2>4. Disclosure of Your Information</h2>
        <p>We may share your information in the following situations:</p>
        <ul>
          <li><strong>With Producers:</strong> We may share your order information with our partner farmers and producers to fulfill your orders.</li>
          <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or to protect our rights or the rights of others.</li>
        </ul>

        <h2>5. Data Security</h2>
        <p>We implement reasonable security measures to protect your personal information. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.</p>

        <h2>6. Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal information. You can also opt out of our communications at any time.</p>

        <h2>7. Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>

        <h2>8. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <p>
          Email: yuktahaarorganics@gmail.com<br />
          Phone: +91 7987624802<br />
          Address: Plot no 26, Dharampeth housing society, 4th layout, Jaiprakash nagar, khamla, Nagpur 440025
        </p>
      </div>
    </Container>
  );
}