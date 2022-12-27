import React, { useState } from 'react'
import styled from 'styled-components';
import CalendarBody from './CalendarBody';
import CalendarHeader from './CalendarHeader';

const CalendarCompBlock = styled.div`
    border-radius: 8px;
    width: 100%;
    overflow: hidden;
    background-color: #F7F7F7;
`
const CalendarBodyHeader = styled.header`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    padding-bottom: 8px;
    border-bottom: 1px solid silver;
    >div{
        display: flex;
        justify-content: end;
        padding-right: 8px;
    }
`
const CalendarComp = () => {
    const [currnetDay, setCurrnetDay] = useState(new Date);
    const datename = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <CalendarCompBlock className='box-sd'>
        <CalendarHeader currnetDay={currnetDay} setCurrnetDay={setCurrnetDay}/>
        <CalendarBodyHeader>
                {datename.map(date => (
                    <div key={date}>
                        {date}
                    </div>
                ))}
            </CalendarBodyHeader>
        <CalendarBody currnetDay={currnetDay}/>
    </CalendarCompBlock>
  )
}

export default CalendarComp