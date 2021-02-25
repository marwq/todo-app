import React, { useState } from 'react';

import './styles.sass';


const CreateProjectBtn = props => {
    const [focus, setFocus] = useState(false);

    const onFocused = () => {
        if (focus) {setFocus(false)} else {setFocus(true)}
    }
    
    const onSubmit = (path, title) => {
        props.onCreate(path, title);
        setFocus(false);
    }

    return (
        <React.Fragment>
            <button className="create-project-btn" onClick={onFocused}>
                New Project
            </button>
            {
                focus ? <ModalCreateProject onSubmit={onSubmit}/> : null
            }
        </React.Fragment>
    );
};

const ModalCreateProject = props => {
    const [path, setPath] = useState('');
    const [title, setTitle] = useState('');

    const [error, setError] = useState('');

    const handlePath = event => {
        setPath(event.target.value);
    }

    const handleTitle = event => {
        setTitle(event.target.value);
    }

    const onSubmit = () => {
        if (path != "" && title != "") {
            props.onSubmit(path, title);
        } else {
            setError("Fill in all the fields");
        }
    }
    return (
        <React.Fragment>
            <input 
                type="text" 
                className="create-project-btn__input" 
                placeholder="Enter path"
                onChange={handlePath}
            />
            <input 
                type="text" 
                className="create-project-btn__input" 
                placeholder="Enter title"
                onChange={handleTitle}
            />
            <button 
                className="create-project-btn__btn" 
                onClick={onSubmit}
            >
                Create
            </button>
            <span className="create-project-btn__error">{error}</span>
        </React.Fragment>
    )
}

export default CreateProjectBtn;
