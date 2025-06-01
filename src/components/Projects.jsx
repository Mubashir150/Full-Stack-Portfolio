import Cards from "./Cards"
import {motion} from "framer-motion"


export default function Projects(){
   
    return (<motion.section id="projects" initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}>

        <h2>Full Stack Project</h2>
        <div className="projects-container">
            
            <Cards  title="Elegant Wears" img="1.PNG" description="Elegant Wears is a fully functional full-stack e-commerce application built with the MERN stack (MongoDB, Express.js, React, Node.js). It features product listings, category filtering, user authentication, cart management using Redux, and persistent sessions with cookie-based login. The frontend is styled using Tailwind CSS and deployed on Vercel, while the backend is securely hosted on Render with full CORS and environment configuration."   />
            

        </div>
    </motion.section>)
}