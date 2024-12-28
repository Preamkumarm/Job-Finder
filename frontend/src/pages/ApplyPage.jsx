import React, { useContext, useEffect, useState } from "react";
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { NameContext } from "../context/ArrContext";
import { assets, jobsData } from "../assets/assets";
import suitcase_icon from "../assets/suitcase_icon.svg";
import location_icon from "../assets/location_icon.svg";
import money_icon from "../assets/money_icon.svg";
import profile_icon from "../assets/person_icon.svg";
import moment from "moment";
import SimilarJobCards from "../components/SimilarJobCards";

const ApplyPage = () => {

const {id} = useParams();
const {job} = useContext(NameContext);
const [fetchData, setFetchData] = useState(null);
const navigate = useNavigate();

  useEffect(()=>{
    const data = job.filter(job=>job._id === id);
    if(data.length !==0)
    {
      setFetchData(data[0]);
    }
  },[id,job]);

    return fetchData ? (
      <div>
        <Navbar />
        <main className="flex justify-center px-3 sm:px-5 lg:px-10">
      <div className="w-11/12">
        <div
          className="w-full max-w-7xl flex flex-col h-auto md:h-56 md:flex-row mt-10 bg-blue-50 border-2 rounded-lg border-blue-500 shadow-md"
        >
          <div className="w-full md:w-3/5 p-5 flex items-center md:ml-5">
            <div className="px-5 py-5 w-16 md:w-32 bg-white h-20 md:h-28 flex justify-center items-center rounded-lg border-2">
              <img
                src={assets.company_icon}
                className="w-8 md:w-12"
                alt="Company Logo"
              />
            </div>
            <div className="ml-3 md:ml-5">
              <h1 className="text-lg md:text-3xl text-black font-semibold">
                {fetchData.title}
              </h1>
              <div className="py-3 md:py-5 flex flex-col md:flex-row items-start md:items-center text-sm gap-3 md:gap-6">
                <div className="flex items-center">
                  <img
                    src={suitcase_icon}
                    alt="Job Icon"
                    className="w-4 h-4"
                  />
                  <p className="ml-2">{fetchData.name}</p>
                </div>
                <div className="flex items-center">
                  <img
                    src={location_icon}
                    alt="Location Icon"
                    className="w-4 h-4 ml-0 md:ml-10"
                  />
                  <p className="ml-2">{fetchData.location}</p>
                </div>
                <div className="flex items-center">
                  <img
                    src={profile_icon}
                    alt="Profile Icon"
                    className="w-4 h-4 ml-0 md:ml-10"
                  />
                  <p className="ml-2">{fetchData.level}</p>
                </div>
                <div className="flex items-center">
                  <img
                    src={money_icon}
                    alt="Salary Icon"
                    className="w-4 h-4 ml-0 md:ml-10"
                  />
                  <p className="ml-2 w-10">CTC: ${fetchData.salary / 1000}K</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-5">
            <button onClick={()=>navigate(`/user-job-portal/${fetchData.title}/${fetchData._id}`)}
            className="bg-blue-600 text-white px-12 py-3 rounded text-[13px]">
              Apply now
            </button>
            <p className="text-[13px] md:text-[12px] mt-3">
              Posted {moment(fetchData.date).fromNow()}
            </p>
          </div>
        </div>
        <div className="w-full sm:grid-flow-col grid">
          <div className="w-5/6 grid grid-row-1 sm:grid-row-2 xl:grid-row-3 mt-10">
          <div className='rich-text'>
            <h2><strong>Job Description</strong></h2>
            <div className='gap-4 leading-loose'>
        <div
        dangerouslySetInnerHTML={{__html: fetchData.description}}
        >    
        </div>
        <button onClick={()=>navigate(`/user-job-portal/${fetchData.title}/${fetchData._id}`)}
        className="bg-blue-600 text-white px-12 py-3 rounded text-[13px] w-40 mt-10"
        >
              Apply now
            </button>
        </div>
        </div>
            
          </div>
          <div className="w-full lg:w-1/3 mt-8 lg:mt-0 lg:ml-8 space-y-5">
            <SimilarJobCards fetchData={fetchData} allJobs={jobsData}/>
          </div>
        </div>
      </div>
    </main>
        <Footer/>
        </div>
    ):(<>
    </>)
};

export default ApplyPage;
