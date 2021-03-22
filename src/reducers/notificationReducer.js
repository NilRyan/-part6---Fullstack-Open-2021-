let timeoutID;

export const setNotif = (message, displayTime = 5000) => {
  return async dispatch => {
    clearTimeout(timeoutID)
    dispatch({
      type: 'SET_NOTIF',
      message
    })
    timeoutID = setTimeout(() => {
      dispatch({
        type: 'REMOVE_NOTIF'
      })
    }, displayTime)
  }
} 
const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_NOTIF':
      return action.message
    case 'REMOVE_NOTIF':
      return ''
    default:
      return state
  }
  
}

export default notificationReducer