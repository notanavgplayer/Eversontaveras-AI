import {
  BookOpenTextIcon,
  Bot,
  BotIcon,
  Image,
  ListCollapseIcon,
  NewspaperIcon,
  Speech,
} from "lucide-react";
import Link from "next/link";
import { Tools } from "./tools";

export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 tracking-tight font-extrabold text-black">
              Explore our <span className="text-blue-600">AI-Powered</span>{" "}
              tools
            </h2>
            <p className="text-lg text-gray-700">
              Discover a range of AI powered tools designed to streamline your
              workflow and boost productivity.
            </p>
          </div>

          <Tools />

              {/* Items */}
              {/* <div
                className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
                data-aos-id-blocks
              >
                1st item - ChatGPT
                <div
                  className="relative flex flex-col items-center"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-blocks]"
                >
                  <BotIcon size={48} strokeWidth={1.75} color="#000" />
                  <Link
                    href="/"
                    className="h4 text-lg lg:text-2xl mb-2 text-center text-black"
                  >
                    <h4>Chat Conversations</h4>
                  </Link>
                  <p className="text-sm lg:text-[16px] text-zinc-500 text-center">
                    Spark dynamic engagement with interactive chat
                    conversations.
                  </p>
                </div> */}

                {/* 2nd item - Article Summarizer */}
                {/* <div
                  className="relative flex flex-col items-center"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-anchor="[data-aos-id-blocks]"
                >
                  <NewspaperIcon size={48} color="#000" strokeWidth={1.75} />
                  <Link href="/">
                    <h4 className="h4 text-lg lg:text-2xl mb-2 text-black">
                      Article Summarizer
                    </h4>
                  </Link>
                  <p className="text-sm lg:text-[16px] text-zinc-500 text-center">
                    Efficiently extract and summarize lengthy articles into
                    concise summaries.
                  </p>
                </div> */}

                {/* 6th item - Image Generation */}
                {/* <div
                  className="relative flex flex-col items-center"
                  data-aos="fade-up"
                  data-aos-delay="500"
                  data-aos-anchor="[data-aos-id-blocks]"
                >
                  <Image size={48} color="#000" strokeWidth={1.75} />
                  <Link href="/">
                    <h4 className="h4 text-lg lg:text-2xl mb-2 text-black">
                      Image Generation
                    </h4>
                  </Link>
                  <p className="text-sm lg:text-[16px] text-center text-zinc-500">
                    Create images effortlessly with the assistance of AI
                    technology.
                  </p> */}
                </div>
              </div>
    </section>
  );
}
