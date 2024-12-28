import React, { useContext } from "react";
import "../index.css";
import { NameContext } from "../context/ArrContext";
import JobBoaard from "./JobBoaard";

const SimilarJobCards = ({fetchData}) => {

  const {job} = useContext(NameContext);
  const similarData = job.filter((jobs)=>
     jobs.companyId._id === fetchData.companyId._id && jobs._id !== fetchData._id).filter(jobs=>true).slice(0,3);

  return (
    <div className="w-full grid justify-end px-4 md:px-8 lg:px-16 gap-5">
      <p className="text-lg mb-5 flex">More jobs from {fetchData.companyId.name}</p>
     {
      similarData.map((value,index)=>{
        return <JobBoaard key={index} listJob={value}/>
      })
     }
    </div>

  )
}

export default SimilarJobCards