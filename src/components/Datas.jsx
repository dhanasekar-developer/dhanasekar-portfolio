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
import project_1 from "../assets/Ecommerce.mp4"
import project_2 from "../assets/TicketBooking.mp4"
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandRedux } from "react-icons/tb";

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
    // {'id':4,'tagName':'Bootstrap','tag':<FaBootstrap />,'logoColor':'#784abc'},
    {'id':5,'tagName':'Tailwind CSS','tag':<RiTailwindCssFill  />,'logoColor':'#16becb'},
    {'id':7,'tagName':'React js','tag':<FaReact />,'logoColor':'#61DBFB'},
    {'id':8,'tagName':'python','tag':<FaPython />,'logoColor':'#4B8BBE'},
    {'id':9,'tagName':'Django','tag':<SiDjango />,'logoColor':'#15803d'},
    // {'id':10,'tagName':'PHP','tag':<FaPhp />,'logoColor':'#484C89'},
    // {'id':11,'tagName':'MySql','tag':<SiMysql />,'logoColor':'#00758f'},
    {'id':12,'tagName':'Postgresql ','tag':<BiLogoPostgresql />,'logoColor':'#336791'},
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
        {id:1, title:'Frontend Certification', content:'React.js Frontend Developer Course', year:'Completed after graduation | Duration: 4 months'},
        {id:2, title:'Bachelor of Engineering (B.E.) in Mechanical Engineering', content:'J.K.K.N. College of Engineering and Technology', year:'2019 – 2023 | CGPA: 8.1'},
        {id:3, title:'Higher Secondary Certificate (HSC) – Maths Computer Group', content:'Government Boys Higher Secondary School, Komarapalayam', year:'Year of Completion: 2019'},
    ],

    skills: [
        {'id':1,'tagName':'HTML','tag':<FaHtml5 />,'logoColor':'#dc2626'},
        {'id':2,'tagName':'CSS','tag':<IoLogoCss3 />,'logoColor':'#38bdf8'},
        {'id':3,'tagName':'Javascript','tag':<RiJavascriptFill />,'logoColor':'#F0DB4F'},
        // {'id':4,'tagName':'Bootstrap','tag':<FaBootstrap />,'logoColor':'#784abc'},
        {'id':5,'tagName':'Tailwind CSS','tag':<RiTailwindCssFill  />,'logoColor':'#16becb'},
        {'id':7,'tagName':'React js','tag':<FaReact />,'logoColor':'#61DBFB'},
        {'id':8,'tagName':'Redux','tag':<TbBrandRedux />,'logoColor':'#764abc'},
        {'id':9,'tagName':'python','tag':<FaPython />,'logoColor':'#4B8BBE'},
        {'id':10,'tagName':'Django','tag':<SiDjango />,'logoColor':'#15803d'},
        // {'id':11,'tagName':'PHP','tag':<FaPhp />,'logoColor':'#484C89'},
        // {'id':12,'tagName':'MySql','tag':<SiMysql />,'logoColor':'#00758f'},
        {'id':13,'tagName':'Postgresql ','tag':<BiLogoPostgresql />,'logoColor':'#336791'},
    ],

    experience:[
        {id:1, title:'Full Stack Developer',designation:'Junior Associate', company:'AV7 SCM | Duration: 1+ Years', content:'Worked as a Full Stack Developer, specializing in React JS and Django.', subContent: [{title: 'FrontEnd', content:'Enhanced code readability and reuse by creating custom reusable components in React, reducing duplication by 40% across modules. Utilized React Hooks and Redux for efficient state management, improving UI responsiveness and consistency. Developed user-facing interfaces using React.js and Tailwind CSS, contributing to smooth workflows across internal tools and client-facing platforms.'}, {title: 'BackEnd', content:'Boosted API performance by optimizing data handling and logic using Django models, resulting in faster response times. Used PostgreSQL alongside Django ORM for managing structured data with moderate complexity. Collaborated on backend modules for visitor management, logistics, and budgeting, supporting business operations through well-structured APIs. Actively involved in version control, feature deployment, and debugging using Git within an agile team environment.'}]}
    ]
}

export const projects = [
    {id:1,title:'front-end project - ecommerce site',content:"Developed a fully functional e-commerce website using React.js, Implemented a shopping cart with add, remove, and update functionalities, along with user authentication. Used React Router for smooth navigation and CSS for a responsive design. Managed state efficiently with React hooks and optimized performance. This project enhanced my understanding of component-based architecture, state management, and UI responsiveness in React.", language:'react js', deployLink:'https://dhanasekar-ecommerce.netlify.app/', githubLink:'https://github.com/dhanasekar-developer/ecommerce-site', video: project_1, active:true},
    {id:2,title:'fullstack project - movie booking site',content:"Built a full-stack movie booking website using HTML, CSS, and JavaScript for the front end, with Node.js and Express.js handling the backend and MongoDB for database storage. The platform allows users to select showtimes, and book tickets seamlessly. Implemented user authentication for secure login and designed a responsive UI for smooth user experience. This project enhanced my expertise in backend development, database management, and integrating front-end with a dynamic server-side application.", language:'HTML, CSS, JS, Node Js, Express Js, MongoDB', deployLink:'https://dhanasekar-movie-booking-site.netlify.app/', githubLink:'https://github.com/dhanasekar-developer/movie-booking-site', video: project_2, active:false},
]

export const contactField = [
    {'id':'userName','title':'Name','colSpan':1,'fieldType':'text', 'max_length': 20},
    {'id':'companyName','title':'Company Name','colSpan':1,'fieldType':'text', 'max_length': 50},
    {'id':'email','title':'Email','colSpan':1,'fieldType':'text', 'max_length': 30},
    {'id':'mobileNo','title':'Mobile No','colSpan':1,'fieldType':'number', 'max_length': 10},
    {'id':'subject','title':'Subject','colSpan':2,'fieldType':'text', 'max_length': 100},
    {'id':'content','title':'Content','colSpan':2,'fieldType':'textarea', 'max_length': 300},
]
