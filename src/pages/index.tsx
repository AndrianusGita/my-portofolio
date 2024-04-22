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
        <h1 className="mb-8 text-2xl font-medium tracking-tighter"> welcome.</h1>
        <p className=" prose prose-neutral dark:prose-invert mb-10">
            "My name is andrianus gita, based in Jakarta, Indonesia &#x1F1EE;&#x1F1E9; . I'm a passionate individual dedicated to continuous learning and growth. with a background in multimedia engineering, i thrive on challenges and strive for excellence in all that i do. also i like hiking, playing video games, and play basketball."
       </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

        <div className="relative mb-4 h-40"> <img alt="foto1" fetchPriority="high" decoding="async" data-nimg="fill" className="rounded-lg object-cover" src="/foto/7.jpg"></img></div>
        <div className="relative mb-4 h-40"> <img alt="foto2" fetchPriority="high" decoding="async" data-nimg="fill" className="rounded-lg object-cover" src="/foto/4.jpeg"></img></div>
        <div className="relative mb-40 h-40 sm:mb-4 sm:h-80"> <img alt="foto3" fetchPriority="high" decoding="async" data-nimg="fill" className="rounded-lg object-cover" src="/foto/2.jpg"></img></div>
        <div className="relative mb-4 h-40 sm:mb-0"> <img alt="foto4" fetchPriority="high" decoding="async" data-nimg="fill" className="rounded-lg object-cover" src="/foto/8.jpg"></img></div>
        <div className="relative mb-4 h-40 sm:mb-0"> <img alt="foto5" fetchPriority="high" decoding="async" data-nimg="fill" className="rounded-lg object-cover" src="/foto/5.jpg"></img></div>
        <div className="relative mb-4 h-40 sm:mb-0"> <img alt="foto6" fetchPriority="high" decoding="async" data-nimg="fill" className="rounded-lg object-cover" src="/foto/6.jpg"></img></div>
        </div>
             
      </section>

      <div className="sm:col-span-3 gap-8 mt-40">
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h1 className="mb-8 text-2xl font-medium tracking-tighter whitespace-nowrap">Also check my YouTube Channels</h1>
        <iframe width="700" height="450" src="https://www.youtube.com/embed/9Xy3Vv9gS5I?si=7DjOEvWlbEL9ntAS" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>

      <div className="chakra-stack css-1omprws"></div>


      </main>
    </div>
    </div>
    )
  }
  