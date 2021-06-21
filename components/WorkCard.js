import Image from "next/image";
function WorkCard({im,name}){
    return (
        <div className="blur-3xl select-none flex-col   items-center cursor-pointer group  sm:h-screen/2 ">
         <img src={im} className=" group-hover:blur-none duration-1000  h-screen/3"/>
         <p className=" tracking-widest text-center text-5xl">{name}</p>
        </div>
    )
}
export default WorkCard;