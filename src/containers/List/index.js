import React, { Component, PropTypes } from 'react';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux'

import { deleteProject, addTodo } from '../../actions/ProjectActions'

import './style.sass';

import Todo from '../Todo';


const List = (props) => {
    const history = useHistory();
    const projectPath = props.match.params.list;
    let project;
    let secondary_project = false;

    if (props.mainProjects[projectPath] !== undefined) {
        project = props.mainProjects[projectPath];
    } else if (props.projects[projectPath] !== undefined) {
        project = props.projects[projectPath];
        secondary_project = true;
    } else {
        project = {
            title: 'Not found',
            list: [
                {
                    content: 'Сделать test',
                    checked: true
                }
            ]
        };
        history.push("/inbox");
    }

    const onDelete = () => {
        history.push("/inbox");
        props.deleteProject(projectPath);
    }

    const onAdd = () => {
        props.addTodo(projectPath);
    }

    return (
        <div className="list">
            <div className="list__header">
                <div className="list__container">
                    <span className="list__title">
                        {project.title}
                        {secondary_project ? <DeleteBtn onClick={onDelete}/> : ''}
                    </span>
                </div>
            </div>
            <div className="list__todos">
                <div className="list__container">
                    <AddBtn onClick={onAdd}/>
                    {
                        project.list.map((todo, id) => <Todo key={projectPath+id} id={id} data={todo} path={projectPath} />)
                    } 
                </div>
            </div>
        </div>
    );
}

const DeleteBtn = props => {
    return (
        <button 
            className="list__delete-btn"
            onClick={props.onClick}
        >
            <img 
                src="/icons/trash.svg" 
                alt="icon" 
                className="list__icon"
            />
        </button>
    )
}

const AddBtn = props => {
    return (
        <button
            className="list__add-btn"
            onClick={props.onClick}
        >
            New task
            <img src="/icons/plus.svg"/>
        </button>
    )
}

const mapStateToProps = store => {
    return store;
}

const mapDispatchToProps = dispatch => ({
   deleteProject: path => dispatch(deleteProject(path)),
   addTodo: path => dispatch(addTodo(path))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);
