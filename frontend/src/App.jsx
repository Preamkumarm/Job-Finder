import ApplyPage from "./pages/ApplyPage";
import { Route,Routes } from "react-router-dom";
import "./index.css"
import Home from "./pages/Home"
import AppliedJobsPage from "./pages/AppliedJobsPage";
import { useContext } from "react";
import { NameContext } from "./context/ArrContext";
import RecruiterLogin from "./components/RecruiterLogin";

function App() {
 const {showLogin} = useContext(NameContext);
  return (
    <>
    {
      showLogin ? <RecruiterLogin/> : <></>
    }
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/apply-job/:id" element={<ApplyPage />}/>
        <Route path="/user-job-portal/:name/:id" element={<AppliedJobsPage />} />
      </Routes>
    </>
  )
}

export default App
