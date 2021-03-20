export const addNotif = (message) => {
  return {
    type: 'ADD_NOTIF',
    payload: message
  }
}

export const removeNotif = (message) => {
  return {
    type: 'REMOVE_NOTIF',
  }
}


const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'ADD_NOTIF':
      return action.payload
    case 'REMOVE_NOTIF':
      return ''
  }
  return state
}

export default notificationReducer