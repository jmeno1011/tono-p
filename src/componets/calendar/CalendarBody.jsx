import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import isBetween from 'dayjs/plugin/isBetween'
import styled from 'styled-components'
dayjs.extend(isBetween)

const CalendarBodyBlock = styled.div`
    background-color: #fff;
`
const CalendarRow = styled.div`
    display: grid;
    grid-template-columns: repeat(7, minmax(50px, 1fr));
    border-bottom: 1px solid #e3e3e3;
    >div:last-child{
        border: none;
    }
`
const Cell = styled.div`
    padding: 8px;
    min-height: 60px;
    border-right: 1px solid #e3e3e3;
    color: ${(props) => (props.color)};
    font-weight: 500;
    font-size: 1em;
    div:first-child{
        display: flex;
        justify-content: flex-end;
        margin-bottom: 4px;
        .now-date{
            color: red;
        }
    }
`
const Schedule = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.625rem;
    position: relative;
    cursor: pointer;
    div>span{
        position: relative;
        display: inline-block;
        padding: 2px 4px;
        opacity: 1;
        font-size: 1em;
        text-overflow: ellipsis;
        z-index: 2;
    }
    
    >span{
        z-index: 1;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${(props) => props.bgColor};
        border-radius: 6px;
        opacity: 0.5;
    }
    &{
        margin-bottom: 4px;
    }
`

const CalendarBody = ({ data, currnetDay }) => {
    const [calendars, setCalendars] = useState([]);
    const monthStartDate = dayjs(currnetDay).startOf("month")
    const monthEndDate = dayjs(currnetDay).endOf("month")
    const weekStartDate = dayjs(monthStartDate).startOf('week')
    const weekEndDate = dayjs(monthEndDate).endOf('week')

    const getAllDate = (mStart, mEnd, wStart, wEnd) => {
        let prevMonth = []
        let curnMonth = []
        let nextMonth = []
        // 달력 첫째날 비교 
        if (wStart.isSame(mStart, "day")) {
            prevMonth = [];
            // console.log("달의 첫째날 같음");
        } else {
            // 달력 첫째날이 현재 달과 다를경우
            // 이전달 일(day) 배열 
            const prev = mStart.diff(wStart, "day");
            prevMonth.push(wStart.format("YYYY-MM-DD"));
            let copyPrev = wStart;
            for (let i = 1; i < prev; i++) {
                copyPrev = copyPrev.add(1, "day")
                prevMonth.push(copyPrev.format("YYYY-MM-DD"))
            }
        }
        // 현재달 일(day) 배열
        let copyCurn = mStart;
        const curnIndex = dayjs(currnetDay).daysInMonth();
        curnMonth.push(mStart.format("YYYY-MM-DD"));
        for (let i = 1; i < curnIndex; i++) {
            copyCurn = copyCurn.add(1, "day");
            curnMonth.push(copyCurn.format("YYYY-MM-DD"))
        }

        // 다음달 일(day) 배열
        if (mEnd.isSame(wEnd, "day")) {
            nextMonth = [];
            // console.log("달의 마지막 같음");
        } else {
            const next = wEnd.diff(mEnd, "day");
            // nextMonth.push(wEnd)
            let copyNext = mEnd
            for (let i = 0; i < next; i++) {
                copyNext = copyNext.add(1, "day");
                nextMonth.push(copyNext.format("YYYY-MM-DD"))
            }
        }
        setCalendars(calendars => calendars.concat(prevMonth, curnMonth, nextMonth))
    }

    useEffect(() => {
        getAllDate(monthStartDate, monthEndDate, weekStartDate, weekEndDate)
        return () => {
            setCalendars([])
        }
    }, [currnetDay])
    
    return (
        <CalendarBodyBlock>
            {/* 달력 바디 */}
            {Array(Math.floor(calendars.length / 7))
                .fill().map((_, index) => (
                    <CalendarRow key={index}>
                        {
                            calendars.slice(7 * index, 7 * (index + 1))
                                .map(date => (
                                    <Cell
                                        key={date}
                                        color={dayjs(date).isBetween(monthStartDate.subtract(1, "day"), monthEndDate) ? "black" : "gray"}
                                    >
                                        <div>
                                            <span className={date === dayjs(Date.now()).format("YYYY-MM-DD") ? 'now-date' : null}>
                                                {dayjs(date).format("D") === "1" ? dayjs(date).format("MMM D") : dayjs(date).format("D")}
                                            </span>
                                        </div>
                                        {
                                            data.filter(el => dayjs(el.startdate).format("YYYY-MM-DD")  === dayjs(date).format("YYYY-MM-DD")).map((value, index) => (
                                                <ScheduleBox
                                                    key={`${index}_${value.title}`}
                                                    content={value}
                                                    title={value.title}
                                                    color={value.color}
                                                />
                                            ))
                                        }

                                    </Cell>
                                ))
                        }
                    </CalendarRow>
                ))}
        </CalendarBodyBlock>
    )
}

export default CalendarBody;

function ScheduleBox({ content, title, color }) {
    const clickedSchedule = ()=>{
        console.log(content);
    }
    return (
        <Schedule bgColor={color} onClick={clickedSchedule}>
            <div>
                <span>{title}</span>
            </div>
            <span></span>
        </Schedule>
    )
}