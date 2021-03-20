import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { addNotif, removeNotif } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const createNew = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    e.target.anecdote.value = ''
    console.log('added', content )
    dispatch(createAnecdote(content))
    dispatch(addNotif(content))
    setTimeout(() => {
      dispatch(removeNotif())}, 5000 )

  }
  return (
      <form onSubmit={createNew}>
        <div><input name="anecdote" /></div>
        <button type="submit">create</button>
      </form>
    
  )
}

export default AnecdoteForm
