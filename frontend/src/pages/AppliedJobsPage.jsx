import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import { jobsApplied } from '../assets/assets';
import Footer from "../components/Footer";
import { assets } from '../assets/assets';

const AppliedJobsPage = () => {

  const [isEdit,setIsEdit] = useState(false);
    const [resume,setIsResume] = useState();

  return (
    <div>
      <Navbar />
        <div className='container min-h-[65vh] 2xl:px-20 px-4 mx-auto my-10'>
            <h2 className='text-xl font-semibold'>Your resume</h2>
            <div className='flex gap-2 mb-6 mt-3'>
              {
                isEdit ? 
                <>
                <label className='flex items-center' htmlFor='resume'>
                  <p className='bg-blue-100 text-blue-600 px-4 py-2 rounded-lg mr-2'>select</p>
                  <input id="resume" accept="application/pdf" type='file' onChange={e=>setIsResume(e.target.files[0])} hidden/>
                  <img src={assets.profile_upload_icon} alt=''/>
                </label>
                <button onClick={()=>setIsEdit(false)} className='bg-green-100 border border-green-400 rounded-lg px-4 py-2'>Save</button>
                </> : 
                <div className='gap-2 flex'>
                  <a className='text-blue-600 bg-blue-100 px-4 py-2 rounded-lg' href='#'>
                    Resume
                  </a>
                  <button onClick={()=>setIsEdit(true)} className='text-gray-500 border border-gray-300 rounded-lg px-4 py-2'>Edit</button>
                </div>
              }
            </div>
            <h2 className='text-xl font-semibold mb-4'>Jobs Applied</h2>
            <table className='min-w-full border rounded-lg bg-white'>
              <thead>
                <tr>
                  <th className='py-3 px-4 text-left border-b'>Company</th>
                  <th className='py-3 px-4 text-left border-b'>Job Title</th>
                  <th className='py-3 px-4 text-left border-b max-sm:hidden'>Location</th>
                  <th className='py-3 px-4 text-left border-b max-sm:hidden'>Date</th>
                  <th className='py-3 px-4 text-left border-b'>Status</th>
                </tr>
              </thead>
              <tbody>
                {
                  jobsApplied.map((item,index)=> true ?
                  (
                  <tr key={index}>
                    <td className='flex px-4 items-center gap-2 border-b py-3'>
                      <img className='w-8 h-8' src={item.logo} alt=''/>
                      {item.company}
                    </td>
                    <td className='py-2 px-4 border-b'>{item.title}</td>
                    <td className='py-2 px-4 border-b max-sm:hidden'>{item.location}</td>
                    <td className='py-2 px-4 border-b max-sm:hidden'>{item.date}</td>
                    <td className='py-2 px-4 border-b'>
                      <span className={`${item.status === "Accepted" ? "bg-green-100":item.status === "Rejected" ? "bg-red-200":"bg-blue-200"} px-4 py-2 rounded`}>{item.status}</span>
                      </td>
                  </tr>
                  ):
                  (<></>))
                }
              </tbody>
            </table>
          </div>
          <Footer/>
    </div>
    
  )
}

export default AppliedJobsPage