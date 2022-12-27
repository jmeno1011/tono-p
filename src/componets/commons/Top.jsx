import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const HeaderBlcok = styled.header`
    height: 64px;
    padding: 0 20px;
    background-color: #35BCB2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
        color: #fff;
        font-size: 1.25rem;
        font-weight: 500;
    }
`
const Button = styled.button`
  padding: 8px 12px;
  border-radius: 8px;
  outline: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  background-color: #fff;
  &{
   margin-right: 8px;
  }
`

const Top = () => {
  return (
    <HeaderBlcok>
      <Link href={"/"}>
        <a>
          <h1>tono-p</h1>
        </a>
      </Link>
      <div>
        <Button>로그인</Button>
        <Button>회원가입</Button>
      </div>
    </HeaderBlcok>
  )
}

export default Top