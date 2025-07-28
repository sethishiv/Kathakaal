import React from "react";
import {
  FaUser,
  FaShieldAlt,
  FaFileAlt,
  FaCheckCircle,
  FaUniversity,
  FaArrowDown,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaUser />,
    title: "Step 1: Register",
    desc: "Enter your name, email, and phone number to create your account.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Step 2: Verify Identity",
    desc: "Authenticate your identity with a quick OTP or by uploading KYC documents.",
  },
  {
    icon: <FaFileAlt />,
    title: "Step 3: Submit Documents",
    desc: "Provide income proof and recent bank statements for eligibility check.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Step 4: Get Approval",
    desc: "Our AI reviews your info and instantly tells you if you're approved.",
  },
  {
    icon: <FaUniversity />,
    title: "Step 5: Receive Funds",
    desc: "Once approved, the loan is directly sent to your bank account.",
  },
];

const iconBg = [
  "bg-gradient-to-tr from-blue-400 to-blue-600 text-white",
  "bg-gradient-to-tr from-green-400 to-green-600 text-white",
  "bg-gradient-to-tr from-yellow-400 to-yellow-600 text-white",
  "bg-gradient-to-tr from-purple-400 to-purple-600 text-white",
  "bg-gradient-to-tr from-pink-400 to-pink-600 text-white",
];

const EasyStepsSection = () => (
  <section className="py-16 bg-gradient-to-b from-blue-50 via-white to-blue-50 text-gray-800">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center text-blue-800 drop-shadow">
        5 Simple Steps to Instantly Get Your Loan
      </h2>

      {/* Mobile & Tablet: Vertical stack with upward arrow */}
      <div className="flex flex-col md:hidden gap-10">
        {steps.map((step, idx) => (
          <React.Fragment key={idx}>
            {/* Card */}
            <div className="relative bg-white/90 backdrop-blur-lg border border-blue-200 rounded-2xl shadow-xl px-6 py-8 flex flex-col items-center text-center transition duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                
              </div>
              {/* Step icon */}
              <div
                className={`mb-4 mt-5 w-14 h-14 flex items-center justify-center shadow-lg rounded-full ${iconBg[idx]} text-3xl`}
              >
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2 drop-shadow-sm">{step.title}</h3>
              <p className="text-gray-700 text-base leading-relaxed">{step.desc}</p>
            </div>
            {/* Up-pointing arrow between steps except after last */}
            {idx < steps.length - 1 && (
              <div className="flex justify-center">
                <FaArrowDown
                  className="text-blue-400 text-4xl animate-bounce"
                  style={{ transform: "rotate(180deg)" }}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Desktop: Horizontal scroll with left-pointing arrow (rotated FaArrowDown) on the left side */}
      <div
        className="hidden bg-transparent md:flex flex-row md:overflow-x-auto md:space-x-15 no-scrollbar pt-2"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="relative flex-shrink-0 w-[320px] bg-white/80 backdrop-blur-xl border border-blue-200 rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center hover:shadow-blue-300 hover:-translate-y-1 transition transform duration-300 cursor-pointer scroll-snap-align-start"
          >
            {/* Left-pointing arrow, except for the first step */}
            {idx > 0 && (
              <FaArrowDown
                className="hidden md:block absolute left-[-36px] top-1/2 -translate-y-1/2 rotate-[-90deg] text-blue-400 text-4xl animate-bounce"
                aria-label="Previous Step"
                role="img"
              />
            )}
            {/* Step number */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
              
            </div>
            {/* Step icon */}
            <div className={`mb-4 mt-5 w-14 h-14 flex items-center justify-center rounded-full shadow-lg ${iconBg[idx]} text-3xl`}>
              {step.icon}
            </div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2 drop-shadow-sm">{step.title}</h3>
            <p className="text-gray-700 text-base leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EasyStepsSection;
