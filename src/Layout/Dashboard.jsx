import { NavLink, Outlet } from "react-router-dom";

import { FaWallet, 
    FaCalendarAlt, 
    FaHome, 
    FaBook, 
    FaUsers, 
    FaAcquisitionsIncorporated,
    
} from 'react-icons/fa';

const Dashboard = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open bg-white text-black">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    
                        <label htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            <span>Open Dashboard</span>
                        </label>

                    {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button ">Dashboard</label> */}
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-gray-500 text-white border-e-8 border-green-300">

                        <li><NavLink to="/dashboard/StudentProfile"><FaHome></FaHome>Student Profile</NavLink></li>
                        <li><NavLink to="/dashboard/AllCourses"> <FaAcquisitionsIncorporated></FaAcquisitionsIncorporated>All Courses</NavLink></li>
                        <li><NavLink to="/dashboard/SemesterRegistrations"><FaWallet></FaWallet>Semester Registrations</NavLink></li>
                        <li><NavLink to="/dashboard/ExamRegistrations"><FaBook></FaBook> Exam Registrations</NavLink></li>
                        <li><NavLink to="/dashboard/TransportRegistrations"><FaUsers></FaUsers>Transport Registrations</NavLink></li>
                        <li><NavLink to="/dashboard/PaymentHistory"><FaHome></FaHome>Payment History</NavLink></li>
                        <li><NavLink to="/dashboard/AdmitCard"><FaCalendarAlt></FaCalendarAlt> Admit Card</NavLink></li>
                        <li><NavLink to="/dashboard/AttendanceReport"><FaWallet></FaWallet>Attendance Report</NavLink></li>
                        <li><NavLink to="/dashboard/SemesterResult"><FaCalendarAlt></FaCalendarAlt>Semester Result</NavLink></li>
                        <li><NavLink to="/dashboard/TeachersEvaluation"><FaWallet></FaWallet>Teachers Evaluation</NavLink></li>

                        <div className="divider"></div>
                       

                        <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Dashboard;