import type React from "react"
import Image from "next/image"

interface ComparisonCardProps {
  icon: React.ReactElement
  title: string
  description: string
  variant: "before" | "after"
}

const ComparisonCard: React.FC<ComparisonCardProps> = ({ icon, title, description, variant }) => {
  const bgColor = variant === "before" ? "transparent" : "transparent"
  const borderColor = variant === "before" ? "border-gray-300 hover:border-red-500 duration-300 hover:shadow-md" : "border-gray-300 hover:border-blue-500 duration-300 hover:shadow-md"

  return (
    <div className={`border ${borderColor} rounded-xl p-4 sm:p-6 ${bgColor}`}>
      <div className="flex gap-4 items-start">
        <div className="mt-1">{icon}</div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-base sm:text-lg">{title}</h3>
          <p className="text-gray-600 text-sm sm:text-base">{description}</p>
        </div>
      </div>
    </div>
  )
}

const ComparisonSection: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-16" >
      {/* Header Section */}
      <div className="text-center mb-12 sm:mb-16" >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primaryColor mb-4 sm:mb-6">
          Say goodbye to career frustration.
        </h1>
        <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto">
          From constant rejections to landing your dream job, discover the difference Careerflow can make
        </p>
      </div>

      {/* Comparison Grid */}
      <div className="grid gap-12 sm:gap-16 md:grid-cols-2 md:gap-24 relative">
        {/* Before Column */}
        <div className="space-y-6 sm:space-y-8">
          <div className="flex flex-col items-center gap-2 mb-4 sm:mb-6">
            <div className="flex items-center gap-3">
            <Image src="/cross.svg" width={32} height={32} alt="before"/>
            <h2 className="text-[#fb7e7c] font-semibold  text-[16px]  font-inter sm:text-base">BEFORE JOBSPRING</h2>
            </div>
            <p className="text-[#00143d] font-medium text-[16px] sm:text-base w-[18.56rem] text-center mt-[17px] mb-[30px]">Struggling to navigate the job market without the right tools</p>
          </div>

          {/* Before Cards */}
          <ComparisonCard
            icon={ <Image src="/rejection.svg" width={32} height={32} alt="before"/>}
            title="Rejection"
            description="Non-compliant resumes lead to rejections"
            variant="before"
          />
          <ComparisonCard
            icon={<Image src="/time.svg" width={32} height={32} alt="before"/>}
            title="Time Wasted"
            description="Job searching is a time-consuming task"
            variant="before"
          />
          <ComparisonCard
            icon={<Image src="/fragment.svg" width={32} height={32} alt="before"/>}
            title="Fragmented Tools"
            description="Switching between multiple tools is stressful"
            variant="before"
          />
        </div>

        {/* Arrow for larger screens */}
        <div className="hidden md:block absolute left-1/2 top-[65%] -translate-x-1/2 -translate-y-1/2">
        <Image src="/arrow.svg" width={62} height={32} alt="before"/>
        </div>

        {/* After Column */}
        <div className="space-y-6 sm:space-y-8">
          <div className="flex flex-col items-center gap-2 mb-4 sm:mb-6">
            <div className="flex items-center gap-[13px]">
              <Image src="/right.svg" width={32} height={32} alt="before"/>
            <h2 className="text-[#1b2acb] font-medium text-[16px] sm:text-base">AFTER JOBSPRING</h2>
            </div>
            <p className="text-[#00143d] font-medium text-[16px] sm:text-base w-[18.56rem] text-center mt-[17px] mb-[30px]">Easily navigate the job market with AI-powered tools.</p>
          </div>


          {/* After Cards */}
          <ComparisonCard
            icon={<Image src="/thumbsup.svg" width={32} height={32} alt="before"/>}
            title="No More Rejections"
            description="Instantly create ATS-friendly resumes"
            variant="after"
          />
          <ComparisonCard
            icon={<Image src="/save.svg" width={32} height={32} alt="before"/>}
            title="Save Time"
            description="Jobspring's AI tools simplify your job search"
            variant="after"
          />
          <ComparisonCard
            icon={<Image src="/all.svg" width={32} height={32} alt="before"/>}
            title="All in One Solution"
            description="Manage your entire job search in one platform"
            variant="after"
          />
        </div>
      </div>
    </div>
  
  
  )
}

export default ComparisonSection

