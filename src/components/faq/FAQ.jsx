import SectionTitle from "../lib/SectionTitle";
import { FAQAccordionItem } from "./FAQAccordionItem";
import { frequentlyAskedQuestions } from "../../data/FAQ";

export default function FAQ() {
  return (
    <section
      id="faqs"
      className="relative z-20 overflow-hidden bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]"
    >
      <div className="container mx-auto">
        <SectionTitle
          preTitle={"FAQ"}
          title={"Any Questions? Look Here"}
          titleDescription={"Get answers to your most desired questions."}
        />

        <div className="w-full px-4 pt-12">
          {frequentlyAskedQuestions.map((el) => (
            <FAQAccordionItem
              header={el.label}
              text={el.content}
              key={el.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
