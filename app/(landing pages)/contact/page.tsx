"use client"
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState, useRef } from "react";

function ContactPage() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('idle');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('LastName'),
      email: formData.get('email'),
      phoneNumber: formData.get('number'),
      message: formData.get('message'),
      privacyPolicy: formData.get('checkbox') === 'on'
    };

    try {
      await fetch('https://script.google.com/macros/s/AKfycbygdAogKSgm0KEp0GT8wdEGkz_Y9CpPflSVn99KvZsITba_g_AZHZ0wXIXzK6fATrgi/exec', {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setSubmitStatus('success');
      formRef.current?.reset();
      alert('Form submitted successfully! We will get back to you soon.');
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      alert('Error submitting form. Please try again later.');
    }
  };

  return (
    <div className="bg-[#FAFBFE] w-full h-auto pt-[7.3rem] overflow-hidden">
      <NavBar />
      <center className="px-4">
        <div className="flex flex-col bg-[#FFF] border-[0.8px] w-full max-w-[32.33rem] border-solid border-[#E3E3E3] h-auto min-h-[50.5rem] pt-[4.2rem] text-start">
          <div className="text-center">
            <h1 className="font-semibold font-inter text-[0.8rem] text-[#1B2ACB]">
              contact us
            </h1>
            <h1 className="text-[#181D27] font-semibold text-[2.5rem]">
              Get in touch
            </h1>
            <p className="text-[1.05rem] font-inter text-[#535862] mt-[1.37rem]">
              We&apos;d love to hear from you. Please fill out this form.
            </p>
          </div>
          {/* form */}
          <form ref={formRef} onSubmit={handleSubmit}>
            <center className="text-start place-items-center px-4">
              <div className="mt-[3.5rem] flex flex-col gap-[1.7rem] md:flex-row w-full max-w-[25.44rem]">
                <div className="flex flex-col w-full">
                  <label htmlFor="" className="text-[0.85rem] text-[#414651]">
                    First Name
                  </label>
                  <Input
                    type="text"
                    name="firstName"
                    id=""
                    placeholder="First Name"
                    className="w-full"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="" className="text-[0.85rem] text-[#414651]">
                    Last Name
                  </label>
                  <Input
                    type="text"
                    name="LastName"
                    id=""
                    placeholder="Last Name"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col my-[1.27rem] w-full max-w-[25.44rem]">
                <label htmlFor="" className="text-[0.85rem] text-[#414651]">
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  id=""
                  placeholder="you@company.com"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col my-[1.27rem] w-full max-w-[25.44rem]">
                <label htmlFor="" className="text-[0.85rem] text-[#414651]">
                  Phone Number
                </label>
                <Input
                  type="number"
                  name="number"
                  id=""
                  placeholder="+91"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col my-[1.27rem] w-full max-w-[25.44rem]">
                <label htmlFor="" className="text-[0.85rem] text-[#414651]">
                  Message
                </label>
                <Input
                  type="text"
                  name="message"
                  id=""
                  placeholder="Type your message here"
                  className="w-full h-[6.78rem]"
                />
              </div>
              <div className="my-[1.27rem] flex justify-start items-center gap-2 w-full max-w-[25.44rem]">
                <input 
                  type="checkbox" 
                  name="checkbox" 
                  id="privacyPolicy" 
                  required 
                  className="h-4 w-4 rounded border-gray-300"
                />
                <label htmlFor="privacyPolicy" className="text-[0.85rem] text-[#414651]">
                  I agree to the privacy policy <span className="text-red-500">*</span>
                </label>
              </div>
              <Button 
                className="bg-primaryColor text-white hover:bg-[#1b2acbe3] px-8 py-3 w-[330px] max-w-[25.44rem] h-[54px] rounded-xl text-lg mb-8"
                disabled={submitStatus === 'success'}
              >
                {submitStatus === 'success' ? 'message sent' : 'send message'}
              </Button>
            </center>
          </form>
        </div>
        
      </center>
      <Footer/>
    </div>
  );
}

export default ContactPage;
