
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 id="h2-skills">My Skills</h2>
      <p className="sp">
        I specialize in building fast, scalable, and user-centric web applications using the latest technologies. From responsive frontend designs to secure backend APIs — here's what I bring to the table.
      </p>

      <motion.section id="skills">
        <div className="skills-container">

          {/* Frontend Development */}
          <div className="skill-card">
            <h3>Frontend Development</h3>
            <div className="tech-icons">
              <img src="/html.png" alt="HTML" title="HTML" />
              <img src="/images.png" alt="CSS" title="Tailwind CSS" />
              <img src="/js.png" alt="JavaScript" title="JavaScript" />
              <img src="/react-1-logo-png-transparent.png" alt="React" title="React" />
              <img src="/vite.png" alt="Vite" title="Vite" />
            </div>
          </div>

          {/* Backend */}
          <div className="skill-card">
            <h3>Backend Development</h3>
            <div className="tech-icons">
              <img src="/node.png" alt="Node" title="Node" />
              <img src="/express.png" alt="Express" title="express" />
              <img src="/post.png" alt="Postman" title="post" />
              <img src="/mongo.png" alt="Mongodb" title="mongo" />
            </div>
          </div>

          {/* State */}
          <div className="skill-card">
            <h3>State Management</h3>
            <div className="tech-icons">
              <img src="/redux.png" alt="Redux" title="redux" />
              <img src="/zustand.png" alt="Zustand" title="zustand" />
              
            </div>
          </div>

          {/* Deploy*/}
          <div className="skill-card">
            <h3>Deployment</h3>
            <div className="tech-icons">
              <img src="/vercel.png" alt="Vercel" title="vercel" />
              <img src="/netlify.png" alt="Netlify" title="netlify" />
              <img src="/render.jpg" alt="Render" title="render" />
              
            </div>
          </div>

        </div>
      </motion.section>
    </motion.div>
  );
}


