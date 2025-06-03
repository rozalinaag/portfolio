import css from './ProjectCard.module.css';
import { GithubLogo, LinkSimple } from '@phosphor-icons/react';

interface ProjectCardProps {
  name: string;
  description: string;
  github?: string;
  demo?: string;
  techStack: string[];
  image: string;
}

export default function ProjectCard({
                                      name,
                                      description,
                                      github,
                                      demo,
                                      techStack,
                                      image,
                                    }: ProjectCardProps) {
  return (
      <div className={css.card}>
        <a href={demo} target="_blank" rel="noopener noreferrer" className={css.preview}>
          <img src={image} alt={`${name} preview`} className={css.image} />
        </a>

        <div className={css.content}>
          <div className={css.header}>
            <a href={demo} target="_blank" rel="noopener noreferrer" className={css.title}>
              {name}
            </a>
            <div className={css.links}>
              {github && (
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    <GithubLogo className={css.icon} />
                  </a>
              )}
              {demo && (
                  <a href={demo} target="_blank" rel="noopener noreferrer">
                    <LinkSimple className={css.icon} />
                  </a>
              )}
            </div>
          </div>

          <p className={css.description}>{description}</p>

          <div className={css.stack}>
            {techStack.map((tech, index) => (
                <span key={index} className={css.tech}>
              {tech}
            </span>
            ))}
          </div>
        </div>
      </div>
  );
}
