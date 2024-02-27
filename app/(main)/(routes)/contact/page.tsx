"use client";
import Header from "@/components/ui/header";
import React from "react";
import { Mail, Phone, Pin } from "lucide-react";
import Aos from "aos";

function ContactPage() {
  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Header />
      <div
        data-aos="fade-up"
        className="max-w-6xl mt-20 flex justify-center items-center"
      >
        <div className="rounded-lg p-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 text-gray-100">
            Contact Us
          </h1>
          <div className="mb-6">
            <p className="text-sm md:text-md text-gray-100 leading-relaxed">
              We'd love to hear from you! Feel free to reach out to us for any
              inquiries or feedback.
            </p>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-100">
              Contact Information
            </h2>
            <div className="flex items-center mb-3">
              <Mail size={20} color="#4a5568" className="mr-2" />
              <p className="text-base text-gray-100">Email: info@intellicanet.com  </p>
            </div>
            <div className="flex items-center mb-3">
              <Phone size={20} color="#4a5568" className="mr-2" />
              <p className="text-base text-gray-100">Phone: +123-456-7890</p>
            </div>
            <div className="flex items-center">
              <Pin size={20} color="#4a5568" className="mr-2" />
              <p className="text-base text-gray-100">
                Address: 123 Main Street, City, Country
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
