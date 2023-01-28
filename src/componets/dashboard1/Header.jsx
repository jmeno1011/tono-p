import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"

const HeaderBlock = styled.header`
    padding: 16px;
    height: 70px;
    display: flex;
    align-items: center;
    form{
        width: 300px;
        position: relative;
    }
`
const InputBox = styled.div`
    border: 1px solid rgba(0,0,0,.1);
    position: relative;
    input{
        padding: 4px 8px;
        font-size: 1rem;
        /* width: 200px; */
        width: 100%;
        outline: none;
        border: none;
    }
    span{
        position: absolute;
        right: 8px;
        font-size: 1.25rem;
        font-weight: 600;
    }
`


const ListBox = styled.div`
    position: absolute;
    top: 30px;
    padding: 12px 8px 8px 8px;
    border: 1px solid rgba(0,0,0,.1);
    border-top: none;
    width: 300px;
    background-color: white;
    z-index: 10;
`

const ListItem = styled.div`
    padding: 4px;
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
    border-bottom: 1px solid silver;
    cursor: pointer;
    text-align: left;
    font-size: 1rem;
    background-color: white;
`

const list = [
    { id: 1, name: "tono", age: 31 },
    { id: 2, name: "mung", age: 30 },
    { id: 3, name: "kamn", age: 29 },
    { id: 4, name: "tomato", age: 31 },
    { id: 5, name: "tarlia", age: 31 },
    { id: 6, name: "titan", age: 31 }
];

export default function Header() {
    const [userList, setUserList] = useState([]);
    const [inputText, setInputText] = useState("");
    const [isFocus, setIsFocus] = useState(false);
    const [keyIndex, setKeyIndex] = useState(0);
    const [sample, setSample] = useState("");

    const onSubmitHandle = (e, name) => {
        e.preventDefault();
        console.log(name);
        if (name) {
            setSample(name);
        } else {
            setSample(e.target.dataset.name);
        }
    };

    // input tag function
    const onChangeInput = (e) => {
        setInputText(e.target.value);
    };
    const onClickInput = () => {
        setIsFocus(!isFocus);
        setKeyIndex(0);
    }
    const onKeyDownInput = (e) => {
        const copy = list.filter((value) => value.name.includes(e.target.value));
        const indexLen = list.filter((value) => value.name.includes(e.target.value)).length;

        if (e.keyCode === 40) {
            if (indexLen !== keyIndex) {
                setKeyIndex(keyIndex + 1);
                const selectedName = copy?.filter(
                    (value) => value.id === keyIndex + 1
                )[0].name;
                if (e.keyCode === 13) {
                    onSubmitHandle(e, selectedName);
                }
            }
        } else if (e.keyCode === 40 && keyIndex === 0) {
            //down
            console.log("down");
            setIsFocus(true);
        } else if (e.keyCode === 38) {
            if (keyIndex !== 0) {
                setKeyIndex(keyIndex - 1);
            } else {
                setIsFocus(false);
            }
        }
    }

    const onClickSubmitListItems = (e, onSubmitHandle) => {
        setInputText(e.target.dataset.name);
        onSubmitHandle(e);
    };
    const onMouseOverListItems = (id) => {
        setKeyIndex(id);
    };
    const getUserList = ()=>{
        axios.get('/api/user-list')
        .then(res => {
            setUserList(res.data.map(user=>({
                code : user.ep,
                name : user.name
            }))) 
        })
    }
    console.log(userList);
    useEffect(()=>{
        getUserList()
    },[])
    // TODO : list보여주븐 부분 다른 컴포넌트 useEffect 사용할 것
    return (
        <HeaderBlock>
            <form onSubmit={onSubmitHandle}>
                <InputBox>
                    <input
                        type={"text"}
                        placeholder="search... "
                        value={inputText}
                        onChange={onChangeInput}
                        onClick={onClickInput}
                        onKeyDown={onKeyDownInput}
                    />
                    {isFocus ? (
                        <span>&uarr;</span>
                    ) : (
                        <span>&darr;</span>
                    )}
                </InputBox>
                {/* list */}
                {isFocus || keyIndex !== 0 ? (
                    <ListBox>
                        {list
                            .filter((value) => value.name.includes(inputText))
                            .map((user) => (
                                // background-color: antiquewhite;
                                <ListItem
                                    key={user.id}
                                    data-name={user.name}
                                    style={{
                                        backgroundColor:
                                            user.id === keyIndex ? "antiquewhite" : "transparent"
                                    }}
                                    onClick={(e) => onClickSubmitListItems(e, onSubmitHandle)}
                                    onMouseOver={() => onMouseOverListItems(user.id)}
                                >
                                    {user.name}
                                </ListItem>
                            ))}
                    </ListBox>
                ) : null}
            </form>
            <h3>show sample : {sample} / index: {keyIndex}</h3>
        </HeaderBlock>
    )
}