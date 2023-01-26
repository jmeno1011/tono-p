import styled from "styled-components"

const HeaderBlock = styled.header`
    padding: 16px;
    height: 70px;
    display: flex;
    align-items: center;
`

export default function Header() {
    return (
        <HeaderBlock>
            <form>
                <input type={"text"} placeholder="search... " />
            </form>
        </HeaderBlock>
    )
}