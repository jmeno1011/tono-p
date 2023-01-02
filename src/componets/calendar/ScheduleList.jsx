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

const ScheduleList = () => {
    const [open, setOpen] = useState(false);
    const addEvent = () => {
        console.log("이벤트 추가");
        setOpen(!open)
    }
    return (
        <ScheduleListBlock className='box-sd'>
            <ScheduleAddBlock onClick={addEvent}>
                <Icon icon="material-symbols:add" /><span>New event</span>
            </ScheduleAddBlock>
            {
                open ? <ScheduleForm open={open} setOpen={setOpen} /> : null
            }
            <ScheduleListBox>
                {myData.map((schedule, index) => (
                    <ScheduleCard
                        key={`${index}_${schedule.title}`}
                        title={schedule.title}
                        date={schedule.end}
                        color={schedule.color}
                    />
                ))}
            </ScheduleListBox>
        </ScheduleListBlock>
    )
}

export default ScheduleList

const myData = [{
    title: 'Fixed event',
    start: '2022-12-18T00:00',
    end: '2022-12-19T00:00',
    color: '#9e9e9e',
    editable: false
}, {
    title: 'Drag me',
    start: '2022-12-03T00:00',
    end: '2022-12-05T00:00',
    color: '#cc9900'
}, {
    title: 'Resize me',
    start: '2022-12-24T00:00',
    end: '2022-12-29T00:00',
    color: '#ca4747'
}, {
    title: 'Move me around',
    start: '2022-12-11T00:00',
    end: '2022-12-14T00:00',
    color: '#339966'
}];