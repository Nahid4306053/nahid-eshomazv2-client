/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useState } from 'react'

import BlogCard from '../components/BlogCard'
import BlogPagination from '../components/BlogPagination'  
import useBlogs from '../Hooks/useBlogs'
import LoadinComponet from '../components/Shared/LoadingComponent';
import ErrorComponet from '../components/Shared/ErrrorComponet';
export default function Blogs() { 
   const [page,setpage] = useState(1)
   const {Blogs,error,isError,isLoading,isSuccess} = useBlogs(page,5);
   useEffect(()=>{
    window.scrollTo(0,0)
   },[page])
   return (
        <div className="col-span-full  lg:pr-10 lg:col-span-8">   
        { isLoading ? <div className='w-full max-h-screen flex justify-center items-center'><LoadinComponet></LoadinComponet></div>
         : isError ? <div className='w-full max-h-screen flex justify-center items-center'><ErrorComponet></ErrorComponet></div>
         : Blogs.data?.Blogs.map((ele)=>{
          return (
            <BlogCard key={ele._id} element={ele}></BlogCard>
          )
         })
        } 
        <br />
        <br />
        <br />
         {isSuccess && <BlogPagination page={page} setPage={setpage} totaldata={Blogs.data?.totalData}/>  }
        </div>   

    
             
  )
}
