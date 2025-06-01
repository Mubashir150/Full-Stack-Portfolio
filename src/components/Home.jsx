import { My } from "../data.js"
import {motion} from "framer-motion"

export default function Home(){

    function handleGithub(){
        window.open('https://github.com/Mubashir150', '_blank');
    }

    function handleResume(){
        const resumeUrl = '/Mubashir Ijaz Full Stack.pdf'
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'Mubashir_Ijaz_Full_Stack.pdf'; // Suggested downloaded filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return <motion.section id="home" initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}>
        <h1>{My.title}</h1>
        <h2>{My.subtitle} </h2>
        <p>{My.description}</p>
        <div>
            <button onClick={handleResume}>Download Resume</button>
            <button onClick={handleGithub}>Visit Github</button>
        </div>
    </motion.section>
}