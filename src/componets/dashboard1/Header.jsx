import { useEffect, useState } from "react"
import styled from "styled-components"
import SearchListBox from "./SearchListBox"

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

export default function Header({ list }) {
    const [userList, setUserList] = useState([]);
    const [inputText, setInputText] = useState("");
    const [isFocus, setIsFocus] = useState(false);
    const [keyIndex, setKeyIndex] = useState(-1);
    const [sample, setSample] = useState("");

    const onSubmitHandle = (e, name) => {
        e.preventDefault();
        console.log(name);
        if (name) {
            setSample(name);
        } else {
            setSample(e.target.dataset.name);
        }
        setIsFocus(!isFocus);
        setKeyIndex(-1);
        setInputText("");
    };

    // input tag function
    const onChangeInput = (e) => {
        setInputText(e.target.value);
        setKeyIndex(0);
    };
    const onClickInput = () => {
        if (!inputText && isFocus) {
            setIsFocus(false);
            setKeyIndex(-1);
        } else {
            setIsFocus(true);
            setKeyIndex(0);
        }
    }
    const onKeyDownInput = (e) => {
        // down key
        if (e.keyCode === 40) {
            if (keyIndex === userList.length - 1) {
                setKeyIndex(0)
            } else {
                setIsFocus(true);
                setKeyIndex(keyIndex + 1);
            }
        }

        // up key
        if (e.keyCode === 38) {
            if (keyIndex > -1) {
                setKeyIndex(keyIndex - 1);
            } else if (keyIndex < -2) {
                setKeyIndex(keyIndex - 1);
                setIsFocus(false)
            }
        }

        // enter key
        if (e.keyCode === 13) {
            if (keyIndex === -1) {
                onSubmitHandle(e, e.target.value);
            } else {
                onSubmitHandle(
                    e,
                    userList.find(
                        (value, index) =>
                            index === keyIndex || value.name.includes(e.target.value))
                        .name
                );
            }
        }
    }

    useEffect(() => {
        if (inputText === "") {
            setUserList(list);
        } else {
            setUserList(list.filter(value => value.name.includes(inputText)))
        }
    }, [inputText]);
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
                {!isFocus || keyIndex === -1 ? null : (
                    <SearchListBox
                        list={userList}
                        keyIndex={keyIndex}
                        setInputText={setInputText}
                        setKeyIndex={setKeyIndex}
                        setIsFocus={setIsFocus}
                        onSubmitHandle={onSubmitHandle}
                    />
                )}
            </form>
            <h3>show sample : {sample} / index: {keyIndex}</h3>
        </HeaderBlock>
    )
}

