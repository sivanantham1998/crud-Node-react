import "./App.css"
import "./css/fs.css"
import { BrowserRouter, Routes ,Route} from "react-router-dom";
import Fs from "./axios/fs";
import Home from "./home";
import View from "./axios/view";
import Edit from "./axios/edit";
import ValidationForm from "./validation/validation";
import Ui from "./mainUi/Ui";
import SampleView from "./sampleView";

export default function App()
{
  return(
    <>
      <h1>CRUD APPLICATION</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          {/* <Route path='/fs' element={<Fs></Fs>}/>
          <Route path="/view" element={<View></View>}/>
          <Route path="/edit" element={<Edit></Edit>}/>
          <Route path="/validation" element={<ValidationForm/>}/>
          <Route path="/ui" element={<Ui></Ui>}/> */}
          <Route path="/sample" element={<SampleView></SampleView>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}