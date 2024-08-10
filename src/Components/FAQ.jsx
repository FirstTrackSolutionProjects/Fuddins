import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqItems = [
    {
      question: "What is Fuddins?",
      answer:
        "Fuddins is the online home delivery services app, with the categories of food, groceries, vegetables, fruits, diary, beverages, snacks, deserts, house hold item, beauty & cosmetics, baby care products, tobacco, garments, pharma, footwear, electronics & electrical products, sports item, pc & laptop & many more.",
    },
    {
      question: "How can i sell my products on Fuddins?",
      answer: "Are you a  vendor? Looking for a partner with us. Feel free to contact us or visit partner page",
    },
    {
      question: "How can i download the Fuddins app",
      answer: "You can download the Fuddins application directly from play store or link provided in the footer of website.",
    },
    {
      question: "Do you provide home delivery services?",
      answer: "Yes, we provide the delivery services at your doorstep on time.",
    },
    {
      question: "Where is this service available?",
      answer: "We currently deliver all the major cities in Odisha.",
    },
    {
      question: "Carrier with us?",
      answer: "Looking for carrier in Fuddins, feel free to contact us at carrier@fuddins.com.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqItems.map((item, index) => (
          <div key={index} className="faq-item">
            <div
              className="flex justify-between items-center cursor-pointer bg-gray-100 p-4 rounded"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="text-lg font-medium">{item.question}</h3>
              <span className="text-lg">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="p-4 bg-white border-t border-gray-200">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
