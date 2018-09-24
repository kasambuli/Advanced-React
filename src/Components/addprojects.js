import React, {
    Component
} from 'react';


class AddProject extends Component {
    static defaultProps = {
        categories: ['web design', 'web design', 'web design']
    }
    render() {
        let categoryOptions = this.props.categories.map(category => {
            return <option key = { category }
            value = "category" > { category } <
                /option>

        });

        return ( < div > < br / >
            <
            h3 > Add Projects < /h3> < br / >
            <
            form > < br / >
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
            /form > < br / >
            <
            /div>);



        }

    }

    export default AddProject;