import Image from "next/image";
import { Inter } from "next/font/google";
import { Profiler } from "react";

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
        <h1 className="mb-8 text-2xl font-medium tracking-tighter">About Me.</h1>
        <div className="prose prose-neutral dark:prose-invert">
          <p>
            These are some of the social media that I use. You can contact me or want to know more about me by clicking the link below.
          </p>
        </div>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800"></hr>

        <div className="flex flex-col items-center">
          <div className="w-full md:w-[80%] border border-white bg-gradient-to-r from-gray-800 to-gray-900 p-14 rounded-2xl flex flex-col gap-10 items-center justify-center mt-8"> {/* Mengubah nilai mt menjadi lebih kecil */}
            <img className="aspect-round w-40 bg-white rounded-2xl relative overflow-hidden border border-gray" src="/foto/profile.jpg" alt="profile.jpg" />
            <span className="text-2xl font-medium text-center">Andrianus Gita</span>
            <div style={{ display: 'flex', gap: '50px' }}>
              <a href="https://www.youtube.com/@andrianusgita" target="_blank">
                <img alt="youtube logo" src="/foto/youtube.png" width="40" height="40"></img>
              </a>
              <a href="https://www.instagram.com/andrianusgita/" target="_blank">
                <img alt="instagram logo" src="/foto/instagram.png" width="40" height="40"></img>
              </a>
              <a href="https://www.linkedin.com/in/andrianus-septhindra-gita-pramana-4606bb269" target="_blank">
                <img alt="linkedin logo" src="/foto/linkedin.png" width="40" height="40"></img>
              </a>
              <a href="https://www.behance.com/andrianusgita" target="_blank">
                <img alt="behance logo" src="/foto/behance.png" width="40" height="40"></img>
              </a>
            </div>
          </div>
        </div>
      </section>


      
      </main>
    </div>
    </div>
  )
}
