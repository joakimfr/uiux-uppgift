'use client';
import ProjectCard from "../components/projectcard/ProjectCard"
import projectData from '../../_data/db.json';
import { useState, useEffect } from "react"
import './projects.scss'


export default function Projects () {

  const [projects, setProjects] = useState([]);
  console.log(projects)

  useEffect(() => {
    setProjects(projectData.projects)
}, [])

  return (
    <main className="projects">
      <h1 className="projects__title">Skolprojekt</h1>
      <section className="projects__grid">
      {projects.map((project) => (
          <ProjectCard key={project.id} title={project.title} info={project.info} image={project.image} githubLink={project.githubLink} />
        ))}
      </section>
    </main>
  )
}