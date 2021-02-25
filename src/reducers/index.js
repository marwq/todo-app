import { combineReducers } from 'redux';
import { mainProjectsReducer } from './mainProjects';
import { projectsReducer } from './projects';

export const rootReducer = combineReducers({
    mainProjects: mainProjectsReducer,
    projects: projectsReducer
});