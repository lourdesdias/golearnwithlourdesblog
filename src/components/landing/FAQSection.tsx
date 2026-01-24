import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is this a legitimate business or a pyramid scheme?",
    answer: "This is a 100% legitimate travel membership company with real products, real savings, and a legal business structure. The income opportunity comes from helping others access wholesale travel — not from recruiting. You earn commissions on travel bookings and memberships, just like any other referral-based business.",
  },
  {
    question: "How much does it cost to get started?",
    answer: "There are different membership levels depending on your goals. The basic travel membership starts at an affordable monthly fee, and the business opportunity has a one-time startup investment. Watch the webinar for complete details on all options.",
  },
  {
    question: "Do I need travel experience to succeed?",
    answer: "Absolutely not! Most of our successful members had zero travel industry experience. You don't need to become a travel agent — you simply share access to the same wholesale pricing you use. The system and training do the heavy lifting.",
  },
  {
    question: "How are the tax deductions legal?",
    answer: "When you have a legitimate home-based business, you can deduct ordinary business expenses — including travel for business purposes. This is standard IRS practice. We recommend consulting with a tax professional about your specific situation, but the structure is completely legal and widely used.",
  },
  {
    question: "What if I'm not tech-savvy?",
    answer: "Our system is designed for simplicity. If you can use Facebook and email, you can run this business. Plus, you'll have access to training, support, and a community of helpful members who are happy to guide you.",
  },
  {
    question: "How is this different from travel MLMs I've seen before?",
    answer: "Great question! Unlike many travel programs, our focus is on the actual travel savings first. The business opportunity is optional. Our wholesale access is real (not inflated comparisons), and our compensation plan is designed for steady, sustainable income rather than 'get rich quick' promises.",
  },
  {
    question: "How quickly can I expect to see results?",
    answer: "Results vary based on effort and consistency. Most members see travel savings immediately. For the income side, some earn their first commissions within weeks, while building significant income typically takes 6-18 months of consistent effort. We focus on steady, sustainable growth.",
  },
  {
    question: "Can I really build 'legacy income' that passes to my children?",
    answer: "Yes! Our business structure is designed for this exact purpose. Your business and its income can be willed to your beneficiaries, and the income continues to be paid monthly. Guy's story is just one example of this working in real life.",
  },
  {
    question: "What support will I receive?",
    answer: "You'll have access to comprehensive training, weekly coaching calls, a private community of fellow members, and personal mentorship from experienced leaders. We're invested in your success because when you succeed, we all succeed.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Headlines */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Your Path to Clarity
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Answers to your most important questions
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-border rounded-lg hover:border-primary transition-colors duration-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full bg-muted hover:bg-primary-light px-6 py-4 text-left flex justify-between items-center transition-colors duration-200"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 py-4 bg-card text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
