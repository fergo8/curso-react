import styled from "styled-components"
import Margin from "../../styles/tools"

const Card = styled.article`
    background-color: var(--color-first);
    color: var(--color-zero);
    text-align: center;
    padding-top: 58px;
    padding-bottom: 40px;
    margin: 0px;
    width: 370px;
    ${Margin.center};
`;

export default Card;