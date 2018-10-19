import React from "react";
import Card from "./styles"
import Obj from "../../objects";
import Comp from "../../components";

const CardCollab = props => (
    <Card>
        <Obj.Name>{props.name}</Obj.Name>
        <Obj.Price>
            <small>c$</small>
            {props.price}
        </Obj.Price>
        <Obj.Description>{props.description}</Obj.Description>
        <Comp.ButtonCollab primary>Comprar</Comp.ButtonCollab>
    </Card>
)

export default CardCollab;