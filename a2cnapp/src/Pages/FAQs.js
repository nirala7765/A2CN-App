import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const FAQs = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "What services does your software company offer?",
      answer: "We offer custom software development, mobile and web application development, cloud solutions, software consulting, and integration services. Additionally, we provide digital marketing applications and website ad services to enhance your online presence."
    },
    {
      question: "How do you ensure the quality of the software you develop?",
      answer: "Our quality assurance process includes thorough requirement analysis, continuous testing during development, and final testing before deployment. We use industry-standard tools to ensure the software is reliable and meets client needs."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "Our expertise includes Java, Python, JavaScript, React, Angular, Node.js, .NET, and cloud platforms like AWS and Azure. We also stay current with AI, machine learning, and IoT trends to deliver innovative solutions."
    },
    {
      question: "How do you handle data security and privacy in your projects?",
      answer: "We prioritize data security and privacy by implementing robust encryption, secure coding practices, and adhering to industry regulations like GDPR. Regular security audits ensure your data is always protected."
    },
    {
      question: "Can you integrate your software with our existing systems?",
      answer: "Yes, we can seamlessly integrate new software with your existing systems, including ERP, CRM, or other business applications, ensuring minimal disruption to your operations."
    },
    {
      question: "What is the typical timeline for a software development project?",
      answer: "Project timelines vary based on complexity and requirements. After the initial consultation and requirements gathering, we provide an estimated timeline and commit to on-time delivery with high quality."
    }
  ];

  return (
    <div className="bg-newbg min-h-screen px-4 py-8">
      <Header />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-[#09D8A1] text-[32px] font-bold mb-4 text-center">FAQs</h1>
        <p className="text-white text-center md:text-[21px] text-[16px] mb-8">Got questions? We’ve got answers!</p>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-[#09D8A1] rounded-lg overflow-hidden">
              <button
                className="w-full text-left px-4 py-3 bg-[#09D8A1] text-white font-medium hover:bg-[#07B78F] focus:outline-none focus:bg-[#07B78F] transition-colors duration-300"
                onClick={() => toggleQuestion(index)}
              >
                {faq.question}
              </button>
              {selectedQuestion === index && (
                <div className="px-4 py-3 bg-white text-black border-t border-[#09D8A1]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default FAQs;
