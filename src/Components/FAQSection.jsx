import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-16 px-6 md:px-10 lg:px-20 flex flex-col items-center">
      {/* Heading Section */}
      <div className="text-center max-w-2xl">
        <h2 className="text-[32px] md:text-[40px] font-bold text-[#111] leading-[36px] md:leading-[44px]">
          FREQUENTLY ASKED <br className="hidden md:block" /> QUESTIONS
        </h2>
        <p className="text-base md:text-lg text-[#111] mt-4 leading-[24px] md:leading-[26px]">
          Find answers to common questions about us.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="mt-10 w-full max-w-[900px]">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border-t border-gray-300 last:border-b"
          >
            <button
              className="w-full flex justify-between items-center py-5 text-left text-[18px] md:text-[20px] font-medium text-[#111]"
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
              <FaChevronDown
                className={`text-gray-600 transform transition-transform ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {/* Answer Section */}
            {openIndex === index && (
              <p className="text-gray-700 text-base md:text-lg leading-[24px] px-2 pb-5">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// FAQ Data
const faqData = [
  { question: "Do you offer used inventory?", answer: "No, we only offer new inventory." },
  { question: "Do you only provide racking systems?", answer: "We provide full warehouse solutions, including racking, automation, and installation services." },
  { question: "Does it take a long time to get permits for racking installations?", answer: "Permit times vary, but we assist with the process to ensure smooth approvals." },
  { question: "Do you outsource any of your work?", answer: "No, we handle everything in-house for quality control." },
  { question: "Can you help with warehouse automation and optimization?", answer: "Yes! We offer automation and optimization services for better efficiency." },
  { question: "Do you charge for drawings?", answer: "Yes, but we provide a free consultation before starting." },
  { question: "Do you offer warranties on your racking systems?", answer: "Yes, our racking systems come with a manufacturer’s warranty." },
  { question: "How soon can you install new projects?", answer: "We offer fast installations based on availability." },
  { question: "Where are you located? Do you work only in Texas or do you offer national service?", answer: "We provide services nationwide." },
];
