import { NavLink } from "react-router-dom";
import './NavBar.css'
import logo from '../../../../public/logo.png'



const NavBar = () => {

    return (
        <div>
            <div className="navbar bg-green-100 text-green-900">
                <div className="navbar-start ">
                    <div className="dropdown ">
                        {/* lg:hidden */}
                        <label tabIndex={0} className="btn btn-ghost ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-100 rounded-box w-60">
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li tabIndex={0}>
                                <details>
                                    <summary>BAIUST</summary>
                                    <ul className="p-2 bg-opacity-30 bg-green-100 dropdown-box">
                                        <li><NavLink to="/publications">Publications</NavLink></li>
                                        <li><NavLink target="_blank" to="https://drive.google.com/file/d/1eafym5wCUU4iPJxMUYIHIjlZsbD8Jk0O/view">Academic Calender</NavLink></li>
                                        <li><NavLink target="_blank" to="https://drive.google.com/file/d/1RCNhKrqqajRDvfCqHdRCZAjum_MC76pB/view">News Letter</NavLink></li>
                                        <li><NavLink to="/journal">Journal</NavLink></li>
                                        <li><NavLink to="/imageGallery">Image Gallery</NavLink></li>

                                        {/* <li><NavLink to="/">Certificate Verification</NavLink></li> */}
                                        {/* Student Dashboard */}
                                    </ul>
                                </details>
                            </li>
                            <li><NavLink to="/admission">Admission</NavLink></li>
                            <li tabIndex={0}>
                                <details>
                                    <summary>Login</summary>
                                    <ul className="p-2 bg-opacity-30 bg-green-100 dropdown-box">
                                        <li><NavLink to="/adminLogin">Faculty/Officers/Staffs</NavLink></li>
                                        <li><NavLink to="/studentLogin">Student</NavLink></li>
                                    </ul>
                                </details>
                            </li>

                            <li><NavLink to="/contact">Contact</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost normal-case text-xl">BAIUST</a> */}
                    <img className="h-16 w-14" src={logo} alt="" />
                </div>



                {/* Large Device */}
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li tabIndex={0}>
                            <details>
                                <summary>BAIUST</summary>
                                <ul className="p-2 z-[1]  bg-green-100 dropdown-box">
                                    <li><NavLink to="/publications">Publications</NavLink></li>
                                    <li><NavLink target="_blank" to="https://drive.google.com/file/d/1eafym5wCUU4iPJxMUYIHIjlZsbD8Jk0O/view">Academic Calender</NavLink></li>
                                    <li><NavLink target="_blank" to="https://drive.google.com/file/d/1RCNhKrqqajRDvfCqHdRCZAjum_MC76pB/view">News Letter</NavLink></li>
                                    <li><NavLink to="/journal">Journal</NavLink></li>
                                    <li><NavLink to="/imageGallery">Image Gallery</NavLink></li>

                                    {/* <li><NavLink to="/">Certificate Verification</NavLink></li> */}
                                    {/* Student Dashboard */}
                                </ul>
                            </details>
                        </li>
                        <li><NavLink to="/admission">Admission</NavLink></li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Login</summary>
                                <ul className="p-2 z-[1]  bg-green-100 dropdown-box">
                                    <li><NavLink to="/adminLogin">Faculty/Officers/Staffs</NavLink></li>
                                    <li><NavLink to="/studentLogin">Student</NavLink></li>
                                </ul>
                            </details>
                        </li>

                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/dashboard/StudentProfile">Dashboard</NavLink></li>


                    </ul>
                    
                </div>

            </div>

        </div>
    );
};


export default NavBar;