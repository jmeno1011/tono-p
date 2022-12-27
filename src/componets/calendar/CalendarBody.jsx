import React from 'react'
import styled from 'styled-components'

const CalendarBodyBlock = styled.div`
    padding: 8px 16px;
`

const CalendarBodyHeader = styled.header`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    >div{
        display: flex;
        justify-content: end;
    }
`

const CalendarBody = () => {
    const datename = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return (
        <CalendarBodyBlock>
            {/* 달력 헤더 */}
            <CalendarBodyHeader>
                {datename.map(date => (
                    <div key={date}>
                        {date}
                    </div>
                ))}
            </CalendarBodyHeader>
            {/* 달력 바디 */}
        </CalendarBodyBlock>
    )
}

export default CalendarBody