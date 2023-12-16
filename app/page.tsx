import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-scroll">
      <section className="w-max h-[100vh] p-[30px] overflow-hidden">
        {/*Div block 20*/}
        <div className="h-max min-h-[100px] backdrop-blur-[20px] bg-transparent border border-black border-opacity-20 rounded-lg overflow-visible py-7 px-5 pr-0">
          HACKING...
          {/*Button*/}
          <div className="z-10 w-auto mt-0 pb-0 absolute bottom-8 left-10 gap-4 flex-wrap items-center text-2xl flex">
            <a className="backdrop-blur-[10px] text-black text-opacity-80 text-center bg-transparent border border-black border-opacity-20 rounded-md flex-auto items-center px-2 py-1 font-mono text-sm font-bold leading-5 no-underline transition-colors duration-200 flex max-w-full">
              <div className="w-5 h-5 flex-col justify-center items-center mr-2.5 flex"></div>
              <div className="pl-0 leading-6">About</div>
            </a>
            <a className="backdrop-blur-[10px] text-black text-opacity-80 text-center bg-transparent border border-black border-opacity-20 rounded-md flex-auto items-center px-2 py-1 font-mono text-sm font-bold leading-5 no-underline transition-colors duration-200 flex max-w-full">
              <div className="w-5 h-5 flex-col justify-center items-center mr-2.5 flex"></div>
              <div className="pl-0 leading-6">Contact</div>
            </a>
          </div>
          {/*Div block 3*/}
          <div className="w-full h-full min-h-full mr-0 pl-0 pr-0 overflow-auto">
            {/*Div block 19*/}
            <div className="block-19">
              <div className="border border-black mt-0 pt-0 pl-10 pr-0">
                <div className="w-full mx-auto">
                  <div className="grid gap-x-0 gap-y-4 grid-cols-[0.5fr,1fr] auto-rows-auto items-start mb-0">
                    <div className="z-50 mt-0 pt-0 pr-10 sticky top-0">
                      <div className="z-0 bg-transparent mb-0 pt-0 relative leading-none pb-1.5 text-[1.5vw] font-extrabold flex">
                        DAISY
                      </div>
                      <div className="z-0 bg-transparent mb-0 pt-0 relative text-[1.1vw] font-medium leading-none">
                        Deverloper
                      </div>
                      <div className="mb-6 p-0 relative bg-transparent">
                        <div className="text-left mt-7.5 pr-0 text-[1.1vw] font-normal leading-[1.3]">
                          What is Art? For as long as humanity has existed, art has been part of our
                        </div>
                      </div>
                    </div>
                    <div className="z-0 border-l border-dashed border-opacity-20 pt-0 pl-0 pr-0 relative">
                      <div className="pt-0 pl-0 relative overflow-hidden">
                        <div className="z-50 pb-0 pl-10 pr-5 relative block">HACKING...</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            src="https://assets-global.website-files.com/6398b11ee9bf53ef62055173/63c60fdbb097afec71abada2_head2.webp"
            alt="Stone Head"
            className="w-full max-w-[684.640625px] transform translate-x-14 scale-100 rotate-0 skew-x-0 skew-y-0"
            layout="responsive"
            width={1000}
            height={1000}
            sizes="(max-width: 991px) 100vw, 684.640625px"
          />
        </div>
      </section>
    </div>
  );
}
