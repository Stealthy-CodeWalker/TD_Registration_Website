import { BrowserRouter,Route,Routes } from "react-router-dom";
import Backdrop from "./components/Backdrop";
import Form from "./pages/Form/Form";
import Layout from "./pages/Home/layout";
import Footer from "./components/Footer";

export default function App(){
  return(
    <div className="min-h-[100vh] overflow-hidden ">
      <BrowserRouter>
        <Backdrop/>
        <Routes>
          <Route path="/" element={<Layout/>}/>
          <Route path="/form" element={<Form/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}