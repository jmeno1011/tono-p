import React from 'react'
import styled from 'styled-components'
import CalendarComp from '../componets/calendar/CalendarComp'
import ScheduleList from '../componets/calendar/ScheduleList'

const CalendarBlock = styled.div`
    display: flex;
    @media (max-width: 992px) {
        flex-direction: column-reverse;
    }
`

const Calendar = () => {
    return (
        <CalendarBlock className='layout'>
            <ScheduleList />
            <CalendarComp />
        </CalendarBlock>
    )
}

export default Calendar