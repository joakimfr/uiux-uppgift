import ProjectCard from "../components/projectcard/ProjectCard"


import './projects.scss'
export default function Projects () {

 

  return (
    <main className="projects">
      <h2 className="projects__title">Skolprojekt</h2>
      <section className="projects__grid">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      </section>
    </main>
  )
}