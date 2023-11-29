import './ProjectCard.scss'

export default function ProjectCard ({ title, info }) {

  return (
    <main className="project-card">
      <div className='project-card__image'>IMAGE</div>
      <h2 className='project-card__title'>{title}</h2>
      <div className='project-card__line'></div>
      <p className='project-card__text'>{info}</p>
      <button className='project-card__button'>SE MER</button>
    </main>
  ) 
}