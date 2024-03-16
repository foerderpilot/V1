import '../App.css';
import { Link } from 'react-router-dom'; // Import Link component

function Navbar() {
    const logo = "https://i.ibb.co/pKxJv5r/Logo-Navigator.png";

    return (
        <div className="navbar bg-base-100 mb-3 max-w-screen-xl mx-auto px-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a>Resources</a>
                            <ul className="p-2">
                                <li><Link to="/how">How to</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/your-path-for-foerdermittelberater">Für Fördermittelberater</Link></li>
                    </ul>
                </div>
                <Link to="/home" className="block">
                        <div className="flex items-center">
                            <img src={logo} className="h-8 w-8 mr-2" alt="Logo"/>
                            <div className="flex flex-col items-start">
                                <span className="text-xl text-left">Förderpilot</span>
                                <p className="text-sm">Finden. Finanzieren. Loslegen.</p>
                            </div> 
                        </div>
                    </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <details>
                            <summary>Ressources</summary>
                            <ul className="p-2">
                                <li><Link to="/how">How to</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link to="/home">Für Fördermittelberater</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/login" className="btn bg-custom">Log-In</Link>
            </div>
        </div>
    );
}

export default Navbar;
