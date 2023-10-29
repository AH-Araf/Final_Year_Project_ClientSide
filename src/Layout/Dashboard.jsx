import { NavLink, Outlet } from "react-router-dom";
import { BiBookOpen } from "react-icons/bi";
import { AiOutlineCar,  AiOutlineFundView, AiOutlineEdit, AiOutlineIdcard, AiOutlineUser, AiOutlineInsertRowRight, AiOutlineFileProtect } from "react-icons/ai";
import { BsFileEarmarkDiff } from "react-icons/bs";
import { MdOutlinePayment } from "react-icons/md";
import StudentDashboardProfile from "../StudentDashboard/StudentDashboardProfile/StudentDashboardProfile";



const Dashboard = () => {

    

    return (
        <div>
            <div className="drawer lg:drawer-open bg-white text-black">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}

                    <label htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        <span>Open Dashboard</span>
                    </label>

                    {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button ">Dashboard</label> */}
                    <Outlet></Outlet>
   
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-70 min-h-full bg-gray-600 text-white border-e-8 border-green-300">
                            
                        <StudentDashboardProfile></StudentDashboardProfile>

                        <div className="divider"></div>

                        <li><NavLink to="/dashboard/StudentProfile"><AiOutlineUser></AiOutlineUser>Student Profile</NavLink></li>
                        <li><NavLink to="/dashboard/AllCourses"> <BiBookOpen></BiBookOpen>All Courses</NavLink></li>
                        <li><NavLink to="/dashboard/SemesterRegistrations"><AiOutlineFileProtect></AiOutlineFileProtect>Semester Registrations</NavLink></li>
                        <li><NavLink to="/dashboard/ExamRegistrations"><AiOutlineEdit></AiOutlineEdit> Exam Registrations</NavLink></li>
                        <li><NavLink to="/dashboard/TransportRegistrations"><AiOutlineCar></AiOutlineCar>Transport Registrations</NavLink></li>
                        <li><NavLink to="/dashboard/PaymentHistory"><MdOutlinePayment></MdOutlinePayment>Payment History</NavLink></li>
                        <li><NavLink to="/dashboard/AdmitCard"><AiOutlineIdcard></AiOutlineIdcard> Admit Card</NavLink></li>
                        <li><NavLink to="/dashboard/AttendanceReport"><AiOutlineInsertRowRight></AiOutlineInsertRowRight>Attendance Report</NavLink></li>
                        <li><NavLink to="/dashboard/SemesterResult"><AiOutlineFundView></AiOutlineFundView>Semester Result</NavLink></li>
                        <li><NavLink to="/dashboard/TeachersEvaluation"><BsFileEarmarkDiff></BsFileEarmarkDiff>Teachers Evaluation</NavLink></li>
                        
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Dashboard;