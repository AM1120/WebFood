import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './Components/Navbar';
import Inicio from './Pages/Inicio';
import Catalogo from './Pages/Catalogo/Catalogo';
import CrearProducto from './Pages/Catalogo/Crear';
import Login from './Pages/Login/Login';
import Registro from './Pages/Registro/Registro';
import Footer from './Components/Footer';
import { useSelector } from 'react-redux';
import { UserState } from './Redux/slices/userSlice';

function App() {

  const user = useSelector((state:{user:UserState}) => state.user);



  return (
    <Router>
      <>
      <Navbar/>

      <Routes>

        {user.isLoggedIn && user.userSession?.t_rol==2&&(
          <>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/catalogo' element={<Catalogo/>}/>
            <Route path='/crear-producto' element={<CrearProducto/>}/>
          </>
        )}
        {user.isLoggedIn && user.userSession?.t_rol==1 && (
          <>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/catalogo' element={<Catalogo/>}/>
          </>
        )}
        <Route path='*' element={<Inicio/>}/>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/catalogo' element={<Catalogo/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registrarse' element={<Registro/>}/>


      </Routes>
      <Footer/>

      </>
    </Router>
  );
}

export default App
