import { ContactCard } from "@/components/contactsus/contactcard";
import ContactHeroSection from "@/components/contactsus/contactHero";

export default function ContactUs() {
  return (
    <>
      <ContactHeroSection></ContactHeroSection>

      <div className="flex items-center md:py-30 md:mt-0 sm:mb-12 md:mb-0 justify-center">
        <div className="flex items-center justify-center   gap-10 p-6 md:w-[80%] w-[90%] ">
          <ContactCard
            title="Send us email"
            description={`Have a question, suggestion, or just want to say hi? \n Drop us an email and we'll get back to you fast.`}
            action="Email us"
          />
          {/* <ContactCard
            title="Call us"
            description="Prefer speaking directly? We'd love to chat. Our lines are open from 9AM – 5PM (EAT), Monday to Friday."
            action="+254 712 345 678"
          /> */}
          {/* <ContactCard
            title="Chat on WhatsApp"
            description="Need quick help or want to follow up on something? Message us on WhatsApp and we'll reply as soon as we can."
            action="Chat with us"
          />
          <ContactCard
            title="Text Us (SMS)"
            description="Short on time? Send us a quick SMS and we'll respond promptly during business hours."
            action="Text us"
          /> */}
        </div>
      </div>
    </>
  );
}
