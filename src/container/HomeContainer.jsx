import React from 'react'
import styled from 'styled-components'
import ProjectCard from '../componets/commons/ProjectCard'

const ProjectBlock = styled.div`
  display: flexbox;
  flex-wrap: wrap;
  padding: 0 32px;
`
const HomeContainer = () => {
  return (
    <>
      <div>HomeContainer</div>
      <ProjectBlock>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </ProjectBlock>
    </>
  )
}

export default HomeContainer