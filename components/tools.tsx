import { ArrowUpNarrowWide, BookOpen, BotIcon, ChefHatIcon, Image, Newspaper, Speech } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export const Tools = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
      <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-8 border-b sm:border-r">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-600 sm:w-16 sm:h-16">
              <BotIcon />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-black text-xl">Chat Convesations</h6>
            <p className="mb-3 text-sm text-gray-900">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium rem aperiam, eaque ipsa quae. Sit error voluptatem.
            </p>
          </div>
        </div>
        <div className="p-8 border-b lg:border-r">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-600 sm:w-16 sm:h-16">
              <Image />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-black text-xl">Image Generation</h6>
            <p className="mb-3 text-sm text-gray-900">
              Storage shed, troughs feed bale manure, is garden wheat oats at
              augers. Bulls at rose garden cucumbers mice sunflower wheat in
              pig.
            </p>
          </div>
        </div>
        <div className="p-8 border-b sm:border-r lg:border-r-0">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-600 sm:w-16 sm:h-16">
              <Speech />
            </div>
            <Link href="text-to-speech">
            <h6 className="mb-2 font-semibold leading-5 text-black text-xl">Text to Speech</h6>
            <p className="mb-3 text-sm text-gray-900">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium rem aperiam, eaque ipsa quae. Sit error voluptatem.
            </p>
            </Link>
          </div>
        </div>
        <div className="p-8 border-b lg:border-b-0 lg:border-r">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-600 sm:w-16 sm:h-16">
              <Newspaper />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-black text-xl">Article Summarizer</h6>
            <p className="mb-3 text-sm text-gray-900">
              Storage shed, troughs feed bale manure, is garden wheat oats at
              augers. Bulls at rose garden cucumbers mice sunflower wheat in
              pig.
            </p>
          </div>
        </div>
        <div className="p-8 border-b sm:border-b-0 sm:border-r">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-600 sm:w-16 sm:h-16">
            <BookOpen />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-black text-xl">Story Generator</h6>
            <p className="mb-3 text-sm text-gray-900">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium rem aperiam, eaque ipsa quae. Sit error voluptatem.
            </p>
          </div>
        </div>
        <div className="p-8">
          <div className="max-w-md text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-600 sm:w-16 sm:h-16">
              <ArrowUpNarrowWide />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-black text-xl">Text Expander</h6>
            <p className="mb-3 text-sm text-gray-900">
              Storage shed, troughs feed bale manure, is garden wheat oats at
              augers. Bulls at rose garden cucumbers mice sunflower wheat in
              pig.
            </p>
            <div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center mt-10">
        <div>
                <Link
            className="btn text-white bg-black hover:bg-blue-600 w-full mb-4 sm:w-auto sm:mb-0 rounded-xl"
            href="/dashboard"
          >
            Try for Free!
          </Link>
            </div>
         </div>
    </div>
    
  );
};