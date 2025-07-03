import { Column, Flex, Heading, Text } from "@once-ui-system/core";
import ContactForm from "./ContactForm";
import { baseURL, person, contact } from "@/resources";
import { MdOutlineMail, MdOutlineAccessTime } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { sendEmail } from "@/lib/sendEmail";

export const dynamic = "force-dynamic";

export default function Kontakti() {
  async function handleSubmit(formData: FormData) {
    "use server";

    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const subject = formData.get("subject")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    await sendEmail({ name, email, subject, message });
  }

  return (
    <Column maxWidth="m" gap="xl" paddingX="l">
      {/* ... Останалата част от страницата ... */}

      <Flex fillWidth gap="xl" mobileDirection="column" paddingX="l" marginTop="xl">
        {/* Информация за контакт - същото като преди */}

        <Column flex={2} gap="l">
          <Heading variant="heading-strong-l" marginBottom="m">
            Изпратете съобщение
          </Heading>

          <ContactForm handleSubmit={handleSubmit} />
        </Column>
      </Flex>
    </Column>
  );
}
