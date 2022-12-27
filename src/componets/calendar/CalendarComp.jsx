import React, { useState } from 'react'
import styled from 'styled-components';
import CalendarHeader from './CalendarHeader';

const CalendarCompBlock = styled.div`
    border-radius: 8px;
`

const CalendarComp = () => {
    const [currnetDay, setCurrnetDay] = useState(new Date);
  return (
    <CalendarCompBlock className='box-sd'>
        <CalendarHeader currnetDay={currnetDay} setCurrnetDay={setCurrnetDay}/>
        <div>body</div>
        <div>bottom</div>
    </CalendarCompBlock>
  )
}

export default CalendarComp