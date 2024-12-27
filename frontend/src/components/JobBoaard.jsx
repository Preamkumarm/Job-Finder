import React from 'react'
import { assets } from '../assets/assets'
import {useNavigate} from "react-router-dom";

const JobBoaard = ({listJob}) => {
  const navigate = useNavigate();
  return (
    <div className='border p-6 shadow rounded'>
        <div className='flex justify-between items-center'>
            <img src={assets.company_icon} alt='' className='h-8'/>
        </div>
        <h3 className='font-medium text-xl mt-2'>{listJob.title}</h3>
        <div className='flex items-center gap-3 mt-2 text-xs'>
            <p className='bg-blue-50 border border-blue-200 px-4 py-1.5 rounded'>{listJob.location}</p>
            <p className='bg-red-50 border border-red-200 px-4 py-1.5 rounded'>{listJob.level}</p>
        </div>
        <p className='text-gray-500 text-sm mt-4' dangerouslySetInnerHTML={{__html: listJob.description.slice(0,150) }}></p>
        <div className='mt-4 flex gap-4 text-sm'>
            <button onClick={()=>navigate(`/apply-job/${listJob._id}`)} className='bg-blue-600 text-white px-4 py-2 rounded'>Apply now</button>
            <button onClick={()=>navigate(`/apply-job/${listJob._id}`)} className='text-gray-500 border border-gray-500 rounded px-4 py-2'>Learn More</button>
        </div>
    </div>
  )
}

export default JobBoaard