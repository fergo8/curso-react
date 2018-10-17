import styled from "styled-components"

const color = "#3b86ff";

export const Card = styled.article`
    font-family: "Open sans", sans-seriff;
    background-color: ${color};
    color: #ffffff;
    text-align: center;
    padding-top: 58px;
    padding-bottom: 40px;
    margin: 0px
`;

export const Name = styled.h1`
    font-size: 28px;
    text-transform: uppercase;
`;

export const Price = styled.h2`

`;

export const Description = styled.p`

`;

export const Button = styled.a`
    display: inline-block;
    width: 120px;
    height: 35px;
    line-height: 35px;
    background-color: #ffffff;
    color: ${color};
    border-radius: 4px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 200ms linear;
    border: 1px solid ${color};

    ${props => props.primary 
        ? `
            &:hover {
                background-color: ${color};
                color: #ffffff;
                border: 1px solid #ffffff;
            }
        `
        : `
            background-color: #cccccc;
            color: #838383;
        `}    
`;