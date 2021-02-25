const initialState = {
    inbox: {
        title: 'Inbox',
        list: [
            {
                content: 'Test task 1',
                checked: false
            },
            {
                content: 'Test task 2',
                checked: true
            }
        ]
    },
    today: {
        title: 'Today',
        list: [
            
        ]
    },
    upcoming: {
        title: 'Upcoming',
        list: [
            
        ]
    }
}

export function mainProjectsReducer(state = initialState, action) {
    let res;
    switch(action.type) {
        case 'DELETE_PROJECT':
            res = {...state};
            delete res[action.payload.path];
            return res;

        case 'ADD_TODO_MAIN':
            res = {...state};
            res[action.payload.path].list.push({
                content: 'Click to edit',
                checked: false
            });
            return res;

        case 'CHANGE_TODO_MAIN':
            res = {...state};
            res[action.payload.path].list[action.payload.id] = action.payload.data;
            return res;

        case 'DELETE_TODO_MAIN':
            res = {...state};
            delete res[action.payload.path].list[action.payload.id];
            return res;

        default:
            return state;
    }
}