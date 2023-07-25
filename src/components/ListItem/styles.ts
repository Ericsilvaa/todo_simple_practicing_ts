import styled from 'styled-components'

type Props = {
  done?: boolean,
}

export const Container = styled.div<Props>`
background-color: ${props => props.done ? '#b6d3a8' : '#20212C'};
border-radius: 10px;
margin-bottom: 10px;  
align-items: center;
display: flex;

&:hover {
  opacity: 0.6;
}

  input {
    width: 25px;
    height: 25px;
    margin: 0px 10px;
  }

  label {
cursor: pointer;

    font-size: 1.2rem;
    width: 100%;
    height: 100%;
    padding: 10px;

    text-decoration: ${props => props.done ? 'line-through' : 'initial'};
    color: ${props => props.done ? 'green' : '#CCC'};
  }

`
