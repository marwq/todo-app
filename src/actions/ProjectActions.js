export function createProject(path, title) {
  return {
    type: 'CREATE_PROJECT',
    payload: {
        path,
        title
    }
  }
}

export function deleteProject(path) {
    return {
        type: 'DELETE_PROJECT',
        payload: {
            path
        }
    }
}

export function addTodo(path) {
    const scnd = !['inbox', 'upcoming', 'today'].includes(path);
    const postfix = scnd ? '_SECONDARY' : '_MAIN';
    return {
        type: 'ADD_TODO' + postfix,
        payload: {
            path
        }
    }
}

export function changeTodo(path, id, data) {
    const scnd = !['inbox', 'upcoming', 'today'].includes(path);
    const postfix = scnd ? '_SECONDARY' : '_MAIN';
    return {
        type: 'CHANGE_TODO' + postfix,
        payload: {
            path,
            id,
            data
        }
    }
}

export function deleteTodo(path, id) {
    const scnd = !['inbox', 'upcoming', 'today'].includes(path);
    const postfix = scnd ? '_SECONDARY' : '_MAIN';
    return {
        type: 'DELETE_TODO' + postfix,
        payload: {
            path,
            id
        }
    }
}