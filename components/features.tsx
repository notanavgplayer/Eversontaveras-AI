import { BookOpenTextIcon, Bot, BotIcon, Image, ListCollapseIcon, NewspaperIcon, Speech } from "lucide-react";
import Link from "next/link";

export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 tracking-tight font-extrabold text-black">Explore our <span className="text-blue-600">AI-Powered</span> tools</h2>
            <p className="text-lg text-gray-700">
              Discover a range of AI powered tools designed to streamline your
              workflow and boost productivity.
            </p>
          </div>

          <div>
        <div className='relative isolate'>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-40 sm:left-[calc(80%-30rem)] sm:w-[58rem]'
            />
          </div>

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {/* 1st item - ChatGPT */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <BotIcon size={48} strokeWidth={1.75} color="#000"/>
              <Link href="/" className="h4 text-lg lg:text-2xl mb-2 text-center text-black">
              <h4>Chat Conversations</h4>
              </Link>
              <p className="text-sm lg:text-[16px] text-zinc-500 text-center">
                Spark dynamic engagement with interactive chat conversations.
              </p>
            </div>
        
            {/* 2nd item - Article Summarizer */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <NewspaperIcon size={48} color="#000" strokeWidth={1.75}/>
                <Link href="/">
              <h4 className="h4 text-lg lg:text-2xl mb-2 text-black">Article Summarizer</h4>
              </Link>
              <p className="text-sm lg:text-[16px] text-zinc-500 text-center">
                Efficiently extract and summarize lengthy articles into concise
                summaries.
              </p>
            </div>

            {/* 6th item - Image Generation */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <Image size={48} color="#000" strokeWidth={1.75} />
              <Link href="/">
              <h4 className="h4 text-lg lg:text-2xl mb-2 text-black">Image Generation</h4>
              </Link>
              <p className="text-sm lg:text-[16px] text-center text-zinc-500">
                Create images effortlessly with the assistance of AI technology.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </section>
  );
}
