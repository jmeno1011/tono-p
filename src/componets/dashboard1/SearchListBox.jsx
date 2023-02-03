import styled from "styled-components"

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

export default function SearchListBox({
    list,
    keyIndex,
    setInputText,
    setIsFocus,
    setKeyIndex,
    onSubmitHandle
}) {
    const onClickSubmitListItems = (e, onSubmitHandle) => {
        setInputText(e.target.dataset.name);
        onSubmitHandle(e);
        setIsFocus(false)
    };
    const onMouseOverListItems = (id) => {
        setKeyIndex(id);
    };
    return (
        <ListBox>
            {
                list?.length ?
                    list.map((user, index) => (
                        <ListItem
                            key={user.ep}
                            data-name={user.name}
                            style={{
                                backgroundColor: index === keyIndex ? "antiquewhite" : "#fff"
                            }}
                            onClick={(e) => onClickSubmitListItems(e, onSubmitHandle)}
                            onMouseOver={() => onMouseOverListItems(index)}
                        >
                            {user.ep} : {user.name}
                        </ListItem>
                    ))
                    : <div>no data</div>
            }
        </ListBox>
    )
}
