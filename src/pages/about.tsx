import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
    <div className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
      <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
      <aside className="-ml-[8px] mb-16 tracking-tight">
        <div className="lg:sticky lg:top-20">
          <nav className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative" id="nav">
            <div className="flex flex-row space-x-0 pr-10">
              <a className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2" href="/">home</a>
              <a className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2" href="/about">work</a>
              <a className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2" href="/contact">me</a>
            </div>
          </nav>
        </div>
      </aside> 
  
      <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter"> My Project.</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
        With my background in computer engineering, I have several projects that I have created. here's a summary of my project so far, you can also see it at <a href="https://www.behance.net/andrianusgita"> my behance.</a>
        </p>
      </div>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800"></hr>
      <h2 className="font-medium text-xl mb-1 tracking-tighter">Searching For Identity</h2>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm"> Education Game</p>
      <p className="mt-4">In 2020, my friend and I took part in a competition to make a game application. In the process of creating game applications, I played a role in creating 2D assets. You can also try my game application at <a href="https://gamejolt.com/games/SearchingForIdentity/652788">Game Jolt.</a> 
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        <div className="relative mb-4 h-40 sm:h-auto">
        <img alt="foto10" fetchPriority="high" decoding="async" data-nimg="w-full" className="rounded-lg object-cover w-full h-full sm:h-auto" src="/foto/10.png"></img>
        </div>
        <div className="relative mb-4 h-40 sm:h-auto">
        <img alt="foto10" fetchPriority="high" decoding="async" data-nimg="w-full" className="rounded-lg object-cover w-full h-full sm:h-auto" src="/foto/11.png"></img>
        </div>
        <div className="relative mb-4 h-40 sm:h-auto">
        <img alt="foto10" fetchPriority="high" decoding="async" data-nimg="w-full" className="rounded-lg object-cover w-full h-full sm:h-auto" src="/foto/9.png"></img>
        </div>
      </div>

      <hr className="my-6 border-neutral-100 dark:border-neutral-800"></hr>
      <h2 className="font-medium text-xl mb-1 tracking-tighter">Stone Age Portal</h2>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm"> Capstone Project</p>
      <p className="mt-4"> Capstone project is project created by Kampus Merdeka with the task of creating a simple game. in this project, i played a role in creating 2D assets such as character design, creating objects, creating maps and game backgrounds. You can also try this game in this <a href="https://stoneageportals.itch.io/stoneage-portal">Link.</a>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        <div className="relative mb-4 h-40 sm:h-auto">
        <img alt="foto10" fetchPriority="high" decoding="async" data-nimg="w-full" className="rounded-lg object-cover w-full h-full sm:h-auto" src="/foto/12.png"></img>
        </div>
        <div className="relative mb-4 h-40 sm:h-auto">
        <img alt="foto10" fetchPriority="high" decoding="async" data-nimg="w-full" className="rounded-lg object-cover w-full h-full sm:h-auto" src="/foto/13.png"></img>
        </div>
        <div className="relative mb-4 h-40 sm:h-auto">
        <img alt="foto10" fetchPriority="high" decoding="async" data-nimg="w-full" className="rounded-lg object-cover w-full h-full sm:h-auto" src="/foto/14.png"></img>
        </div>
        </div>

      <hr className="my-6 border-neutral-100 dark:border-neutral-800"></hr>
      <h2 className="font-medium text-xl mb-1 tracking-tighter">Catch The Star</h2>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm"> Game Project for MSIB </p>
      <p className="mt-4"> Catch the star is a game project created to fulfill a task given by MSIB. Here I play a role in the process of creating a 2D background.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        <div className="relative mb-4 h-40 sm:h-auto">
        <img alt="foto10" fetchPriority="high" decoding="async" data-nimg="w-full" className="rounded-lg object-cover w-full h-full sm:h-auto" src="/foto/15.png"></img>
        </div>
        <div className="relative mb-4 h-40 sm:h-auto">
        <img alt="foto10" fetchPriority="high" decoding="async" data-nimg="w-full" className="rounded-lg object-cover w-full h-full sm:h-auto" src="/foto/16.png"></img>
        </div>
        <div className="relative mb-4 h-40 sm:h-auto">
        <img alt="foto10" fetchPriority="high" decoding="async" data-nimg="w-full" className="rounded-lg object-cover w-full h-full sm:h-auto" src="/foto/17.png"></img>
        </div>
        </div>
        
      </section>

      
      </main>
    </div>
    </div>
    )
  }
  