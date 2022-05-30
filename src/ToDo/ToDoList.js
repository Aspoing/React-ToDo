import React, {Component, useState} from "react"

class ToDoList extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            items: []
        }
    }

    onChange(event) {
        this.setState({ userInput: event.target.value })
    }

    addTodo(event) {
        event.preventDefault();
        this.setState({ items: [...this.state.items, this.state.userInput] }, () => console.log(this.state))
    }

    deleteToDo(event) {
        event.preventDefault();
        const array = this.state.items;
        const index = array.indexOf(event.target.value);
        array.splice(index, 1);
        // array.splice(0, 0, item);
        this.setState({ items: array });
    }

    renderToDo() {
        return this.state.items.map((item) => {
            return (
                <div key={item}>
                    {item} | <button onClick={this.deleteToDo.bind(this)}>X</button>
                </div>
            );
        });
    }

    render() {
        return(
            <div>
                <h1>ToDo List</h1>
                <form>
                    <input value={this.state.userInput} type="text" placeholder="Renseigner un item"
                        onChange={this.onChange.bind(this)}
                    />
                    <button onClick={this.addTodo.bind(this)}>Ajouter un item</button>
                </form>
                <div>
                    {this.renderToDo()}
                </div>
            </div>
        );
    }
}

export default ToDoList;