"use client"
import React, { useState, useRef, useEffect } from 'react'
import { X, MessageSquare, CheckCircle } from 'lucide-react'

function Feedback() {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);
  const feedbackTextRef = useRef(null);

  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzxER3x9p8zyhd8Th4kf0O6-_Sq30CmXLwY8elhphF2KKD4mxotD7774wWkZ4kBFG4o/exec';

  const openFeedback = () => {
    setIsFeedbackOpen(!isFeedbackOpen);
  };

  const handleSubmit = async (starRating) => {
    if (starRating === 0) {
      alert("Please select a rating");
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rating: starRating,
          feedback: feedbackTextRef.current?.value || ''
        }),
      });

      setSubmitSuccess(true);
      setTimeout(() => {
        setIsFeedbackOpen(false);
        setRating(0);
        setHoverRating(0);
        setSubmitSuccess(false);
        if (feedbackTextRef.current) {
          feedbackTextRef.current.value = '';
        }
      }, 3000);
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Sorry, there was an error submitting your feedback. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      {!isFeedbackOpen ? (
        // Responsive button sizing
        <button 
          onClick={() => setIsFeedbackOpen(true)}
          className="bg-blue-500 text-white rounded-full p-3 md:p-4 shadow-lg hover:bg-blue-600 transition-all flex items-center justify-center"
        >
          <MessageSquare className='w-5 h-5 md:w-7 md:h-7' />
        </button>
      ) : (
        // Responsive feedback panel
        <div className="feedback bg-[#FAFBFE] rounded-lg shadow-xl p-3 md:p-4 w-[90vw] max-w-xs md:max-w-sm transition-all ease-in duration-500 z-10">
          {/* Show success view when submitted successfully */}
          {submitSuccess ? (
            <div className="py-6 flex flex-col items-center text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
              <p className="text-gray-600">
                Your feedback has been submitted successfully. We appreciate your input!
              </p>
            </div>
          ) : (
            <>
              <div className='feed-header flex justify-between items-center mb-3 md:mb-4'>
                <div className="flex items-center gap-2">
                  <MessageSquare className='w-5 h-5 text-blue-500' />
                  <h6 className="font-medium">Feedback</h6>
                </div>
                <div>
                  <button 
                    onClick={() => setIsFeedbackOpen(false)}
                    className="hover:bg-gray-100 p-1 rounded-full"
                  >
                    <X size={18} className="text-gray-600" />
                  </button>
                </div>
              </div>
              
              <div className='feed-content'>
                <div className='feed-top mb-3 md:mb-4'>
                  <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">Rate Your Experience</h3>
                  <p className="text-xs md:text-sm text-gray-600">Your input is valuable in helping us better understand your needs and tailor our service accordingly.</p>
                </div>
                
                <div className='feed-mid mb-3 md:mb-4'>
                  <div className='rating-stars flex gap-1 md:gap-2 justify-center'>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="focus:outline-none"
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-6 w-6 md:h-8 md:w-8 transition-colors duration-200" 
                          fill={star <= (hoverRating || rating) ? "gold" : "none"} 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                          strokeWidth={star <= (hoverRating || rating) ? "0" : "1"}
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" 
                          />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className='feed-bottom'>
                  <p className="text-xs md:text-sm text-gray-600 mb-2">Got suggestions? We'd love to hear them!</p>
                  <textarea 
                    ref={feedbackTextRef}
                    className="w-full p-2 border border-gray-300 rounded-md mb-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder='Write here'
                    rows={3}
                  ></textarea>
                  <button 
                    onClick={() => handleSubmit(rating)}
                    disabled={isSubmitting}
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit now'}
                  </button>
                </div>
              </div>
            </>
          )}
          {submissionError && (
            <div className="text-red-500 text-sm mb-3">{submissionError}</div>
          )}
        </div>
      )}
    </div>
  )
}

export default Feedback