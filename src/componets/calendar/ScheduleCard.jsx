import { Icon } from '@iconify/react'
import React from 'react'
import styled from 'styled-components'

const ScheduleCardBlock = styled.div`
  padding: 8px;
  margin-bottom: 6px;
  background-color: #fff;
  border-left: 4px solid ${(props) => props.color};
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span{
    font-size: 0.75rem;
    font-weight: 500;
    color: rgba(0,0,0,.6);
  }

  svg{
    cursor: pointer;
    font-size: 1.5rem;
  }
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

const ScheduleCard = ({ title, date, color }) => {
  return (
    <ScheduleCardBlock color={color} className="box-sd">
      <div>
        <h5>{title}</h5>
        <span>{date}</span>
      </div>
      <div>
        <Icon icon="material-symbols:keyboard-arrow-down-rounded" />
      </div>
    </ScheduleCardBlock>
  )
}

export default ScheduleCard