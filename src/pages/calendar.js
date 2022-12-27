import React from 'react'
import styled from 'styled-components'
import CalendarComp from '../componets/calendar/CalendarComp'

const CalendarBlock = styled.div`
    display: flex;
`

const Calendar = () => {
    return (
        <CalendarBlock className='layout'>
            <div>Calendar</div>
            <CalendarComp />
        </CalendarBlock>
    )
}

export default Calendar