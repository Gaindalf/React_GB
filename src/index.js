import React from 'react';
import ReactDOM from 'react-dom';

class ClassExample extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello Class</h1>
            </div>);
    }
}
const Example = () => {
    return (
        <div>
            <h1>Hello React</h1>
            <ClassExample />
        </div>);
}

ReactDOM.render(<Example />, document.getElementById('root'));