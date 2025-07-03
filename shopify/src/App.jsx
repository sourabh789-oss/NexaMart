import react, { useEffect, useState } from 'react';
import Navbar from './Component/Navbar';
import { Route, Routes } from 'react-router-dom'
import Create from './Pages/Create';
import Login from './Pages/Login';
import Landingpage from './Pages/Landingpage';
import Product from './Pages/Product';
import Service from './Pages/Service'
import Loader from './Component/Loader';

const App = () => {

  //give loader when page load using useState and useEffect 
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const d = setTimeout(() => {

      setLoading(false);
    }, 2000)

    return () => clearTimeout(d);
  }, []);

  if (loading) {//loader true hoga matlab setTimeout ka time khatam nahi hua ha to loader dikhado or return ho jao 
    return <Loader />

  }

  return (<>
    <Navbar />
    <Routes>
      <Route path='/' element={<Landingpage />}></Route>
      <Route path='/Create' element={<Create />}></Route>
      <Route path='/Login' element={<Login />}></Route>
      <Route path='/Product' element={<Product />}></Route>
      <Route path='/Service' element={<Service />}></Route>
    </Routes>
  </>
  )
}

export default App;