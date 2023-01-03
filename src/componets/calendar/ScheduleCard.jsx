import { Icon } from '@iconify/react'
import dayjs from 'dayjs'
import React, { useState } from 'react'
import styled from 'styled-components'

const ScheduleCardBlock = styled.div`
    padding: 8px;
    margin-bottom: 6px;
    background-color: #fff;
    border-left: 4px solid ${(props) => props.color};
    overflow: hidden;
    >div:first-child{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    h6{
      padding-top: 4px;
      padding-bottom: 4px;
      color: rgba(0,0,0,.6);
    }
    svg{
      padding: 4px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      cursor: pointer;
    }
    svg:hover{
      background-color: #CFF2EF;
    }
    pre{
      padding: 8px 0px;
      font-size: 0.75rem;
    }
`

const ScheduleCard = ({ title, date, description, color }) => {
  const [open, setOpen] = useState(false);
  return (
    <ScheduleCardBlock color={color} className="box-sd">
      <div>
        <div>
          <h5>{title}</h5>
          <h6>{dayjs(date).format("YYYY-MM-DD")}</h6>
        </div>
        <div>
          <Icon icon="material-symbols:keyboard-arrow-down" onClick={() => setOpen(!open)} />
        </div>
      </div>
      {
        open ?
          <div>
            <pre>{description}</pre>
          </div> : null
      }
    </ScheduleCardBlock>
  )
}

export default ScheduleCard