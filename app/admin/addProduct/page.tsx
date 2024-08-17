"use client";

import { assets } from "@/assets/assets";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

const page = () => {
    const [image, setImage] = useState<any>(false)
    const [data, setData] = useState({
      title:"",
      description:"",
      category:"Startup",
      author:"Alex Bennett",
      authorImg:"/author_img.png"
    })

    const onChangeHandler = (event:any) => {
      const name = event.target.name
      const value = event.target.value

      setData(data => ({...data, [name]:value}))
      console.log(data)
    }

    const onSubmitHandler = async(e:any) => {
      e.preventDefault()
      const formData = new FormData();
      formData.append('title', data.title)
      formData.append('description', data.description)
      formData.append('category', data.category)
      formData.append('author', data.author)
      formData.append('authorImg', data.authorImg)
      formData.append('image', image)

      const response = await axios.post('/api/blog', formData)
      if(response.data.success){
        toast.success(response.data.msg)
        setImage(false)
        setData({
          title:"",
          description:"",
          category:"Startup",
          author:"Alex Bennett",
          authorImg:"/author_img.png"
        })
      }
      else{
        toast.error("Error")
      }
    }

  return (
    <>
      <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-16 sm:pl-16">
        <p className="text-xl">Upload thumbnail</p>
        
        <label htmlFor="image">
          <Image src={!image?assets.upload_area:URL.createObjectURL(image)} alt="" width={140} height={70} className="mt-4"/>
        </label>
            
        <input onChange={(e) => setImage(!e.target.files?console.log('select a file'):e.target.files[0])} type="file" id="image" hidden required/>
        
        <p className='text-xl mt-5'>Blog title</p>
        <input name="title" onChange={onChangeHandler} value={data.title} className='w-full sm:w-[500px] mt-5 px-4 py-3 border' type="text" placeholder='Type here' required/>

        <p className='text-xl mt-5'>Blog Description</p>
        <textarea name="description" onChange={onChangeHandler} value={data.description} className='w-full sm:w-[500px] mt-5 px-4 py-3 border' placeholder='write content here' rows={8} required/>

        <p className="text-xl mt-5">Blog Category</p>
        <select name="category" onChange={onChangeHandler} value={data.category} className="w-40 mt-5 px-4
        py-3 border text-gray-500">
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>

        <br />

        <button type="submit" className="mt-8 w-40 h-12 bg-black text-white">ADD</button>
      </form>
    </>
  );
};



export default page;
