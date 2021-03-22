export const setNotif = (message, displayTime = 3000) => {
  return async dispatch => {
    dispatch({
      type: 'SET_NOTIF',
      message
    })
    setTimeout(() => {
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