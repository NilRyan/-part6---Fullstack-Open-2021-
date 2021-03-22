import anecdoteService from '../services/anecdotes'
// action creators

export const vote = (id) => {
  return {
      type: 'VOTE',
      payload: {
        id
      }
  }
}

export const createAnecdote = (anecdoteObject) => {
  return async dispatch => {
    const anecdote = await anecdoteService.create(
      anecdoteObject
    )
    dispatch({
      type: 'NEW_ANECDOTE',
     payload: anecdote})
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}
const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type) {
    case 'VOTE':
      const id = action.payload.id
      const votedAnecdote = state.find((anecdote) => anecdote.id === id);
      votedAnecdote.votes = votedAnecdote.votes + 1;
      return state.map( anecdote => anecdote.id === id ? votedAnecdote : anecdote)

    case 'NEW_ANECDOTE':
      const anecdoteObject = action.payload
      return [...state, anecdoteObject]

    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }

}

export default anecdoteReducer