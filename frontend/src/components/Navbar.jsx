import {assets} from "../assets/assets";
import { UserButton, useClerk, useUser } from "@clerk/clerk-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { NameContext } from "../context/ArrContext";

const Navbar = () => {

    const {setShowLogin} = useContext(NameContext);
    const {openSignIn} = useClerk();
    const {user} = useUser();


  return (
    <div className="shadow py-4">
        <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
        <img src={assets.logo} alt=''/>
        {
            user ? 
            <div className="flex items-center gap-3">
                <Link to={"/application"}><p>Applied Job</p></Link>
                <p>|</p>
                <p className="max-sm:hidden">Hi, {user.firstName+ ""+ user.lastName}</p>
                <UserButton/>
                </div>
                :
                <div className="flex gap-4 max-sm:text-xs">
            <button className="text-gray-600" onClick={()=>setShowLogin(true)}>Recruiter Login</button>
            <button onClick={e=>openSignIn()} className="bg-blue-600 text-white py-2 px-8 sm:px-12 rounded-full"> Login</button>
        </div>
        }
        </div>
    </div>
  )
}

export default Navbar;