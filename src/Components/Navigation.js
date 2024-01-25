import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./Home";
import { Hotels } from "./Hotels";
import { Cars } from "./Cars";
import { Gettheapp } from "./Gettheapp";
// import { Routing } from "./Routing";
import { Hoteldetailed } from "./Hoteldetailed";
import { Locumavail } from "./Locum";
import CubePresentation from "./Cube";
import { Toastal } from "./toast";
import { Jobpost } from "./Jobpost";
import { Avail } from "./Avail";




export function Navigation(){




    return(
        <>
        
        <BrowserRouter>
        
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/Hotels" element={<Hotels/>}/>
            <Route path="/Cars" element={<Cars/>}/>
            <Route path="/Gettheapp" element={<Gettheapp/>}/>
            <Route path="/Hoteldetailed" element={<Hoteldetailed/>}/>
            <Route path="/Locum" element={<Locumavail/>}/>
            <Route path="/Cube" element={<CubePresentation/>}/>
            <Route path="/toast" element={<Toastal/>}/>
            <Route path="/job" element={<Jobpost/>}/>
            <Route path="/avail" element={<Avail/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}