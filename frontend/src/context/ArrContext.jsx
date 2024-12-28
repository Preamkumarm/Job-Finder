import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";

const NameContext = createContext();

const StoreContext = (props)=>{

    const [search,setSearch] = useState({
        title:"",
        location:"",
    });

    const [isSearch,setIsSearch] = useState(false);
    const[job,setJob] = useState([]);
    const [showLogin,setShowLogin]= useState(false);


    const fetchJobs = async()=>{
        setJob(jobsData);
    }

    useEffect(()=>{
        fetchJobs();
    },[job]);

    const userData ={
        setSearch,search,
        setIsSearch,isSearch,
        setJob,job,
        showLogin,setShowLogin,
    }
    return (<div>
        <NameContext.Provider value={userData}>
            {props.children}
        </NameContext.Provider>
    </div>)
}

export default StoreContext;
export {NameContext};