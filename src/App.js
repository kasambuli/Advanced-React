import React, { Component } from 'react';
import './App.css';
import Projects from './Components/projects';
import AddProject from './Components/addprojects';



class App extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
        }
    }

    componentWillMount() {
        this.setState({
            projects: [{
                    title: "Business Website",
                    category: "web design"
                },
                {
                    title: "Business Website",
                    category: "web design"
                },
                {
                    title: "Business Website",
                    category: "web design"
                }
            ]
        });

    }
    render() {
        return ( < div className = "App" >
            <
            AddProject / >
            My App < Projects projects = { this.state.projects }
            / > < /
            div > );
    }
}

export default App;