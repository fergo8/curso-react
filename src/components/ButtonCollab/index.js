import styled from "styled-components";

const ButtonCollab = styled.a`
    display: inline-block;
    width: 120px;
    height: 35px;
    line-height: 35px;
    background-color: var(--color-zero);
    color: var(--color-first);
    border-radius: var(--radius);
    text-transform: uppercase;
    cursor: pointer;
    transition: all 200ms linear;
    border: 1px solid var(--color-first);

    ${props => props.primary
        ? `
            &:hover {
                background-color: var(--color-first);
                color: var(--color-zero);
                border: 1px solid var(--color-zero);
            }
        `
        : `
            background-color: #cccccc;
            color: #838383;
        `}    
`;

export default ButtonCollab;