import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Publications from "../Pages/Publications/Publications";
import AcademicCalender from "../Pages/AcademicCalender/AcademicCalender";
import NewsLetter from "../Pages/NewsLetter/NewsLetter";
import Journal from "../Pages/Journal/Journal";
import ImageGallery from "../Pages/ImageGallery/ImageGallery";
import Contact from "../Pages/Contact/Contact";
import AdminLogin from "../Pages/Login/AdminLogin";
import About from "../Pages/About/About";
import StudentLogin from "../Pages/Login/StudentLogin";
import Admission from "../Pages/Admission/Admission";
import ReadMore from "../Pages/Home/ParallaxCover/ReadMore";
// import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import StudentProfile from "../StudentDashboard/StudentProfile/StudentProfile";
import AllCourses from "../StudentDashboard/AllCourses/AllCourses";
import SemesterRegistrations from "../StudentDashboard/SemesterRegistrations/SemesterRegistrations";
import ExamRegistrations from "../StudentDashboard/ExamRegistrations/ExamRegistrations";
import TransportRegistrations from "../StudentDashboard/TransportRegistrations/TransportRegistrations";
import PaymentHistory from "../StudentDashboard/PaymentHistory/PaymentHistory";
import AttendanceReport from "../StudentDashboard/AttendanceReport/AttendanceReport";
import SemesterResult from "../StudentDashboard/SemesterResult/SemesterResult";
import TeachersEvaluation from "../StudentDashboard/TeachersEvaluation/TeachersEvaluation";
import AdmitCard from "../StudentDashboard/AdmitCard/AdmitCard";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "publications",
                element: <Publications></Publications>,
            },
            {
                path: "academicCalender",
                element: <AcademicCalender></AcademicCalender>,
            },
            {
                path: "newsLetter",
                element: <NewsLetter></NewsLetter>
            },
            {
                path: "journal",
                element: <Journal></Journal>
            },
            {
                path: "imageGallery",
                element: <ImageGallery></ImageGallery>,
            },
            {
                path: "contact",
                element: <Contact></Contact>
            },
            {
                path: "adminLogin",
                element: <AdminLogin></AdminLogin>,
            },
            {
                path: "studentLogin",
                element: <StudentLogin></StudentLogin>
            },
            {
                path: "about",
                element: <About></About>,
            },
            {
                path: "admission",
                element: <Admission></Admission>,
            },
            {
                path: "readMore",
                element: <ReadMore></ReadMore>,
            },
        ],
    },

    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'StudentProfile',
                element: <StudentProfile></StudentProfile>
            },
            {
                path: 'AllCourses',
                element: <AllCourses></AllCourses>
            },
            {
                path: 'SemesterRegistrations',
                element: <SemesterRegistrations></SemesterRegistrations>
            },
            {
                path: 'ExamRegistrations',
                element: <ExamRegistrations></ExamRegistrations>
            },
            {
                path: 'TransportRegistrations',
                element: <TransportRegistrations></TransportRegistrations>
            },
            {
                path: 'PaymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: 'AdmitCard',
                element: <AdmitCard></AdmitCard>
            },
            {
                path: 'AttendanceReport',
                element: <AttendanceReport></AttendanceReport>
            },
            {
                path: 'SemesterResult',
                element: <SemesterResult></SemesterResult>
            },
            {
                path: 'TeachersEvaluation',
                element: <TeachersEvaluation></TeachersEvaluation>
            }
        ]
    }
]) 


