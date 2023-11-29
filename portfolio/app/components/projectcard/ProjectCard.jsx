import Link from 'next/link'
import './ProjectCard.scss'

export default function ProjectCard ({ title, info, image, githubLink }) {

  return (
    <article className="project-card">
      
        <img src={image} alt={`Image on landing-page for project ${title}`} className='project-card__image' />
      
      <h2 className='project-card__title'>{title}</h2>
      <div className='project-card__line'></div>
      <p className='project-card__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias repellendus repudiandae odio, expedita obcaecati iste. </p>
      <a href={githubLink} className='project-card__button' target="_blank" rel="noopener noreferrer">
          Utforska på GitHub
        </a>
      </article>
  ) 
}