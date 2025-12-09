import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Where are your servers located?",
    answer: "Our primary infrastructure is located in London, UK (Docklands), with additional availability zones in Frankfurt, Germany. All locations feature Tier-3+ certification."
  },
  {
    question: "How long does deployment take?",
    answer: "VPS instances are provisioned instantly upon payment confirmation. Dedicated servers are typically online within 20 minutes, though custom configurations may take up to 24 hours."
  },
  {
    question: "Do you include DDoS protection?",
    answer: "Yes, all services (VPS and Dedicated) include our permanent, always-on DDoS mitigation (up to 2Tbps capacity) at no extra cost."
  },
  {
    question: "Can I upgrade my VPS later?",
    answer: "Absolutely. You can scale your CPU, RAM, and Storage resources instantly through the K2A control panel without data loss."
  },
  {
    question: "What operating systems are available?",
    answer: "We offer a wide range of Linux distributions (Ubuntu, Debian, AlmaLinux, Rocky Linux) and Windows Server editions (2019, 2022)."
  },
  {
    question: "Are the prices VAT inclusive?",
    answer: "Yes, all prices listed on our website include UK VAT at 20%. The price you see is the price you pay."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-neutral-950 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Frequently Asked <span className="text-royal-500">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-xl transition-all duration-300 ${openIndex === index ? 'bg-royal-900/10 border-royal-500/30' : 'bg-transparent border-white/10 hover:border-white/20'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-white' : 'text-gray-300'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-gold-400" />
                ) : (
                  <ChevronDown className="text-gray-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-400 leading-relaxed animate-fade-in-up">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};