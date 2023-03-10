import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const ProjectCardBlock = styled.div`
    max-width: 250px;
    background-color: #fff;
    color: rgba(0,0,0,.6);
    border-radius: 4px;
    overflow: hidden;
    margin: 8px;
`
const CardImage = styled.div`
  height: 140px;
  position: relative;
`
const CardContent = styled.div`
  padding: 16px;
  h2{
    font-size: 1.5rem;
    color: rgba(0,0,0,.8);
  }
  p{
    font-size: 0.875rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`
const CardBottom = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: end;
  a{
    padding: 4px 8px;
    font-weight: 500;
    color: #35BCB2;
  }
`

const ProjectCard = ({ title, imageSrc, url }) => {
  return (
    <ProjectCardBlock className='box-sd'>
      <CardImage>
        <Image alt="test" src={imageSrc} layout='fill' style={{ objectFit: 'contain' }} />
      </CardImage>
      <CardContent>
        <h2>{title}</h2>
        <p>Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica</p>
      </CardContent>
      <CardBottom>
        <Link href={url}>
          <a>more</a>
        </Link>
      </CardBottom>
    </ProjectCardBlock>
  )
}

export default ProjectCard