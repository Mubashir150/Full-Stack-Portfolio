
import { motion } from "framer-motion"

export default function About() {
    return (
        <motion.section
            id="about"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="about-container">
                <h2>About</h2>

                <p>
                    Hey there! I'm <span className="highlight">Mubashir Ijaz</span>, a passionate Full Stack Developer focused on building
                    <span className="highlight"> responsive, dynamic, and real-world web applications</span> using modern technologies.
                </p>

                <p>
                    I specialize in <strong>React</strong> for frontend and <strong>Node.js, Express, and MongoDB</strong> for backend. I recently deployed a
                    complete <strong>full-stack e-commerce site</strong> with user authentication, Redux state management, and REST APIs —
                    with the frontend live on <strong>Vercel</strong> and the backend on <strong>Render</strong>.
                </p>

                <p>
                    My focus is on writing clean, maintainable code and delivering fast, interactive web experiences. I’m also exploring <strong>Next.js</strong>
                    to further sharpen my frontend architecture skills.
                </p>

                <p>
                    Whether it's a sleek UI or a scalable backend, I love bringing ideas to life through modern web technologies.
                </p>

                <div className="about-buttons">
                    <a
                        target="blank"
                        href="http://www.linkedin.com/in/mubashir-ijaz-9834492bb"
                        className="btn"
                    >
                        Let's Connect
                    </a>
                </div>
            </div>
        </motion.section>
    );
}

