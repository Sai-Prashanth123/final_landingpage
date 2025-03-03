import Image from "next/image";

export interface AdvantageCardProps {
    image: string;
    title: string;
    description: string;
    imageAspectRatio?: string;
  }
  
  export interface AdvantagesData {
    title: string;
    cards: AdvantageCardProps[];
  }
  export const advantagesData: AdvantagesData = {
    title: "Advantages of JobSpring's AI Interview",
    cards: [
      {
        image: "/UIM.svg",
        title: "Ultimate Interview Mastery",
        description: "Practice countless interviews easily. Upload your resume, job description, and role to start practicing. Hone skills, build confidence.",
        imageAspectRatio: "2.4"
      },
      {
        image: "/UIM.svg",
        title: "Targeted Company Practices",
        description: "Ace interviews at top companies like Google and Amazon. Our Interview Coach provides practice, mock interviews, and feedback to boost your confidence.",
        imageAspectRatio: "2.4"
      },
      {
        image: "/ResumeDriven.svg",
        title: "Resume-driven interview",
        description: "Practice interviewing with your own resume! Upload it, and we'll generate tailored interview questions based on your skills and experience.",
        imageAspectRatio: "1.5"
      },
      {
        image: "/InsightfuAnalytics.svg",
        title: "Insightful analytics",
        description: "Detailed interview analytics reveal your strengths and weaknesses in key areas like communication, knowledge, and word choice, helping you improve.",
        imageAspectRatio: "1.68"
      }
    ]
  };
  export const AdvantageCard: React.FC<AdvantageCardProps> = ({ image, title, description, imageAspectRatio = "2.4" }) => {
    return (
      <div className="flex flex-col grow shrink self-stretch my-auto rounded-none min-w-[240px] w-[451px] max-md:w-full">
        <div className="flex flex-col pb-9 bg-white rounded-xl border border-solid border-neutral-200 mx-auto">
          <div className="flex flex-col px-11 pt-12 pb-7 rounded-xl bg-blue-800 bg-opacity-0 max-md:px-5">
            <Image
              src={image}
              alt={title}
              className={`object-contain w-full rounded-lg aspect-[${imageAspectRatio}] bg-slate-50`}
            />
          </div>
          <div className="flex flex-col self-center mt-4 min-h-[157px] w-[467px] max-md:w-full px-4">
            <div className="text-3xl font-semibold leading-loose text-slate-900">
              {title}
            </div>
            <div className="mt-4 text-lg leading-7 text-sky-950 text-opacity-80">
              {description}
            </div>
          </div>
        </div>
      </div>
    );
  };

  export const Advantages: React.FC = () => {
    return (
      <div className="flex flex-col">
        <div className="self-center text-5xl font-semibold text-center text-blue-800 leading-[66px] w-[582px] max-md:max-w-full">
          {advantagesData.title}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-20 w-full shadow-[5px_4px_16px_rgba(0,0,0,0.05)] max-md:mt-10 max-md:max-w-full">
          {advantagesData.cards.map((card, index) => (
            <AdvantageCard key={index} {...card} />
          ))}
        </div>
      </div>
    );
  };
