import { assets } from "../assets/assets";
import { useContext, useEffect, useState } from "react";
import { NameContext } from "../context/ArrContext";
const RecruiterLogin = () => {

    const {setShowLogin} = useContext(NameContext);
    const [data,setData] = useState({
        name:"",
        email: "",
        password: "",
    });
    const [currState,setCurrState] = useState("Login");
    const [images,setImages] = useState();
    const [enterValue,setEnterValue] = useState(false);

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setData(prev=>({...prev,[name]:value}));
    }

    const onLogin = async(e)=>{
        e.preventDefault();
        if (currState === "Sign Up"  && !enterValue) {
            setEnterValue(true);   
        }
    }

    useEffect(()=>{
        document.body.style.overflow = "hidden";

        return ()=>{
            document.body.style.overflow = "unset";
        }
    },[]);
  return (
    <div className="absolute z-10 w-full h-full bg-black/60 grid">
  <form onSubmit={onLogin} className="place-self-center w-[clamp(330px,23vw,100%)] text-gray-500 bg-white flex flex-col gap-[25px] p-[25px_30px] rounded-[8px] text-sm animate-fadeIn">
    <div className="flex justify-between items-center text-black">
      <h2>Recruiter {currState}</h2>
      <img
        onClick={() => setShowLogin(false)}
        src={assets.cross_icon}
        alt=""
        className="w-4 cursor-pointer"
      />
    </div>
    {
        currState === "Sign Up" && enterValue ?
        <>
        <div className="flex items-center gap-4 my-10">
           <label htmlFor="image">
            <img src={images?URL.createObjectURL(images):assets.upload_area} alt="" className="w-16 rounded-full"/>
            <input onChange={e=>setImages(e.target.files[0])} type="file" id="image" hidden/>
           </label>
           <p>Upload company <br/> Image</p>
        </div>
        </>
        :
        <div className="flex flex-col gap-[20px]">
        {currState === "Login" ? null : (
          <input
            name="name"
            onChange={handleChange}
            value={data.name}
            type="text"
            placeholder="company Name"
            required
            className="outline-none border border-gray-300 p-2 rounded-md"
          />
        )}
        <input
          name="email"
          onChange={handleChange}
          value={data.email}
          type="text"
          placeholder="email"
          required
          className="outline-none border border-gray-300 p-2 rounded-md"
        />
        <input
          name="password"
          onChange={handleChange}
          value={data.password}
          type="password"
          placeholder="password"
          required
          className="outline-none border border-gray-300 p-2 rounded-md"
        />
      </div>
    }

    {/* <div className="flex flex-col gap-[20px]">
      {currState === "Login" ? null : (
        <input
          name="name"
          onChange={handleChange}
          value={data.name}
          type="text"
          placeholder="company Name"
          required
          className="outline-none border border-gray-300 p-2 rounded-md"
        />
      )}
      <input
        name="email"
        onChange={handleChange}
        value={data.email}
        type="text"
        placeholder="email"
        required
        className="outline-none border border-gray-300 p-2 rounded-md"
      />
      <input
        name="password"
        onChange={handleChange}
        value={data.password}
        type="password"
        placeholder="password"
        required
        className="outline-none border border-gray-300 p-2 rounded-md"
      />
    </div> */}

   {currState === "Login" && <p className="text-blue-600 text:sm mt-4 cursor-pointer">forgot Password</p>}
    <button
      type="submit"
      className="border-none p-2 rounded-md text-white  bg-black text-base cursor-pointer"
    >
      {currState === "Sign Up" ? enterValue?"create account":"next" : "Login"}
    </button>

    <div className="flex items-start gap-2 -mt-4">
      <input type="checkbox" required className="mt-1" />
      <p>By continuing, I agree to the terms of use & privacy policy.</p>
    </div>

    {currState === "Login" ? (
      <p>
        Create a new account?{" "}
        <span
          onClick={() => setCurrState("Sign Up")}
          className="text-tomato font-medium cursor-pointer"
        >
          Click here
        </span>
      </p>
    ) : (
      <p>
        Already have an account?{" "}
        <span
          onClick={() => setCurrState("Login")}
          className="text-tomato font-medium cursor-pointer"
        >
          Login here
        </span>
      </p>
    )}
  </form>
</div>

  )
}

export default RecruiterLogin