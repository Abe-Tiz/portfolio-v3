import { FaReact, FaLaptopCode, FaMobile, FaNodeJs } from "react-icons/fa";
import { TbGridDots } from 'react-icons/tb'
import { AiFillAppstore } from 'react-icons/ai'
const data = [
  {
    id: 1,
    title: "Frontend Development",
    desc: " The frontend is the user interface and user experience layer of a website or application. It's what users interact with directly.I develop Responsive website and web App using HTML, CSS and Javascript (ReactJs).",
    icon: <FaReact />,
  },
  {
    id: 2,
    title: "Mobile App Development",
    desc: "Building applications specifically designed to run on mobile devices like smartphones and tablets.I develop a cross-plateform mobile app using react native ",
    icon: <FaMobile />,
  },
  {
    id: 3,
    title: "Backend Development",
    desc: "The backend is the server-side of the application. It manages data, business logic, and interacts with databases. It responds to requests from the frontend.I can code  backend  using node js",
    icon: <FaNodeJs />,
  },
  {
    id: 4,
    title: "Mernstack Development",
    desc: "MERN stack is a set of technologies used for building web applications. It stands for MongoDB (database), Express.js (backend framework), React (frontend library), and Node.js (JavaScript runtime).I can develop website using mernstck",
    icon: <FaLaptopCode />,
  },
];

export default data;