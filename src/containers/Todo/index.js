import React, { useState } from 'react';

import { changeTodo, deleteTodo } from '../../actions/ProjectActions';

import { connect } from 'react-redux';

import './styles.sass';


const Todo = props => {
    const onInput = (event) => {
        event.target.style.height = "1em";
        event.target.style.height = (event.target.scrollHeight) + "px";
        setText(event.target.value);
        props.changeTodo(props.path, props.id, {
            content: text,
            checked
        });
    }

    const onChange = (event) => {
        setChecked(event.target.checked);
        props.changeTodo(props.path, props.id, {
            content: text,
            checked: event.target.checked
        });
    }

    const onDelete = event => {
        props.deleteTodo(props.path, props.id);
    }

    const [checked, setChecked] = useState(props.data.checked);
    const [text, setText] = useState(props.data.content);

    return (
        <div className="todo">
            <input 
                className="todo__checkbox" 
                type="checkbox" 
                defaultChecked={props.data.checked} 
                onChange={onChange}
            />
            <textarea 
                className={"todo__input" + ' ' + (checked ? 'todo__input_checked' : '')} 
                type="text" 
                defaultValue={props.data.content} 
                rows={1}
                onInput={onInput}
                onMouseMove={onInput}
            />
            <button 
                className="todo__delete-btn"
                onClick={onDelete}
            >
                <img 
                    src="/icons/trash.svg" 
                    alt="icon" 
                    className="todo__icon"
                />
            </button>
        </div>
    )
}

const mapStateToProps = store => {
    return store;
}

const mapDispatchToProps = dispatch => ({
   changeTodo: (path, id, data) => dispatch(changeTodo(path, id, data)),
   deleteTodo: (path, id) => dispatch(deleteTodo(path, id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo);
