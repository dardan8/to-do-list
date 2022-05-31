import React from "react";

const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => {

//Functions
const inputTextHandler = (e) => {
    setInputText(e.target.value);
};

const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
        ...todos,
        {text: inputText, completed: false, id: Math.random() * 1000}
    ]);
    setInputText("");
};

//Setting state based on selection 
const statusHandler = (e) => {
    setStatus(e.target.value);
}

    return (
        <form>
        <input
        placeholder="What are you working on?"
        value={inputText}
        onChange={inputTextHandler}
        type="text" 
        />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo" onChange={statusHandler}>
            <option value="all">View All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    )
}

export default Form;