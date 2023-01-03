import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';
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
    position: relative;
    h5{
        min-width: 90px;
    }
    input{
        outline: none;
        border: none;
        background-color: transparent;
        padding: 4px;
        font-size: 0.875rem;
        flex: 1;
    }
    textarea{
        outline: none;
        border: none;
        resize: none;
    }
`
const RadioColor = styled.label`
    display: block;
    height: 1.25rem;
    width: 1.25rem;
    position: relative;
    background-color: ${(props) => props.color};
    margin-right: 8px;
    border-radius: 50%;
    cursor: pointer;
    input{
        position: absolute;
        opacity: 0;
        height: 0;
        width: 0;
    }
    span{
        position: absolute;
        top: 0;
        left: 0;
        height: 1.25rem;
        width: 1.25rem;
        background-color: transparent;
        border-radius: 50%;
    }
    & input:checked ~span{
        /* border: 3px solid #2196F3; */
        border: 3px solid #333;
    }
`
const ScheduleForm = ({ open, setOpen, data, setData }) => {
    const [title, setTitle] = useState("New event");
    const [description, setDescription] = useState("New event description1\nNew event description2");
    const [startDate, setStartDate] = useState(new Date());
    const [color, setColor] = useState("#ca4747");
    const colors = ["#ca4747", "#cc9900", "#339966", "#9e9e9e"];

    const saveSchedule = (e) => {
        e.preventDefault();
        const newData = {
            // id:uuidv4(),
            title,
            description,
            startdate : startDate,
            enddate: startDate,
            color,
            // createdAt: Date.now()
        }
        // console.log(typeof data);
        setData([...data, newData])
        console.log(newData);
        setTitle("")
        setDescription("")
    }

    return (
        <ScheduleFormBlock onSubmit={saveSchedule}>
            <ScheduleFormHeader>
                <button type='button' onClick={() => setOpen(!open)}>Cancel</button>
                <h4>New event</h4>
                <button type='submit'>Add</button>
            </ScheduleFormHeader>
            <Row>
                <h5>Title</h5>
                <input type={"text"} placeholder="..." value={title} onChange={e => setTitle(e.target.value)} />
            </Row>
            <Row>
                <h5>Description</h5>
                <textarea rows={2} placeholder="..." value={description} onChange={e => setDescription(e.target.value)} />
            </Row>
            <Row>
                <h5>Date</h5>
                <ReactDatePicker dateFormat="yyyy-MM-dd" selected={startDate} onChange={(date) => setStartDate(date)} />
            </Row>
            <Row>
                <h5>Color</h5>
                {
                    colors.map((clr) => (
                        <RadioColor key={clr} color={clr}>
                            <input
                                type="radio"
                                name="color"
                                value={clr}
                                checked={color !== undefined ? color === clr : undefined}
                                onChange={e => setColor(e.target.value)} />
                            <span></span>
                        </RadioColor>
                    ))
                }
            </Row>
        </ScheduleFormBlock>
    )
}

export default ScheduleForm;

// ex date-picker start~end
// () => {
//     const [startDate, setStartDate] = useState(new Date());
//     const [endDate, setEndDate] = useState(null);
//     const onChange = (dates) => {
//       const [start, end] = dates;
//       setStartDate(start);
//       setEndDate(end);
//     };
//     return (
//       <DatePicker
//         selected={startDate}
//         onChange={onChange}
//         startDate={startDate}
//         endDate={endDate}
//         selectsRange
//         inline
//       />
//     );
//   };