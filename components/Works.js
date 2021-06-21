import Image from "next/image";
import WorkCard from "./WorkCard";


function Works() {
    return(
        <div className='mt-10 text-center bottom-0 opacity-100   '>
            
           <p className='text-5xl bg-white text-black'>Works</p> 
           <hr></hr>
            
            <div className="mt-4 flex flex-wrap flex-1 flex-grow  justify-evenly   ">
            <a href="https://lolwa-coder.github.io/Aim-Trainer/"target="_blank">
              <WorkCard name="Microflex" im="https://raw.githubusercontent.com/Lolwa-Coder/Images/main/aim-trainer.PNG"  />
              </a>
              <a href="https://news-lolwa-coder.vercel.app/news"target="_blank"><WorkCard name="Knews"im="https://raw.githubusercontent.com/Lolwa-Coder/Images/main/news.PNG" />
              </a>
              <a href="https://drall.vercel.app/"target="_blank">
              <WorkCard name="Drall" im="https://raw.githubusercontent.com/Lolwa-Coder/Images/main/chat.PNG"  />
              </a>
              
              <a href="https://istream.vercel.app/"target="_blank">
              <WorkCard name="ISTREAM" im="https://raw.githubusercontent.com/Lolwa-Coder/Images/main/ISTREAM.PNG"  />
              </a>
             </div>
          
          

        </div>
    )
}
export default Works;