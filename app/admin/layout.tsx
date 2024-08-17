import { assets } from "@/assets/assets";
import Sidebar from "@/components/AdminComponents/Sidebar";
import Image from "next/image";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({children}:any){
    return(
        <>
            <div className="flex">
                <ToastContainer theme="dark"/>
                <Sidebar/>
                <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between w-full py-3 max-h-[61px] px-12 border-2 border-r-0 border-l-0 border-t-0 border-black">
                        <h3 className="font-medium">Admin Panel</h3>
                        <Image src={assets.profile_icon} alt="" width={40}/>
                    </div>
                    {children}
                </div>
            </div>
            
        </>
    )
}