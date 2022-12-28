import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import styled from 'styled-components'
import "react-datepicker/dist/react-datepicker.css";

const ScheduleFormBlock = styled.form`
    position: absolute;
    left: 0;
    right: 0;
    background-color: #EFEFF4;
    padding-bottom: 16px;
`
const ScheduleFormHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 8px;
    border-bottom: 1px solid #e3e3e3;
    button{
        background-color: transparent;
        border: none;
        outline: none;
        color: #35BCB2;
        cursor: pointer;
    }
    button:hover{
        opacity: 0.7;
    }
`
const Row = styled.div`
    padding: 8px 14px;
    display: flex;
    align-items: center;
    background-color: #fff;
    border-bottom: 1px solid #e3e3e3;
    h5{
        margin-right: 16px;
    }
    input{
        outline: none;
        border: none;
        background-color: transparent;
        padding: 4px;
        font-size: 0.875rem;
        flex: 1;
    }
`
const DateBox = styled.div`
    padding: 8px 14px;
    display: flex;
    align-items: center;
    background-color: #fff;
    h5{
        margin-right: 8px;
    }

`
const ScheduleForm = ({open, setOpen}) => {
    const [title, setTitle] = useState("New event");
    const [startDate, setStartDate] = useState(new Date());
    const saveSchedule = (e)=>{
        e.preventDefault()
        const data = {
            title,
        }
        console.log(data);
        setTitle("")
    }
  return (
    <ScheduleFormBlock onSubmit={saveSchedule}>
        <ScheduleFormHeader>
            <button onClick={()=>setOpen(!open)}>Cancel</button>
            <h4>New event</h4>
            <button>Add</button>
        </ScheduleFormHeader>
        <Row>
            <h5>Title</h5>
            <input type={"text"} value={title} onChange={e=>setTitle(e.target.value)} />
        </Row>
        
        <Row>
            <h5>Date</h5>
            <ReactDatePicker dateFormat="yyyy-MM-dd" selected={startDate} onChange={(date) => setStartDate(date)} />
        </Row>
        <Row>
            <h5>Color</h5>
            
        </Row>
    </ScheduleFormBlock>
  )
}

export default ScheduleForm