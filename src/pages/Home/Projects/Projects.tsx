import { projectsData } from './projectsData';
import css from './Projects.module.css';

export default function Projects() {
  return (
      <section id="projects" className={css.wrapper}>
        <h2 className={css.heading}>Projects</h2>
        <div className={css.grid}>
          {projectsData.map((project) => (
              <div key={project.title} className={css.card}>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <div className={css.imageWrapper}>
                          <img
                              src={project.preview}
                              alt={`${project.title} preview`}
                              className={css.image}
                          />
                      </div>
                      <h3 className={css.title}>{project.title}</h3>
                  </a>
                <p className={css.description}>{project.description}</p>
                <div className={css.tech}>
                  {project.techStack.map((tech) => (
                      <span key={tech}>{tech}</span>
                  ))}
                </div>
                <a
                    className={css.link}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </div>
          ))}
        </div>
      </section>
  );
}
