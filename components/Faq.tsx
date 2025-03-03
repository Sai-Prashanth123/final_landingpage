import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

function Faq() {
  return (
    <div>
 <Accordion type="single" collapsible className="w-full ">
      <AccordionItem value="item-1" className='my-3'>
        <AccordionTrigger className='text-start hover:no-underline'>What is a tailored resume builder?</AccordionTrigger>
        <AccordionContent>
        A tailored resume builder creates personalized resumes based on the job description provided by the user, ensuring a perfect match for the role.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className='text-start hover:no-underline'>How does the resume builder work?</AccordionTrigger>
        <AccordionContent>
        Simply input the job description and your details, and the builder generates a customized resume highlighting your most relevant skills and experience.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className='text-start hover:no-underline'>Is the resume builder free to use?</AccordionTrigger>
        <AccordionContent>
        Yes, our tailored resume builder is completely free of cost!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className='text-start hover:no-underline'>What makes this resume builder different from others?</AccordionTrigger>
        <AccordionContent>
        Unlike generic tools, our builder crafts resumes specifically tailored to the job description, increasing your chances of standing out.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className='text-start hover:no-underline'>How can the interview coach help me practice?</AccordionTrigger>
        <AccordionContent>
        Get interview-ready with practice questions, mock interviews, and expert tips. Record and review your sessions for improvement.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger className='text-start hover:no-underline'>What does Auto Apply do?</AccordionTrigger>
        <AccordionContent>
        Auto Apply helps you quickly apply for multiple jobs by automatically filling in application forms with the information from your resume.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger className='text-start hover:no-underline'>Can I use the tool to keep track of my job applications?</AccordionTrigger>
        <AccordionContent>
        Yes, our platform includes a job tracking feature that allows you to organize your job applications, track their status, and set reminders for follow-ups.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-8">
        <AccordionTrigger className='text-start hover:no-underline'>How does the networking feature work?</AccordionTrigger>
        <AccordionContent>
        Our networking feature allows you to connect with other job seekers and professionals in your field. You can view profiles, send messages, and expand your professional network.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-9">
        <AccordionTrigger className='text-start hover:no-underline'>Will this help me find job openings?</AccordionTrigger>
        <AccordionContent>
        We connect job seekers with employers. Our platform matches your resume and profile with relevant openings, and recruiters can search our database for qualified candidates.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-10">
        <AccordionTrigger className='text-start hover:no-underline'>Is my information kept private and secure?</AccordionTrigger>
        <AccordionContent>
        The Networking feature helps you build connections, discover mutual contacts, and craft custom referral messages to improve your chances of getting noticed by recruiters.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    
    </div>
  )
}

export default Faq