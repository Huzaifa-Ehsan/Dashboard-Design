import React from "react";

const FeedbackData = ({ selectedOption }) => {
  // Detailed content for each option
  const content = {
    "Language Proficiency": {
      heading: "Language Proficiency Feedback",
      date: "5 Dec, 09:00am",
      description: "Content for Language Proficiency...",
      additional:
        "Feedback on language skills including vocabulary, fluency, and grammar.",
    },
    "Cultural Harmony": {
      heading: "Cultural Harmony Feedback",
      date: "6 Dec, 10:30am",
      description: "Content for Cultural Harmony...",
      additional:
        "Feedback on cultural awareness, adaptation, and inclusiveness.",
    },
    "Issue Resolution": {
      heading: "Issue Resolution Feedback",
      date: "7 Dec, 11:45am",
      description: "Content for Issue Resolution...",
      additional:
        "Feedback on problem-solving skills, approach to conflict resolution, and effectiveness.",
    },
  };

  const selectedContent = content[selectedOption] || {
    heading: "Collaboration Feedback",
    date: "9 Nov, 10:45am",
    description: "Content for Collaboration",
    additional: "Feedback on Colloaboration",
  };

  return (
    <>
      <div className="bg-[#fff] px-4 py-8 rounded-md">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-[#6838A1] font-semibold text-xl">
              {selectedContent.heading}
            </span>
            <span className="text-[#6838A1] text-sm">{selectedContent.date}</span>
          </div>
          <div>
           {selectedContent.description}
          </div>
          <div>
            <span className="text-[#6838A1] font-semibold">
              {selectedContent.heading} {" "}
            </span>
             for you, Hassan
          </div>
          <div>
            <span className="text-[#63da8a]">Positive Feedback</span>
            <li className="ml-2">
              {selectedContent.additional}
            </li>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default FeedbackData;
