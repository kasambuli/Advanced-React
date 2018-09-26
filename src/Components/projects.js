import React, {
    Component
} from 'react';
import ProjectItem from './projectitem';

class Projects extends Component {
    deletethisProject(id) {
        this.props.onDelete(id);
    }
    render() {
        let projectItems;
        if (this.props.projects) {
            projectItems = this.props.projects.map(project => {

                return ( <
                    ProjectItem onDelete = {
                        this.deletethisProject.bind(this)
                    }
                    key = {
                        project.title
                    }
                    project = { project }
                    />
                );
            })
        }
        return ( < div className = "Projects" >
            <
            h3 > Latest Projects < /h3> { projectItems } < /div > );



    }


}
Projects.propTYpes = {
    projects: React
}
export default Projects;