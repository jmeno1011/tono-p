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
        {/* TODO ProjectCard 컴포넌트에 props로 description을 넘겨줘서 각각 내용 다르게 하기 */}
        <ProjectCard title={"Pokemon"} imageSrc={"/pokemon.webp"} url={"/pokemon"}/>
        <ProjectCard title={"Lizard"} imageSrc={"/test.jpg"} url={"/"}/>
        <ProjectCard title={"Lizard"} imageSrc={"/test.jpg"} url={"/"}/>
        <ProjectCard title={"Lizard"} imageSrc={"/test.jpg"} url={"/"}/>
      </ProjectBlock>
    </>
  )
}

export default HomeContainer