import Link from "next/link";

export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 tracking-tight font-extrabold">Explore Our AI-Powered Tools</h2>
            <p className="text-xl text-gray-400">
              Discover a range of AI-powered tools designed to streamline your
              workflow and boost productivity.
            </p>
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
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Placeholder chatting board icon */}
                <path
                  className="fill-current text-indigo-600"
                  d="M40 48H8c-2.2 0-4-1.8-4-4V12c0-2.2 1.8-4 4-4h32c2.2 0 4 1.8 4 4v9c0 1.1.9 2 2 2h11v22c0 2.2-1.8 4-4 4H42c-.1 0-.1 0-.2 0zm-1.5-10h-22c-1.4 0-2.5-1.1-2.5-2.5S15.1 33 16.5 33H38c1.1 0 2-.9 2-2s-.9-2-2-2h-21c-1.4 0-2.5-1.1-2.5-2.5S14.1 26 15.5 26H36c1.1 0 2-.9 2-2s-.9-2-2-2h-17c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5H38c1.1 0 2-.9 2-2s-.9-2-2-2H12c-.1 0-.1 0-.2 0-1.4 0-2.5 1.1-2.5 2.5v32c0 1.4 1.1 2.5 2.5 2.5h27.5c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5zm-7.5-10h-9c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5h9c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5zm0-8h-9c-1.4 0-2.5-1.1-2.5-2.5S28.1 25 29.5 25h9c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5z"
                />
              </svg>
              <Link href="/" className="h4 mb-2 text-center">
              <h4>Chat Conversations</h4>
              </Link>
              <p className="text-lg text-gray-400 text-center">
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
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <path
                    fill="rgb(93 93 255 / var(--tw-text-opacity))"
                    d="M60 12H12c-1.105 0-2 .895-2 2v36c0 1.105.895 2 2 2h48c1.105 0 2-.895 2-2V14c0-1.105-.895-2-2-2z"
                  />
                  <path
                    fill="#111"
                    d="M46.667 35.973h-29.33c-1.17 0-2.127.922-2.127 2.053v2.053c0 1.13.956 2.052 2.127 2.052h29.33c1.17 0 2.127-.921 2.127-2.052v-2.053c0-1.131-.957-2.053-2.127-2.053zM32 39.052c-2.012 0-3.64-1.587-3.64-3.543 0-1.956 1.628-3.543 3.64-3.543 2.01 0 3.64 1.587 3.64 3.543 0 1.956-1.63 3.543-3.64 3.543z"
                  />
                  <path
                    fill="#111"
                    d="M50.18 18.375l-3.28 7.354a1.995 1.995 0 00.45 2.188c.59.56 1.39.84 2.19.84h2.72a1.997 1.997 0 001.94-1.511l3.28-7.355a2 2 0 00-1.7-2.86l-5.09-.58a2 2 0 00-1.78 1.02zM17.82 18.375l3.28 7.354a2 2 0 001.78 1.02l5.09-.58a2 2 0 001.7-2.86l-3.28-7.354a1.998 1.998 0 00-1.94-1.511h-2.72c-.8 0-1.6.28-2.19.84a1.995 1.995 0 00-.45 2.188zM27.35 20.313h9.3c.33 0 .6.27.6.6v2.726c0 .331-.27.6-.6.6h-9.3a.6.6 0 01-.6-.6v-2.726c0-.33.27-.6.6-.6zM32 52c-2.474 0-4.48-2.005-4.48-4.473s2.006-4.474 4.48-4.474 4.48 2.005 4.48 4.474-2.005 4.473-4.48 4.473zm0-3.94c-1.268 0-2.29 1.025-2.29 2.29s1.022 2.29 2.29 2.29 2.29-1.025 2.29-2.29-1.023-2.29-2.29-2.29z"
                  />
                </g>
              </svg>

                <Link href="/">
              <h4 className="h4 mb-2">Article Summarizer</h4>
              </Link>
              <p className="text-lg text-gray-400 text-center">
                Efficiently extract and summarize lengthy articles into concise
                summaries.
              </p>
            </div>

            {/* 3rd item - Text to speech */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  className="fill-current text-indigo-600"
                  d="M50.5 28c-4.142 0-7.5-3.358-7.5-7.5S46.358 13 50.5 13s7.5 3.358 7.5 7.5-3.358 7.5-7.5 7.5zM13.5 28c-4.142 0-7.5-3.358-7.5-7.5S9.358 13 13.5 13s7.5 3.358 7.5 7.5-3.358 7.5-7.5 7.5zM32 52C16.327 52 3.015 38.688 3.015 22S16.327 0 32 0s28.985 13.312 28.985 29S47.673 52 32 52zM3.015 22c0 15.673 12.312 28.985 28.985 28.985S60.985 37.673 60.985 22 48.673 3.015 32 3.015 3.015 15.327 3.015 22zM32 42c-9.925 0-18-8.075-18-18s8.075-18 18-18 18 8.075 18 18-8.075 18-18 18z"
                />
              </svg>
              <Link href="/">
              <h4 className="h4 mb-2">Text to Speech</h4>
              </Link>
              <p className="text-lg text-gray-400 text-center">
                Effortlessly convert text into spoken words with AI-powered
                technology.
              </p>
            </div>

            {/* 4th item - Text Expander */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  className="fill-current text-indigo-600"
                  d="M42.706 34.706L32 45.413l-10.706-10.707a2 2 0 00-2.828 2.828l12 12a2 2 0 002.828 0l12-12a2 2 0 00-2.828-2.828zM21.333 16H10.667A2.667 2.667 0 008 18.667v26.666A2.667 2.667 0 0010.667 48h10.666a2.667 2.667 0 002.667-2.667V18.667A2.667 2.667 0 0021.333 16zm0 0M48 16H32v4h16zm0 8H32v4h16zm0 8H32v4h16zm0 8H32v4h16z"
                />
              </svg>
              <Link href="/">
              <h4 className="h4 mb-2">Text Expander</h4>
              </Link>
              <p className="text-lg text-gray-400 text-center">
                Enhance your writing efficiency with AI-powered text expansion
                capabilities.
              </p>
            </div>

            {/* 5th item - Story Generator */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-current text-indigo-600"
                  d="M31 11v-3a2 2 0 00-2-2H15a2 2 0 00-2 2v3H4v28h56V11H31zm-7 12h-6v-6h-3v6h-6v3h6v6h3v-6h6v-3z"
                />
              </svg>
              <Link href="/">
              <h4 className="h4 mb-2">AI Story Generator</h4>
              </Link>
              <p className="text-lg text-gray-400 text-center">
                Craft compelling narratives effortlessly with the help of AI.
              </p>
            </div>

            {/* 6th item - Image Generation */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-current text-indigo-600"
                  d="M48.963 6.128l-11.189-2.375-11.19 2.375-4.965-5.007L4 18.171v37.191c0 2.457 1.793 4.591 4.294 4.854l5.886.687 9.678-11.032 8.614 9.774 3.784-1.07 10.426 2.39c.004.002.008.002.011.004.035.011.07.018.106.027l1.184.273c2.319.534 4.791-.954 5.326-3.273l.57-2.483L58 20.773l-4.966-5.006zM32 5.943l8.777 1.864L58 20.772l-19.21 21.849c-.1.114-.2.224-.308.332L26.17 56h-8.34l-6.313-8.048c-.107-.134-.206-.271-.308-.405L6 20.772 23.222 7.807 32 5.943zm-2 49.083c-8.822 0-16-7.178-16-16 0-8.823 7.178-16 16-16 8.822 0 16 7.177 16 16 0 8.822-7.178 16-16 16z"
                />
              </svg>
              <Link href="/">
              <h4 className="h4 mb-2">Image Generation</h4>
              </Link>
              <p className="text-lg text-gray-400 text-center">
                Create images effortlessly with the assistance of AI technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
