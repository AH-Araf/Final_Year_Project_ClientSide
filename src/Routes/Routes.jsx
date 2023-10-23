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
                element: <Admission></Admission>
            },
        ]
    }
])
