import React from 'react'
import styled from 'styled-components'

const ScheduleCardBlock = styled.div`
    padding: 8px;
    margin-bottom: 6px;
    background-color: #fff;
    border-left: 4px solid ${(props)=>props.color};
    overflow: hidden;
`

/*
* 예시 데이터
{
    title: 'Drag me',
    start: '2022-12-03T00:00',
    end: '2022-12-05T00:00',
    color: '#cc9900'
}
*/

const ScheduleCard = ({title, date, color}) => {
  return (
    <ScheduleCardBlock color={color} className="box-sd">
        <h5>{title}</h5>
    </ScheduleCardBlock>
  )
}

export default ScheduleCard