import React, { Component } from 'react';
import uuid from 'uuid';
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
                    id: uuid.v4(),
                    title: "Business Website",
                    category: "web design"
                },
                {
                    id: uuid.v4(),
                    title: "School Website",
                    category: "mobile design"
                },
                {
                    id: uuid.v4(),
                    title: "Hospital Website",
                    category: "android design"
                }
            ]
        });
    }
    handleAddProject(project) {
        let projects = this.state.projects;
        projects.push(project);
        this.setState({ projects: projects });
    };
    handledeleteProject(id) {
        let projects = this.state.projects;
        let index = projects.findIndex(x => x.id === id);
        projects.splice(index, 1)
        this.setState({ projects: projects });
    }

    render() {
        return ( < div className = "App" >
            <
            AddProject addProject = { this.handleAddProject.bind(this) }
            / >
            My App < Projects projects = {
                this.state.projects
            }
            onDelete = {
                this.handledeleteProject.bind(this)
            }
            / > < /
            div > );
    }
}

export default App;