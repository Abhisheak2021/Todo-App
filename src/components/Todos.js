import React, { useState } from "react"
import { connect } from "react-redux";
import { addTodos, } from "../redux/reducer";

const mapStateToProps = (state) => {
    return {
        todos: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
    };
};

const Todos = (props) => {
    const [todo, setTodo] = useState("");

    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    const add = () => {
        if (todo === "") {
            alert("Input is Empty");
        } else {
            props.addTodo({
                // object/todo code..
                id: Math.floor(Math.random() * 1000),
                item: todo,
                completed: false,
            });
            setTodo("");
        }
    }
    // console.log("props from store", props);
    return (
        <div className="addTodos">
            <input type="text" onChange={(e) => handleChange(e)} className="todo-input" value={todo} />

            <button className="add-btn" onClick={() => add()
            }>Add</button>
            <br></br>

        </div>
    );
}

// We can use connect method to connect this component with redux store
export default connect(mapStateToProps, mapDispatchToProps)(Todos);