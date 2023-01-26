import styled from "styled-components";

const StatusRowBlock = styled.div`
    display: flex;
    background-color: #fff;
    border-radius: 4px;
    overflow: hidden;
    min-width: 500px;
    max-width: 700px;
    border: 1px solid rgba(0, 0, 0, 0.1);;
    >div{
        border-right: 1px solid rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        h5{
            padding: 8px 12px;
            width: 100%;
            min-width: 90px;
            text-align: center;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            background-color: #CFF2EF;
            font-weight: 500;
        }
        h4{
            padding: 8px 12px;
        }
    }
    >div:last-child{
        border-right: 0;
    }
`
export default function StatusRow(){
    return(
        <StatusRowBlock className="box-sd2">
            <div>
                <h5>코드</h5>
                <h4></h4>
            </div>
            <div>
                <h5>이름</h5>
                <h4></h4>
            </div>
            <div>
                <h5>최근 방문일</h5>
                <h4></h4>
            </div>
            <div>
                <h5>나이</h5>
                <h4></h4>
            </div>
            <div>
                <h5>성별</h5>
                <h4></h4>
            </div>
        </StatusRowBlock>
    );
}