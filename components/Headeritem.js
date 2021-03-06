function HeaderItem({Icon,title}){
    return (
        <div className="  flex flex-col  items-center cursor-pointer group h-20 ">
         <Icon className="mb-1 group-hover:animate-ping h-8 " />
         <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
        </div>
    )
}
export default HeaderItem;