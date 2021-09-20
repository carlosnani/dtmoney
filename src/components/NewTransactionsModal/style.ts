import styled from "styled-components";
import {darken, transparentize} from 'polished'

export const Container = styled.form`
    h2 { 
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;        
    }
    input { 
       width: 100%;
       height: 4rem;
       padding: 0 1.5rem; 
       border-radius: 0.25rem;
       
       border: 1px solid #d7d7d7;
       background-color: #e7e9ee;

       font-weight: 1rem;
       font-size: 1rem;

       &::placeholder {
           color: var(--text-body);
       }

       & + input {
           margin-top: 1rem;
       }
    }
    button.submit {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);         
        color: #fff;
        border-radius: 0.25rem;
        font-size: 1rem;
        margin-top: 1.5rem;
        border: none;
        
        transition: filter 0.2s;
        font-weight: 600;
        
        &:hover {
            filter: brightness(0.9);
            box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.05);
        }
    }
`
export const TransactionsTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: .5rem;
`;

interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors = {
    green: "#33CC95",
    red: "#E52E4D"
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    background: ${(props) => props.isActive 
    ? transparentize( 0.9 , colors[props.activeColor])
    : 'transparent'};

    display: flex;
    justify-content: center;
    align-items: center;

    transition: border-color 0.5s;

    &:hover {
        border-color: ${darken(0.1, '#d7d7d7')};
    }
   
    img {
        width: 1.25rem;
        height: 1.25rem;
    }

    span {
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--text-title);
    }
`
 