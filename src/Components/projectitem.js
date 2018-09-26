import React, {
    Component
} from 'react';


class ProjectItem extends Component {
    deleteProject(id) {
        this.props.onDelete(id);

    }
    render() {
        return ( < li className = "Project" > < strong > {
                this.props.project.title
            } < /strong> - {
            this.props.project.category
        } < a href = "a"
        onClick = { this.deleteProject.bind(this) } > Delete < /a>< /li > );
}
}

export default ProjectItem;