const initialState = {
    testproject: {
        title: 'Test Project',
        list: [
            {
                content: 'test task in test project',
                checked: true
            }
        ]
    }
}

export function projectsReducer(state = initialState, action) {
    let res;
    switch (action.type) {
        case 'CREATE_PROJECT':
            return { ...state, [action.payload.path]: {
                title: action.payload.title,
                list: [

                ]
            }};

        case 'DELETE_PROJECT':
            res = {...state};
            delete res[action.payload.path];
            return res;

        case 'ADD_TODO_SECONDARY':
            res = {...state};
            res[action.payload.path].list.push({
                content: 'Click to edit',
                checked: false
            });
            return res;

        case 'CHANGE_TODO_SECONDARY':
            res = {...state};
            res[action.payload.path].list[action.payload.id] = action.payload.data;
            return res;

        case 'DELETE_TODO_SECONDARY':
            res = {...state};
            delete res[action.payload.path].list[action.payload.id];
            return res;

        default:
            return state;
    }
}