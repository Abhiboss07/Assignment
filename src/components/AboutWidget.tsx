import { useState } from 'react'

type Tab = 'about' | 'experiences' | 'recommended'

const AboutWidget = () => {
  const [activeTab, setActiveTab] = useState<Tab>('about')

  return (
    <div className="bg-[#363C43] rounded-[18.89px] shadow-[5.67px_5.67px_3.78px_0px_rgba(0,0,0,0.4)] relative">
      {/* Question Mark Icon */}
      <div className="absolute top-[17px] left-[20px]">
        <div className="w-[24px] h-[24px] rounded-full bg-[#171717] flex items-center justify-center text-[#A3ADB2] text-[14px] font-bold cursor-help shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)]">
          ?
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-[6px] px-[6px] pt-[7px] pb-[6px] bg-[#171717] mx-[49px] mt-[17px] rounded-[23px] shadow-[inset_0px_4.96px_12.4px_2.48px_rgba(0,0,0,0.25)]">
        <button
          onClick={() => setActiveTab('about')}
          className={`flex-1 py-[10px] px-[24px] rounded-[16px] text-[16px] font-medium transition-all ${
            activeTab === 'about'
              ? 'bg-[#28292F] text-white shadow-[13.49px_16.87px_67.47px_8.43px_rgba(0,0,0,0.4),inset_0px_3.37px_3.37px_0px_rgba(255,255,255,0.05)]'
              : 'text-[#A3ADB2] hover:text-white'
          }`}
        >
          About Me
        </button>
        <button
          onClick={() => setActiveTab('experiences')}
          className={`flex-1 py-[10px] px-[24px] rounded-[16px] text-[16px] font-medium transition-all ${
            activeTab === 'experiences'
              ? 'bg-[#28292F] text-white shadow-[13.49px_16.87px_67.47px_8.43px_rgba(0,0,0,0.4),inset_0px_3.37px_3.37px_0px_rgba(255,255,255,0.05)]'
              : 'text-[#A3ADB2] hover:text-white'
          }`}
        >
          Experiences
        </button>
        <button
          onClick={() => setActiveTab('recommended')}
          className={`flex-1 py-[10px] px-[24px] rounded-[16px] text-[16px] font-medium transition-all ${
            activeTab === 'recommended'
              ? 'bg-[#28292F] text-white shadow-[13.49px_16.87px_67.47px_8.43px_rgba(0,0,0,0.4),inset_0px_3.37px_3.37px_0px_rgba(255,255,255,0.05)]'
              : 'text-[#A3ADB2] hover:text-white'
          }`}
        >
          Recommended
        </button>
      </div>

      {/* Content Area */}
      <div className="px-[50px] pt-[30px] pb-[20px]">
        <div className="h-[175px] overflow-y-scroll pr-[20px] text-[#969696] text-[20px] leading-[25.2px] font-normal custom-scrollbar">
          {activeTab === 'about' && (
            <div className="space-y-4">
              <p>
                Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
              </p>
              <p>
                I was born and raised in Albany, NY& have been living in Santa Calid for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
              </p>
            </div>
          )}
          {activeTab === 'experiences' && (
            <div className="space-y-4">
              <p>
                I have over 10 years of experience in sales and customer relations. Throughout my career, I've worked with various Fortune 500 companies.
              </p>
              <p>
                My expertise includes enterprise software solutions, cloud computing, and digital transformation strategies. I've successfully closed deals worth over $50M in total revenue.
              </p>
              <p>
                I'm passionate about helping businesses leverage technology to achieve their goals and drive growth.
              </p>
            </div>
          )}
          {activeTab === 'recommended' && (
            <div className="space-y-4">
              <p>
                Based on your profile and interests, I'd recommend exploring our latest CRM solutions and AI-powered analytics tools.
              </p>
              <p>
                Our platform integrates seamlessly with your existing workflow and provides real-time insights to help you make data-driven decisions.
              </p>
              <p>
                I'd be happy to schedule a demo and show you how these tools can transform your business operations.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Divider Line */}
      <div className="h-[4px] bg-gradient-to-r from-transparent via-[rgba(40,40,40,0.1)] to-transparent mx-[50px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.33)]"></div>

      {/* Navigation Arrows */}
      <div className="flex justify-between items-center px-[50px] py-[20px]">
        <div className="flex gap-[16px]">
          <button className="w-[45px] h-[45px] rounded-full bg-[#171717] flex items-center justify-center text-[#6F787C] hover:text-white transition-colors shadow-[4px_5px_30px_5px_rgba(0,0,0,0.5),inset_-5px_-5px_10px_rgba(0,0,0,0.5)]">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 13.5L6.5 9L11 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="w-[45px] h-[45px] rounded-full bg-[#171717] flex items-center justify-center text-[#6F787C] hover:text-white transition-colors shadow-[4px_5px_30px_5px_rgba(0,0,0,0.5),inset_-5px_-5px_10px_rgba(0,0,0,0.5)]">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 4.5L11.5 9L7 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AboutWidget
