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

export default function Dashboard1(){
    return(
        <Dashboard1Block>
            <Header />
            <Dashboard1Body>
                <StatusRow />
                <MainChartSection />
            </Dashboard1Body>
        </Dashboard1Block>
    )
}