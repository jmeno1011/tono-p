import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const HeaderBlcok = styled.header`
    height: 64px;
    padding: 0 20px;
    background-color: #35BCB2;
    display: flex;
    align-items: center;
    h1{
        color: #fff;
        font-size: 1.25rem;
        font-weight: 500;
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
    </HeaderBlcok>
  )
}

export default Top