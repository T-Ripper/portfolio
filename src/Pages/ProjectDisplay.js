import { GitHub } from '@material-ui/icons';
import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import '../styles/ProjectDisplay.css'

const ProjectDisplay = () => {
    const { id } = useParams()
    const project = ProjectList[id]
  return (
    <div className='project'>
    <h1> {project.name} </h1>
    <img src= {project.image} alt='pictures' />
    <p>  <b> skills : </b> {project.skills} 
    </p>
 <a href={project.github} >
 <GitHub/>
 </a>
   
    </div>
  )
}

export default ProjectDisplay