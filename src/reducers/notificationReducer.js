const notificationReducer = (state = '', action) => {
  if (action.type === 'NEW_ANECDOTE') {
    const message = action.payload;
    return message; 
  }
  return state
}

export default notificationReducer