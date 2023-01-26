import styled from 'styled-components'
import ProjectCard from "../componets/commons/ProjectCard";

const ProjectBlock = styled.div`
  display: flexbox;
  flex-wrap: wrap;
  padding: 0 32px;
`

export default function HomePage() {
  return (
    <div className="Home-page">
      <ProjectBlock>
        {/* TODO ProjectCard 컴포넌트에 props로 description을 넘겨줘서 각각 내용 다르게 하기 */}
        <ProjectCard title={"Pokemon"} imageSrc={"/pokemon.webp"} url={"/pokemon"} />
        <ProjectCard title={"Calendar"} imageSrc={"/calendar_snapshot.webp"} url={"/calendar"} />
        <ProjectCard title={"Dashboard1"} imageSrc={"/test.jpg"} url={"/dashboard1"} />
        <ProjectCard title={"Lizard"} imageSrc={"/test.jpg"} url={"/"} />
      </ProjectBlock>
    </div>
  );
}
