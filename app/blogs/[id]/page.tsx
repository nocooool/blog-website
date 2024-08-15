'use client'

import { assets, blog_data } from "@/assets/assets"
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react"

export default function Page ({params}: {params: {id: string}}) {
    const [data, setData] = useState<any>(null)
    const fetchBlogData = () => {
        for(let i=0; i<blog_data.length; i++)
        {
            if(Number(params.id) === blog_data[i].id){
                setData(blog_data[i]);
                console.log(blog_data[i]);
                break;
            }
        }
    }

    useEffect(() => {
        fetchBlogData()
    }, [])

    return( data?<>
        <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-20">
            <div className="flex justify-between items-center">

                <Link href='/'>
                <Image src={assets.logo} alt="" width={180} className="w-[130px] sm:w-auto"/>
                </Link>
                
                <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
                    Get started <Image src={assets.arrow} alt=""/>
                </button>

            </div>

            <div className="text-center my-24">
                
                <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">{data.title}</h1>
                <Image src={data.author_img} alt="" width={60} height={60} 
                className="mx-auto mt-6 border border-white rounded-full"/>
                <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">{data.author}</p>

            </div>
        </div>

        <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">

            <Image src={data.image} alt="" width={1280} height={720} className="border-4 border-white"/>
            <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
            <p>{data.description}</p>
            <h3 className="my-5 text-[18px] font-semibold">step 1: Self-Reflection and Goal Setting</h3>
            <p className="my-3">Before you manage your lifestyle, you must have a clear understanding of what to achieve. Start by reflecting on your values, aspirations and long-term goals.</p>
            <p className="my-3">Before you manage your lifestyle, you must have a clear understanding of what to achieve. Start by reflecting on your values, aspirations and long-term goals.</p>

            <h3 className="my-5 text-[18px] font-semibold">step 2: Self-Reflection and Goal Setting</h3>
            <p className="my-3">Before you manage your lifestyle, you must have a clear understanding of what to achieve. Start by reflecting on your values, aspirations and long-term goals.</p>
            <p className="my-3">Before you manage your lifestyle, you must have a clear understanding of what to achieve. Start by reflecting on your values, aspirations and long-term goals.</p>

            <h3 className="my-5 text-[18px] font-semibold">step 3: Self-Reflection and Goal Setting</h3>
            <p className="my-3">Before you manage your lifestyle, you must have a clear understanding of what to achieve. Start by reflecting on your values, aspirations and long-term goals.</p>
            <p className="my-3">Before you manage your lifestyle, you must have a clear understanding of what to achieve. Start by reflecting on your values, aspirations and long-term goals.</p>

            <h3 className="my-5 text-[18px] font-semibold">Conclusion:</h3>
            <p className="my-3">Managing your lifestyle is a journey that requires commitment and self-awareness. By following this step-by-step guide, you will be able to take control of your life and make meaningful changes that leads to a balanced and fulfilling lifestyle. Remember that it's okay to seek support and guidance form professionals or mentors along the way. Your well-being and happiness are worth the effort.</p>

            <div className="my-24">
                
                <p className="text-black font font-bold my-4">Share this article on social media</p>
                <div className="flex">
                    <Image src={assets.facebook_icon} alt="" width={50}/>
                    <Image src={assets.twitter_icon} alt="" width={50}/>
                    <Image src={assets.googleplus_icon} alt="" width={50}/>
                </div>

            </div>
        </div>

        <Footer/>
        </>:<></>
    )
}