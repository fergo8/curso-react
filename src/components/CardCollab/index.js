import React from "react";
import Card from "./styles"
import Obj from "../../objects";
import Comp from "../../components";

const CardCollab = () => (
    <Card>
        <Obj.Name>React Course</Obj.Name>
        <Obj.Price>R$ 25</Obj.Price>
        <Obj.Description>Professional features for your business to grow.</Obj.Description>
        <Comp.ButtonCollab primary>Buy</Comp.ButtonCollab>
    </Card>
)

export default CardCollab;