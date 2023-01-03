import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import styled from 'styled-components'
import ScheduleCard from './ScheduleCard'
import ScheduleForm from './ScheduleForm'

const ScheduleListBlock = styled.div`
    min-width: 300px;
    background-color: #F7F7F7;
    border-radius: 8px;
    position: relative;
    z-index: 1;
`

const ScheduleAddBlock = styled.div`
    padding: 16px 8px;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-bottom: 1px solid #e3e3e3;
    svg{
        font-size: 1.5rem;
        margin-right: 8px;
    }
    &:hover{
        background-color: #CFF2EF;
    }
`
const ScheduleListBox = styled.div`
    padding-top: 8px;
    background-color: #fff;
    border-radius: 8px;
    height: calc(100% - 57px);
    overflow: hidden;
`

const ScheduleList = ({data, setData}) => {
    const [open, setOpen] = useState(false);
    const addEvent = () => {
        setOpen(!open)
    }
    return (
        <ScheduleListBlock className='box-sd'>
            <ScheduleAddBlock onClick={addEvent}>
                <Icon icon="material-symbols:add" /><span>New event</span>
            </ScheduleAddBlock>
            {
                open ? <ScheduleForm open={open} setOpen={setOpen} data={data} setData={setData} /> : null
            }
            <ScheduleListBox>
                {data.map((schedule, index) => (
                    <ScheduleCard
                        key={`${index}_${schedule.title}`}
                        title={schedule.title}
                        description={schedule.description}
                        date={schedule.startdate}
                        color={schedule.color}
                    />
                ))}
            </ScheduleListBox>
        </ScheduleListBlock>
    )
}

export default ScheduleList;