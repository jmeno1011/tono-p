import axios from 'axios'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import CalendarComp from '../componets/calendar/CalendarComp'
import ScheduleList from '../componets/calendar/ScheduleList'

const CalendarBlock = styled.div`
    display: flex;
    gap: 16px;
    @media (max-width: 992px) {
        flex-direction: column-reverse;
    }
`

const Calendar = () => {
    const getTh = ()=>{
        axios.get('/api/calendar').then(res=>{
            console.log(res.data);
        })
    }
    useEffect(()=>{
        getTh()
    },[])
    return (
        <CalendarBlock className='layout'>
            <ScheduleList />
            <CalendarComp />
        </CalendarBlock>
    )
}

export default Calendar;
