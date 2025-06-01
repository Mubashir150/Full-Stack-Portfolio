import {motion} from "framer-motion"
export default function Contact() {
    return <motion.section id="contact" initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}>
        <div className="contact-container">
            <h2>Let's Work Together</h2>

            <p>
                I'm always open to new opportunities and collaborations. Whether you have a question, a project, or just want to say hi, feel free to reach out!
            </p>

            <div id="icon">
                <li>
                    <a target="blank" href="mailto:mubashirijaz10@gmail.com">
                        <img src="gmail-logo-on-transparent-white-background-free-vector.jpg" alt="" />
                    </a>
                </li>
                <li >
                    <a target="blank" href="http://www.linkedin.com/in/mubashir-ijaz-9834492bb">
                        <img src="hd-vector-flat-linkedin-in-round-icon-png-701751695046390m4phkuuiqm.png" alt="" />
                    </a>
                </li>
                <li>
                    <a target="blank" href="https://x.com/Mubashi83416034">
                        <img src="5ca98c73b2bb7a02bf8350933c7ca443.jpg" alt="" />
                    </a>
                </li>
            </div>
        </div>
    </motion.section>
}