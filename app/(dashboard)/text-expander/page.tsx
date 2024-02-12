"use client";
import TopBar from "@/components/top-bar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Aos from "aos";
import { Brain, FileText, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [expandedText, setExpandedText] = useState<string>("");

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-[#F5F9FF] min-h-screen">
      <TopBar iconColor="text-cyan-800" label="Text Expander" Icon={Brain} />
      <main
        data-aos="fade-up"
        data-aos-duration={1000}
        className="text-gray-900 flex-grow flex flex-col justify-between"
      >
        <h1 className="text-2xl w-full text-center font-bold my-8 text-gray-700">
         Expand your text with ease
          <p className="text-sm mt-1 font-normal tracking-wide">
            
            Expand your text with ease using our text expander tool. Simply paste your article and get a concise summary in seconds.
          </p>
        </h1>

        <div className="flex flex-col md:flex-row justify-around items-center">
          <div>
            <h5 className="text-zinc-600 inline-block mb-1 font-semibold">
              Input
            </h5>
            <Textarea
              className="resize-none boarder border-zinc-300  rounded-[.4rem]"
              placeholder="Paste your text here..."
              cols={80}
              rows={20}
            />
            <div className="flex justify-center items-center w-full py-2">
              <Button variant="primary">
                {loading && (
                  <span>
                    <Loader2 className="h-4 w-4 animate-spin " />
                  </span>
                )}
                Expand text
              </Button>
            </div>
          </div>
          <div>
            <h5 className="text-zinc-600 inline-block mb-1 font-semibold">
              Output
            </h5>

            <Textarea
              className="resize-none boarder border-zinc-300 rounded-[.4rem]"
              placeholder="Your expanded text will appear here..."
              cols={80}
              rows={20}
              disabled
            />
            <div className="flex justify-center items-center w-full py-2">
              <Button
              
                disabled={expandedText.length === 0}
                variant="primary">
                {loading && (
                  <span>
                    <Loader2 className="h-4 w-4 animate-spin " />
                  </span>
                )}
                Copy to clipboard
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
