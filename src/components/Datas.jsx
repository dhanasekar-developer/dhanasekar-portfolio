import React from 'react'
import { FaHome, FaImage, FaFileAlt, FaHtml5, FaBootstrap, FaReact, FaPython,FaPhp  } from "react-icons/fa";
import { IoMdContact, IoLogoCss3 } from "react-icons/io";
import { GiMightySpanner } from "react-icons/gi";
import { LuMessageCircleMore } from "react-icons/lu";
import { RiTailwindCssFill, RiJavascriptFill } from "react-icons/ri";
import { SiMysql, SiDjango } from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Contact from "./Contact";
import Footer from "./Footer";
import project_1 from "../assets/project_1.png"
import project_2 from "../assets/project_2.png"



export const navigations = [
    {'id':1,'title':'Home','toPath':'home','icon':<FaHome size={25} />,'element':Home},
    {'id':2,'title':'About','toPath':'about','icon':<IoMdContact size={30} />,'element':About},
    {'id':3,'title':'Portfolio','toPath':'portfolio','icon':<FaImage size={25} />,'element':Portfolio},
    // {'id':4,'title':'Skills','toPath':'skills','icon':<GiMightySpanner size={32} />,'element':Skills},
    {'id':4,'title':'Resume','toPath':'resume','icon':<FaFileAlt size={25} />,'element':Resume},
    {'id':5,'title':'Contact','toPath':'contact','icon':<LuMessageCircleMore size={30} />,'element':Contact},
    {'id':6,'title':'Footer','toPath':'footer','icon':<FaImage />,'element':Footer},
]

export const skills = [
    {'id':1,'tagName':'HTML','tag':<FaHtml5 />,'logoColor':'#dc2626'},
    {'id':2,'tagName':'CSS','tag':<IoLogoCss3 />,'logoColor':'#38bdf8'},
    {'id':3,'tagName':'Javascript','tag':<RiJavascriptFill />,'logoColor':'#F0DB4F'},
    {'id':4,'tagName':'Bootstrap','tag':<FaBootstrap />,'logoColor':'#784abc'},
    {'id':5,'tagName':'Tailwind CSS','tag':<RiTailwindCssFill  />,'logoColor':'#16becb'},
    {'id':6,'tagName':'Jquery','tag':<DiJqueryLogo />,'logoColor':'#0868AC'},
    {'id':7,'tagName':'React js','tag':<FaReact />,'logoColor':'#61DBFB'},
    {'id':8,'tagName':'python','tag':<FaPython />,'logoColor':'#4B8BBE'},
    {'id':9,'tagName':'Django','tag':<SiDjango />,'logoColor':'#15803d'},
    {'id':10,'tagName':'PHP','tag':<FaPhp />,'logoColor':'#484C89'},
    {'id':11,'tagName':'MySql','tag':<SiMysql />,'logoColor':'#00758f'},
]

export const themeData = [
    {'id': 1, 'color': '#6c6ae7', 'title':'theme-one'},
    {'id': 2, 'color': '#ff6347', 'title':'theme-two'},
    {'id': 3, 'color': '#37b182', 'title':'theme-three'},
    {'id': 4, 'color': '#00aef2', 'title':'theme-four'},
    {'id': 5, 'color': '#ec1839', 'title':'theme-five'},
    {'id': 6, 'color': '#f021b2', 'title':'theme-six'},
    {'id': 7, 'color': '#577ff4', 'title':'theme-seven'},
    {'id': 8, 'color': '#fa5b0f', 'title':'theme-eight'},
    {'id': 9, 'color': '#FFA500', 'title':'theme-nine'},
    {'id': 10, 'color': '#00a800', 'title':'theme-ten'},
]

export const resumeData = {
    
    education:[
        {id:1, title:'Higher Secondary Certificate (HSC) – Maths Computer Group', content:'Government Boys Higher Secondary School, Komarapalayam', year:'Year of Completion: 2019'},
        {id:2, title:'Bachelor of Engineering (B.E.) in Mechanical Engineering', content:'J.K.K.N. College of Engineering and Technology', year:'2019 – 2023 | CGPA: 8.1'},
        {id:3, title:'Certification', content:'React.js Frontend Developer Course', year:'Completed after graduation | Duration: 4 months'},
    ],

    skills:[
        {'id':1,'tagName':'HTML','tag':<FaHtml5 />,'logoColor':'#dc2626'},
        {'id':2,'tagName':'CSS','tag':<IoLogoCss3 />,'logoColor':'#38bdf8'},
        {'id':3,'tagName':'Javascript','tag':<RiJavascriptFill />,'logoColor':'#F0DB4F'},
        {'id':4,'tagName':'Bootstrap','tag':<FaBootstrap />,'logoColor':'#784abc'},
        {'id':5,'tagName':'Tailwind CSS','tag':<RiTailwindCssFill  />,'logoColor':'#16becb'},
        {'id':6,'tagName':'Jquery','tag':<DiJqueryLogo />,'logoColor':'#0868AC'},
        {'id':7,'tagName':'React js','tag':<FaReact />,'logoColor':'#61DBFB'},
        {'id':8,'tagName':'python','tag':<FaPython />,'logoColor':'#4B8BBE'},
        {'id':9,'tagName':'Django','tag':<SiDjango />,'logoColor':'#15803d'},
        {'id':10,'tagName':'PHP','tag':<FaPhp />,'logoColor':'#484C89'},
        {'id':11,'tagName':'MySql','tag':<SiMysql />,'logoColor':'#00758f'},
    ],

    experience:[
        {id:1, title:'Front-End Developer',designation:'Trainee', company:'i Human Power | Duration: 3 Months', content:'Worked as a Front-End Developer, focusing on HTML, CSS, and JavaScript to build responsive and user-friendly web interfaces. Gained experience in developing and optimizing UI components, ensuring cross-browser compatibility, and improving website performance. Collaborated with the development team to enhance design consistency and user experience.'},
        {id:2, title:'Full Stack Developer',designation:'Junior Associate', company:'i Human Power | Duration: 9 Months', content:'Worked as a Full Stack Developer, specializing in Django and Python. Responsible for developing, maintaining, and optimizing web applications, handling both front-end and back-end development. Gained experience in building RESTful APIs, database management, and implementing user-friendly interfaces.'}
    ]
   
}

export const projects = [
    {id:1,title:'front-end project - ecommerce site',content:"Developed a fully functional e-commerce website using React.js, Implemented a shopping cart with add, remove, and update functionalities, along with user authentication. Used React Router for smooth navigation and CSS for a responsive design. Managed state efficiently with React hooks and optimized performance through lazy loading and memoization. This project enhanced my understanding of component-based architecture, state management, and UI responsiveness in React.", language:'react js', deployLink:'', githubLink:'', video: project_1, active:true},
    {id:2,title:'fullstack project - movie booking site',content:"Built a full-stack movie booking website using HTML, CSS, and JavaScript for the front end, with Node.js and Express.js handling the backend and MongoDB for database storage. The platform allows users to select showtimes, and book tickets seamlessly. Implemented user authentication for secure login and designed a responsive UI for smooth user experience. This project enhanced my expertise in backend development, database management, and integrating front-end with a dynamic server-side application.", language:'HTML, CSS, JS, Node Js, Express Js, MongoDB', deployLink:'', githubLink:'', video: project_2, active:false},
]

export const contactField = [
    {'id':'userName','title':'Name','colSpan':1,'fieldType':'text'},
    {'id':'companyName','title':'Company Name','colSpan':1,'fieldType':'text'},
    {'id':'email','title':'Email','colSpan':1,'fieldType':'text'},
    {'id':'mobileNo','title':'Mobile No','colSpan':1,'fieldType':'text'},
    {'id':'subject','title':'Subject','colSpan':2,'fieldType':'text'},
    {'id':'content','title':'Content','colSpan':2,'fieldType':'textarea'},
]