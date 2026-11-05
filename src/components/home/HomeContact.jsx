import { ArrowRight, MapPin } from "lucide-react";
import { site } from "../../data/site";
import Button from "../common/Button";
import ContactInfo from "../contact/ContactInfo";
import SectionHeading from "../common/SectionHeading";

const HomeContact = () => (
  <section className="section-padding bg-mist">
    <div className="container grid gap-10 lg:grid-cols-12 lg:gap-14">
      <div className="lg:col-span-4">
        <SectionHeading
          align="left"
          eyebrow="Contact"
          title="Come and see the workshop."
          description="We are in Niboyi, Kicukiro — a short drive from the airport and easy to reach from across Kigali."
        />

        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-navy-100 bg-white p-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-eco-50 text-eco-700">
            <MapPin className="h-5 w-5" aria-hidden="true" />
          </span>
          <p className="text-sm leading-relaxed text-navy-600">
            <span className="font-semibold text-navy">{site.address.line1}</span>
            <br />
            {site.address.line2}
          </p>
        </div>

        <Button to="/contact" variant="outline" className="mt-6" iconRight={ArrowRight}>
          Contact page &amp; map
        </Button>
      </div>

      <div className="lg:col-span-8">
        <ContactInfo compact />
      </div>
    </div>
  </section>
);

export default HomeContact;
