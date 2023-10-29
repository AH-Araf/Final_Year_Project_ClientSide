import { NavLink } from 'react-router-dom';
import studentImage from '../../assets/image/student.jpg'
import './StudentDashboardProfile.css'
import { AiOutlineHome } from 'react-icons/ai';
import { BiLogOut } from "react-icons/bi";

const StudentDashboardProfile = () => {
    const studentName = 'Rihan Akib'
    const studentID = 2441139
    const studentDepartment = 'CSE'

    return (
        <div>
            <h1 ></h1>
            <li tabIndex={0}>
                <details>
                    <summary className="flex justify-center mb-2 bg-slate-500 text-black font-bold text-lg">Student Dashboard</summary>
                    <ul className="p-2 bg-opacity-30 bg-gray-600 text-white dropdown-box mb-2">
                        <li><NavLink to="/"><AiOutlineHome></AiOutlineHome> Home</NavLink></li>
                        <li><NavLink to="/"><BiLogOut></BiLogOut> Log Out</NavLink></li>
                    </ul>
                </details>
            </li>
            <div className="flex justify-center mb-2"><img className="h-20 w-20 rounded-dashboard-img" src={studentImage} alt="" /></div>


            <div className="flex w-full font-bold">
                <div className="grid h-20 flex-grow  place-items-start">
                    <p>Name:</p>
                    <p>ID:</p>
                    <p>Department:</p>

                </div>

                <div className="divider divider-horizontal"></div>

                <div className="grid h-20 flex-grow card  place-items-start">
                    <p>{studentName}</p>
                    <p>{studentID}</p>
                    <p>{studentDepartment}</p>

                </div>
            </div>
        </div>
    );
};

export default StudentDashboardProfile;