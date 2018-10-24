import React, { Fragment, Component } from "react";
import CardCollab from "./components/CardCollab";

class App extends Component {
    
    state = {
        courses: [
            {
                name: "Curso React",
                price: "180",
                description: "Curso básico de React utilizando styled-components"
            },
            {
                name: "Curso VueJS",
                price: "280",
                description: "Curso de VueJS, um framework mais ou menos equivalente ao React"
            },
            {
                name: "Curso EmberJS",
                price: "380",
                description: "Framework de desenvolvedores hipsters diferentões"
            }
        ]
    }

    render(){
        return (
            <Fragment>
                {this.state.courses.map(course => (
                    <CardCollab {...course} />
                ))}
            </Fragment>
        )
    }
}

export default App;