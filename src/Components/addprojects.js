import React, {
    Component
} from 'react';
import uuid from 'uuid'

class AddProject extends Component {
    constructor() {
        super()
        this.state = {
            newProject: {}
        }
    }
    static defaultProps = {
        categories: ['web design', 'mobile design', 'android design']
    }
    handleSubmit(e) {
        e.preventDefault();
        if (this.refs.title.value === '') {
            alert('title is required');
        } else {
            this.setState({
                newProject: {
                    id: uuid.v4(),
                    title: this.refs.title.value,
                    category: this.refs.category.value
                }
            }, function() {
                this.props.addProject(this.state.newProject)
            })
        }
    }
    render() {
        let categoryOptions = this.props.categories.map(category => {
            return <option key = { category }
            value = { category } > { category } <
                /option>

        });

        return ( < div > < br / >
            <
            h3 > Add Projects < /h3> < br / >
            <
            form onSubmit = { this.handleSubmit.bind(this) } > < br / >
            <
            div > < br / >
            <
            label > Title < /label> < br / >
            <
            input type = "text"
            ref = "title" / > < br / >
            <
            /div> < br / >


            <
            div > < br / >
            <
            label > Category < /label>< br / >
            <
            select ref = "category" > {
                categoryOptions
            } < /select> < br / >
            <
            /div> < br / >
            <
            input type = 'submit'
            value = 'Submit' / >
            <
            /form > < br / >
            <
            /div>);



        }

    }

    export default AddProject;