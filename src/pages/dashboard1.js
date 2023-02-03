import axios from "axios"
import styled from "styled-components"
import Header from "../componets/dashboard1/Header"
import MainChartSection from "../componets/dashboard1/MainChartSection"
import StatusRow from "../componets/dashboard1/StatusRow"

const Dashboard1Block = styled.div`
    height: calc(100vh - 64px);
`

const Dashboard1Body = styled.main`
    padding: 16px;
    background-color: #F7F7F7;
    width: 100%;
    height: calc(100% - 70px);
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export default function Dashboard1({list}){
    return(
        <Dashboard1Block>
            <Header list={list} />
            <Dashboard1Body>
                <StatusRow />
                <MainChartSection />
            </Dashboard1Body>
        </Dashboard1Block>
    )
}
export async function getServerSideProps() {
    const apiUrl = process.env.API_BASE_URL;
    const res = await axios.get(`${apiUrl}/user-list`);
    const data = res.data;

    return { props: { list: data } }
}