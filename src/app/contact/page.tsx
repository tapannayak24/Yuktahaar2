import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <Container>
      <SectionTitle preTitle="Get in Touch" title="Contact Us">
        We'd love to hear from you. Reach out to us for any queries or support.
      </SectionTitle>

      <div className="max-w-2xl mx-auto bg-lime-50 dark:bg-lime-950 rounded-lg shadow-lg p-4 sm:p-8 mt-8">
        <div className="space-y-6">
          <div className="flex items-start">
            <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-lime-500 mr-3 sm:mr-4 flex-shrink-0 mt-1" />
            <p className="text-base sm:text-lg">
              Plot No. 26, Dharampeth Housing Society,
              <br />
              4th layout, Jaiprakash Nagar, Khamla,
              <br />
              Nagpur 440025
            </p>
          </div>

          <div className="flex items-center">
            <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-lime-500 mr-3 sm:mr-4 flex-shrink-0" />
            <a
              href="mailto:info@yuktahaar.org"
              className="text-base sm:text-lg text-lime-600 dark:text-lime-400 hover:underline break-all"
            >
              info@yuktahaar.org
            </a>
          </div>

          <div className="flex items-center">
            <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-lime-500 mr-3 sm:mr-4 flex-shrink-0" />
            <a
              href="tel:+917987624802"
              className="text-base sm:text-lg text-lime-600 dark:text-lime-400 hover:underline"
            >
              +91 7987624802
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}