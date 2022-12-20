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
      <ProjectBlock>
        <ProjectCard title={"Pokemon"} imageSrc={"/pokemon.webp"} url={"/pokemon"}/>
        <ProjectCard title={"Lizard"} imageSrc={"/test.jpg"} url={"/"}/>
        <ProjectCard title={"Lizard"} imageSrc={"/test.jpg"} url={"/"}/>
        <ProjectCard title={"Lizard"} imageSrc={"/test.jpg"} url={"/"}/>
      </ProjectBlock>
    </>
  )
}

export default HomeContainer