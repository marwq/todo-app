import React from 'react';
import { connect } from 'react-redux'
import {
    NavLink
} from "react-router-dom";

import './style.sass';

import HouseIcon from './icons/house.svg';
import CalendarIcon from './icons/calendar.svg';
import UpcomingIcon from './icons/upcoming.svg';
import { createProject } from '../../actions/ProjectActions'

import CreateProjectBtn from '../CreateProjectBtn';

const Sidebar = (props) => {
    return (
        <aside className='sidebar'>
            <div className="sidebar__links">
                <NavLink
                    to='/inbox'
                    className='sidebar__link'
                    activeClassName='sidebar__link_active'
                >
                    <img src={HouseIcon} alt="icon" className='sidebar__icon'/>
                    Inbox
                </NavLink>
                <NavLink
                    to='/today'
                    className='sidebar__link'
                    activeClassName='sidebar__link_active'
                >
                    <img src={CalendarIcon} alt="icon" className='sidebar__icon'/>
                    Today
                </NavLink>
                <NavLink
                    to='/upcoming'
                    className='sidebar__link'
                    activeClassName='sidebar__link_active'
                >
                    <img src={UpcomingIcon} alt="icon" className='sidebar__icon'/>
                    Upcoming
                </NavLink>
                <div className="sidebar__section-title">Projects</div>
                {
                    Object.entries(props.projects).map(([project_path, project]) => {
                        return <NavLink
                            to={'/' + project_path}
                            className='sidebar__link'
                            activeClassName='sidebar__link_active'
                            key={project_path}
                        >
                            {project.title}
                        </NavLink>
                    })
                }
                <CreateProjectBtn onCreate={props.createProject}/>
            </div>
        </aside>
    )
}

const mapStateToProps = store => {
    return {
        projects: store.projects
    };
}

const mapDispatchToProps = dispatch => ({
   createProject: (path, title) => dispatch(createProject(path, title))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);