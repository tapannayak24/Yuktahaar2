import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

export default function Contact() {
  return (
    <Container>
      <SectionTitle preTitle="Get in Touch" title="Contact Us">
        We'd love to hear from you. Reach out to us for any queries or support.
      </SectionTitle>

      <div className="flex flex-col md:flex-row justify-between gap-8 mb-20">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            <strong>Address:</strong> Plot no 26, Dharampeth housing society,
            4th layout, Jaiprakash nagar, khamla, Nagpur 440025
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            <strong>Email:</strong> yuktahaarorganics@gmail.com
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            <strong>Phone:</strong> 7987624802
          </p>
        </div>
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold mb-4">Send us a Message</h3>
          {/* Add a contact form here */}
          <p className="text-gray-600 dark:text-gray-400">
            Contact form coming soon. In the meantime, please reach out to us
            via email or phone.
          </p>
        </div>
      </div>
    </Container>
  );
}
