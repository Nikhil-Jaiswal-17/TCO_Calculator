import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "What is Total Cost of Ownership (TCO)?",
      answer:
        "Total Cost of Ownership (TCO) is the complete cost of owning a vehicle, including purchase price, maintenance, fuel, insurance, taxes, and more over its lifetime.",
    },
    {
      question: "How does the TCO calculator work?",
      answer:
        "The TCO calculator uses data inputs like purchase price, fuel costs, maintenance expenses, and depreciation to calculate the total cost of owning a vehicle over a specified period.",
    },
    {
      question: "What information do I need to use the TCO calculator?",
      answer:
        "You need details like vehicle type, purchase price, fuel efficiency, maintenance costs, annual mileage, and the state or region where the vehicle is used.",
    },
    {
      question: "Can I compare multiple vehicles using the calculator?",
      answer:
        "Yes, you can compare the TCO of multiple vehicles, such as Internal Combustion Engine (ICE) vehicles versus Electric Vehicles (EVs), to determine which option is more cost-effective.",
    },
    {
      question: "What are the factors considered in the TCO calculation?",
      answer:
        "The calculator considers factors such as fuel costs, maintenance, insurance, depreciation, battery replacement (for EVs), government subsidies, and taxes.",
    },
    {
      question: "How accurate are the results provided by the TCO calculator?",
      answer:
        "The results are estimates based on the data provided by the user and may vary depending on actual usage and market conditions.",
    },
    {
      question: "Do the calculations include government incentives or subsidies?",
      answer:
        "Yes, the calculator can include government incentives or subsidies if applicable to your location and vehicle type.",
    },
    {
      question: "Why do I need to enter my state and vehicle model?",
      answer:
        "This information helps tailor the TCO calculation to your region's fuel prices, taxes, and available government incentives.",
    },
    {
      question:
        "What is the purpose of the 'Consider Battery Replacement' option?",
      answer:
        "This option factors in the cost of replacing the battery for EVs, which can impact the total cost over the vehicle's lifetime.",
    },
    {
      question: "How do I interpret the results of the TCO calculator?",
      answer:
        "The results show the total cost of owning a vehicle over the selected period. You can compare results across different vehicles to make an informed decision.",
    },
    {
      question: "Can I save or share the results of the TCO calculation?",
      answer:
        "Yes, you can save or share the results in formats like PDF or Excel, depending on the features implemented in the calculator.",
    },
    {
      question: "Are there any limitations to the TCO calculator?",
      answer:
        "The calculator provides estimates and may not account for unpredictable factors like sudden fuel price changes or maintenance surprises.",
    },
    {
      question: "Is the TCO calculator mobile-friendly?",
      answer:
        "Yes, the calculator is designed to be responsive and can be accessed from mobile devices.",
    },
    {
      question: "Who should use the TCO calculator?",
      answer:
        "Anyone considering buying a new vehicle, switching to an EV, or comparing costs between multiple vehicle options can use the TCO calculator.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container container">
      <h2 style={{ width: "100%", margin: "0 auto", borderRadius: "5px", backgroundColor: "#19AEA5", color: "white" }}>FAQ</h2>
      <div className="faq-list">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div
              className="faq-question"
              onClick={() => toggleFaq(index)}
            >
              {item.question}
              <span className="faq-toggle">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
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
