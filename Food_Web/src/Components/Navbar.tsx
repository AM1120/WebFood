import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UserState } from "../Redux/slices/userSlice";
import { logout } from "../Redux/slices/userSlice";
import { useDispatch } from "react-redux";


export default function Navbar() {
    const dispatch = useDispatch(); 

    const user = useSelector((state:{user:UserState}) => state.user);


    return (
        <nav className="min-h-[10vh] max-h-[10vh] flex flex-row justify-between items-center bg-white px-6 shadow-md">
    <Link to="/" className="flex items-center">
      <img src="https://i.pinimg.com/236x/cf/62/3f/cf623fe97dc5f0b53c7bf95684fd3b3b.jpg" alt="Logo" className="min-h-[10vh] max-h-[10vh]" />
      <span className="ml-4 text-2xl font-bold text-black hover:text-orange-700 transition-colors">Book Cafe</span>
    </Link>
            <ul className="flex flex-row gap-6 navbar-links">
                {user.isLoggedIn && user.userSession?.t_rol==2&&(
                <li>
                    <Link
                        to="/crear-producto"
                        className="text-lg text-orange-500 hover:text-orange-950 transition-colors"
                    >
                        Crear Producto
                    </Link>
                </li>
                )}

                <li>
                    <Link
                        to="/catalogo"
                        className="text-lg text-orange-500 hover:text-orange-950 transition-colors"
                    >
                        Productos
                    </Link>
                </li>
                {
                    user.isLoggedIn ? (
                        <li>

                            <Link
                                to={"/"}
                                className="text-lg text-orange-500 hover:text-orange-950 transition-colors"
                                onClick={()=>dispatch(logout())}
                                >
                                Cerrar Sesión
                            </Link>
                        </li>

                    ) : (
                        <>
                        <li>
                            <Link
                                to="/registrarse"
                                className="text-lg text-orange-500 hover:text-orange-950 transition-colors"
                            >
                                Registrarse
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/login"
                                className="text-lg text-orange-500  hover:text-orange-950 transition-colors"
                            >
                                Iniciar Sesión
                            </Link>

                        </li>

                        </>

                    )
                }


            </ul>
        </nav>
        
    );
}
