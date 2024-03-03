
import Layout from "./components/layout/Layout"
import { Route, Routes } from "react-router-dom"
import Dashboard from "./pages/admin/Dashboard"
import Home from "./pages/ui/Home"


const  AppRouter = ()  =>{

  return (
    <>
      <Layout />
            <Routes>
                    <Route path='/admin' element={<Dashboard />} />
      </Routes>
      
       <Routes>
                    <Route path='/' element={<Home />} />
            </Routes>
    </>
  )
}

export default AppRouter
