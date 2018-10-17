import React from "react"
import {Card, Name, Price, Description, Button} from "./styles"

// JSX
const App = () => (
  <Card>
    <Name>React Course</Name>
    <Price>R$ 25</Price>
    <Description>Professional features to grow</Description>
    <Button>Buy</Button>
  </Card>
)

export default App;