import { Icon } from '@iconify/react'
import dayjs from 'dayjs'
import React from 'react'
import styled from 'styled-components'

const CalendarHeaderBlock = styled.header`
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span, svg{
        font-size: 1.125rem;
        color: #35BCB2;
    }
`
const HeaderRight = styled.div`
    display: flex;
    align-items: center;
`
const Button = styled.button`
    outline: none;
    border: none;
    background-color: transparent;
    padding: 4px 8px;
    display: flex;
    align-items: center;
    cursor: pointer;
`

const CalendarHeader = ({ currnetDay, setCurrnetDay }) => {
    const prevMonth = () => {
        setCurrnetDay(new Date(currnetDay.setMonth(currnetDay.getMonth() - 1)));
    }
    const todayMonth = () => {
        setCurrnetDay(new Date());
    }
    const nextMonth = () => {
        setCurrnetDay(new Date(currnetDay.setMonth(currnetDay.getMonth() + 1)));
    }
    return (
        <CalendarHeaderBlock>
            <div>
                <span>{dayjs(currnetDay).format("MMMM")}</span>{" "}<span>{dayjs(currnetDay).format('YYYY')}</span>
            </div>
            <HeaderRight>
                <Button onClick={prevMonth}><Icon icon="material-symbols:arrow-back-ios-new" /></Button>
                <Button onClick={todayMonth}><span>Today</span></Button>
                <Button onClick={nextMonth}><Icon icon="material-symbols:arrow-forward-ios" /></Button>
            </HeaderRight>
        </CalendarHeaderBlock>
    )
}

export default CalendarHeader