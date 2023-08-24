import React from 'react'
import styled from 'styled-components'
import arrow from '../assets/arrow.svg'

function LastSect() {
  return (
    <MainContent>
        <h4>
        Pellentesque suscipit fringilla libero eu.
        </h4>
        <button>
        Get a Demo <span><img src={arrow} alt="arrow" /></span>
        </button>
    </MainContent>
  )
}

const MainContent = styled.div `
padding: 5rem 0;
text-align: center;
margin: 0 auto;
max-width: 800px;
h4{
    font-size: 50px;
}
button{
    cursor: pointer;
    margin: 1rem 0;
    border-radius: 5px;
    border: none;
    background-color: #28CB8B;
    padding: 0.5rem 1.5rem;
    &:hover{
        background: #388E3B;
    }
}
`

export default LastSect