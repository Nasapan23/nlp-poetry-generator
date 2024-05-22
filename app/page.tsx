"use client";
import { SetStateAction, useState } from "react";
import { ChatWindow } from "@/components/ChatWindow";
import ValueSlidersComponent from "@/components/ValueSlidersComponent";

export default function Home() {
  const [sliderValues, setSliderValues] = useState({
    imagery: 5,
    emotion: 5,
    rhythm: 5,
    theme: 5,
    wordChoice: 5,
  });

  const handleSliderChange = (values: SetStateAction<{ imagery: number; emotion: number; rhythm: number; theme: number; wordChoice: number; }>) => {
    setSliderValues(values);
  };

  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">▲ NLP Poetry Generator Project 📜✨</h1>
      <ul>
        <li className="text-l">🤝 <span className="ml-2">This project was created by Nisipeanu Ionut, Rajoub M. Yaser, Yslam Hemrayev, and Abusitta Sulaiman S. for Operating Systems 2.</span></li>
        <li className="text-l">📚 <span className="ml-2">The theme of the project is an NLP Poetry Generator, showcasing the capabilities of natural language processing.</span></li>
        <li className="text-l">🔧 <span className="ml-2">Built using <a href="https://nextjs.org/" target="_blank">Next.js</a>, <a href="https://reactjs.org/" target="_blank">React</a>, <a href="https://vercel.com/" target="_blank">Vercel</a>, <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>, <a href="https://platform.openai.com/docs/api-reference/introduction" target="_blank">OpenAI API</a>, and <a href="https://js.langchain.com/" target="_blank">LangChain.js</a>.</span></li>
        <li className="text-l">👇 <span className="ml-2">Try generating a poem by asking, for example, <code>Write a poem about the ocean</code> below!</span></li>
        <li className="text-l">📜 <span className="ml-2">Try in every language you know!</span></li>
      </ul>
    </div>
  );

  return (
    <div className="container mx-auto p-4 mb-5">
      <ValueSlidersComponent onChange={handleSliderChange} />
      <ChatWindow
        endpoint="api/chat"
        emoji="📜"
        titleText="Yaser the Poet 📜✨"
        placeholder="I`m Rajoub M.Yaser the best poet in the world, nominated for 4 oscars, 3 nobel prizes, won a sheep, and the legend is stil going...."
        emptyStateComponent={InfoCard}
        additionalParams={sliderValues}
      />
    </div>
  );
}
