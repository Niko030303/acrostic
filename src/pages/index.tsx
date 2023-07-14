import { Inter } from "next/font/google";
import { useState, useEffect, useMemo } from "react";
import BuyMeACoffee from "@/widgets/coffee";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [inputName, setInputName] = useState("");
  const [chineseName, setChineseName] = useState("");
  const [poem, setPoem] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const generateName = async () => {
    if (!inputName) {
      alert("Please input your English name");
      return;
    }

    const body = {
      prompt: `根据给定英文名生成对应中文名，中文名必须是三个字，且符合中国人命名风格，姓氏需要在百家姓中，同时给对应中文名生成四句藏头诗，要求是七言律诗，每句严格遵守七个字的数量，使用以下格式输出结果：\n
      输入英文名： Mark Anthony \n
      中文名： 马尔康 \n
      藏头诗： 马嘶风动碧草云，\n康康英姿气吞山。\n人生漫长志未央，\n砥砺前行勇克难。 \n
      给定英文名为${inputName}
      `,
    };

    const mockData = {
      result: "中文名：杰克\n\n藏头诗：杰杰英姿照星辉,\n杰杰英姿照星辉,\n",
    };

    const prompt = "Hello, World!";

    try {
      console.log("Getting response from OpenAI...");

      setIsLoading(true);

      const response = await axios.post("/api/generate", body);

      const data = await response.data;
      console.log(data);
      const text = mockData.result as string;
      const regex1 = /中文名：\s*(.*)\s*\n/; // 匹配中文名
      const chineseName = text.match(regex1)?.[1] || "";

      const regex2 = /藏头诗：\s*([\s\S]*)/; // 匹配藏头诗
      const poem = text.match(regex2)?.[1] || "";

      setChineseName(chineseName);
      setPoem(poem);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text: any) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <main
      className={`flex min-h-screen bg-gradient-to-br from-pink-500 to-purple-500 justify-start py-1 px-5 sm:px-6 lg:px-8 flex-col items-center ${inter.className}`}
    >
      <div className="w-full h-12 flex relative  gap-5 justify-end items-center py-3 px-1  text-white">
        <a
          href="https://www.producthunt.com/posts/acrostic?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-acrostic"
          target="_blank"
          className="absolute hidden sm:block left-0"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=403892&theme=light"
            alt="Acrostic - Generate&#0032;your&#0032;Chinese&#0032;name&#0032;and&#0032;poems&#0032;with&#0032;one&#0032;click | Product Hunt"
            className="mt-3 w-56"
          />
        </a>
        <button className="rounded-md shadow-sm transition duration-300 ease-in-out hover:bg-slate-200 w-8 h-8 flex justify-center items-center border-slate-100 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-transparent-500">
          <a
            href="https://github.com/Niko030303/acrostic"
            className="m-auto text-slate-800"
            target="_blank"
          >
            <svg
              viewBox="0 0 16 16"
              className="w-5 h-5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </a>
        </button>
        <BuyMeACoffee />
      </div>
      <div className="mt-5 w-full mx-18 sm:max-w-md bg-white rounded-lg overflow-hidden shadow-md backdrop-filter backdrop-blur-xl bg-opacity-30">
        {isLoading && (
          <div className="fixed top-0 left-0 z-50 right-0 bottom-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        )}
        <h2 className="m-auto text-center text-3xl font-extrabold text-gray-900 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-1 py-2 rounded-t-lg">
          Generate Kits
        </h2>
        <div className="px-6 py-4">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              English Name
            </label>
            <input
              type="text"
              id="name"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              placeholder="Please enter the English name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="chinese-name"
              className="block text-gray-700 font-bold mb-2"
            >
              Chinese Name
            </label>
            <div className="flex items-center relative">
              <div className="min-h-10 h-auto w-full py-2 px-3 border border-gray-400 rounded-md bg-white">
                {chineseName || `...`}
              </div>
              <button
                className="absolute top-0 right-0 py-2 px-4 opacity-10 bg-gray-500 hover:opacity-100 focus:opacity-100 hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300  text-white rounded-md"
                onClick={() => copyToClipboard(chineseName)}
              >
                Copy
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="poem"
              className="block text-gray-700 font-bold mb-2"
            >
              Tibetan Poem
            </label>
            <div className="flex items-center relative">
              <div className="h-48 w-full py-2 px-3 border border-gray-400 rounded-md bg-white">
                {poem || `...`}
              </div>
              <button
                className="absolute top-0 right-0 py-2 px-4 opacity-10 bg-gray-500 hover:opacity-100 focus:opacity-100 hover:bg-gray-600 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300  text-white rounded-md"
                onClick={() => copyToClipboard(poem)}
              >
                Copy
              </button>
            </div>
          </div>
          <div className="text-center">
            <button
              className="py-2 px-4 bg-gray-800 hover:bg-gray-900 text-white rounded-md"
              onClick={() => generateName()}
            >
              Generate
            </button>
          </div>
        </div>
      </div>
      <p
        className="w-full mt-2 text-center font-extrabold text-gray-800 px-1 sm:px-1 py-0
       rounded-t-lg"
      >
        Generate Chinese name and acrostic from English name
      </p>
      <iframe
        src="https://notion.pet/view/index.html?q=5b049cc8622189440f31d6307d40e568.c9391ab964ab0f6e0060721347352327"
        className="w-full px-1 sm:px-1 h-auto"
      ></iframe>
      <a
        href="https://www.producthunt.com/posts/acrostic?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-acrostic"
        target="_blank"
        className="sm:hidden"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=403892&theme=light"
          alt="Acrostic - Generate&#0032;your&#0032;Chinese&#0032;name&#0032;and&#0032;poems&#0032;with&#0032;one&#0032;click | Product Hunt"
          className="mt-3 w-56"
        />
      </a>
    </main>
  );
}
