import axios from 'axios'
import React, { useEffect, useState } from 'react'
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
    const [data, setData] = useState([{
        title: 'Fixed event',
        start: '2022-12-18',
        end: '2022-12-19',
        color: '#9e9e9e',
        editable: false
    }, {
        title: 'Drag me',
        start: '2022-12-03',
        end: '2022-12-05',
        color: '#cc9900'
    }, {
        title: 'Resize me',
        start: '2022-12-24',
        end: '2022-12-29',
        color: '#ca4747'
    }, {
        title: 'Move me around',
        start: '2022-12-11',
        end: '2022-12-14',
        color: '#339966'
    }])
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
            <ScheduleList data={data} />
            <CalendarComp data={data}/>
        </CalendarBlock>
    )
}

export default Calendar;
