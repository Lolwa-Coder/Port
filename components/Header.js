import Image from "next/image";
import HeaderItem from "./Headeritem";
import {
    MailIcon,CameraIcon,
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    UserIcon,
    SearchCircleIcon
} from "@heroicons/react/outline";

function Header() {
    return(
        <header className='select-none fixed right-0 opacity-100 '>
            
            
            
            <div className="flex-col justify-between  ">
              <a href ='https://www.linkedin.com/in/prabhanshu-singh-sikarwar-011971199/'target="_blank"><HeaderItem title="" Icon ={UserIcon}  />
              </a>
              <a href='https://www.instagram.com/dew_drunk/'target="_blank"><HeaderItem title="" Icon ={CameraIcon}   />
              </a><a  href ='https://github.com/Lolwa-Coder'target="_blank"><HeaderItem title="" Icon ={CollectionIcon} />
             
              </a> 
             </div>
          
          

        </header>
    )
}
export default Header;
