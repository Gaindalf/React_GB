import React from 'react';
import ReactDOM from 'react-dom';
import { MessageField } from './components/messageField'


class ClassExample extends React.Component {
    render() {
        return (
            <div>
                <h1><MessageField /></h1>
            </div>);
    }
};

ReactDOM.render(<ClassExample />, document.getElementById('root'));