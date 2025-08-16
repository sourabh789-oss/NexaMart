import react, { useEffect, useState } from 'react';
import Navbar from './Component/Navbar';
import { Route, Routes } from 'react-router-dom'
import Create from './Pages/Create';
import Login from './Pages/Login';
import Landingpage from './Pages/Landingpage';
import Product from './Pages/Product';
import Service from './Pages/Service'
import Loader from './Component/Loader';
import Scrollbar from './Component/Scrollbar';
import 'remixicon/fonts/remixicon.css'
// import useLocoScroll from './Scrollbehaviour/useLocoScroll';//our custom hooks but issue for not show scrollbar component and also product page not scroll properly so not use now  

import { ThemeProvider } from './components/ui/theme-provider';


const App = () => {
  
  //give loader when page load using useState and useEffect 
  const [loading, setLoading] = useState(true);
  
  
  // useLocoScroll(!loading);
  useEffect(() => {
    
    const d = setTimeout(() => {
      
      setLoading(false);
    }, 2000)
    
    return () => clearTimeout(d);//always free the function when call in useEffect hooks for best 
  }, []);
  
  if (loading) {//loader true hoga matlab setTimeout ka time khatam nahi hua ha to loader dikhado or return ho jao 
    return <Loader />
    
  }
  
  return ( <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  <div className='app min-h-screen overflow-x-hidden bg-[#f9fafb] text-black  dark:bg-black dark:text-white transition-colors duration-300' data-scroll-container>  
    <Scrollbar/>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Landingpage />}></Route>
      <Route path='/Create' element={<Create  />}></Route>
      <Route path='/Login' element={<Login />}></Route>
      <Route path='/Product' element={<Product />}></Route>
      <Route path='/Service' element={<Service />}></Route>
    </Routes>
</div>
</ThemeProvider>

  )
}

export default App;