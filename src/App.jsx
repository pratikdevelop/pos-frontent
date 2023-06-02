import Signin from "./app/Signin";
import Header from "./app/layout/Header";
import { Route, Routes } from "react-router-dom";
import Signup from "./app/Signup";
import Index from "./app/index";
function App() {
  return (
  <div className='flex flex-col flex-auto h-full w-full'>
  <Header/>
  <Routes>
    <Route path="/signin" element={<Signin></Signin>} > </Route>
    <Route path="/signup" element={<Signup></Signup>} > </Route>
    <Route path="/" element={<Index></Index>} > </Route>
  </Routes>
  </div>
  )
}

export default App
