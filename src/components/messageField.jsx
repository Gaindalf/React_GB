import React from 'react';
import { Message } from './message';

export class MessageField extends React.Component {
    constructor(props) {
        super(props)
        this.author = ""
        this.message = ""
        this.state
        this.chat = []
        this.items
    }

    setAuthor = (e) => {
        this.author = e.target.value
        this.setState({ author: e.target.value })
    }

    setMessage = (e) => {
        this.message = e.target.value
        //this.setState({ message: e.target.value })
    }

    sendMessage = () => {
        console.log("sendMessage", this.author, this.message)
        // this.chat.push({ author: this.author, message: this.message })
        this.setState({ messages: [...this.state.messages, this.message] });
    }

    state = {
        messages: ["Привет!", "Как дела?"]
    };

    componentDidUpdate() {
        if (this.state.messages.length % 2 === 1) {
            setTimeout(() =>
                this.setState(
                    { messages: [...this.state.messages, this.author + ', Не приставай ко мне, я робот!'] }),
                1000);
        }
    }

    render() {
        const messageElements = this.state.messages.map((text, index) => (
            <Message key={index} text={text} />));

        return <div>
            Ваше имя:
            <input onChange={this.setAuthor} />
            {this.author}
            {messageElements}
            <p>Сообщение:</p>
            <input onChange={this.setMessage} />
            <button onClick={this.sendMessage}>Отправить</button>
        </div>
    }

};