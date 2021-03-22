import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotif } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const createNew = async (e) => {
    e.preventDefault()
    const anecdoteObject = {
      content: e.target.anecdote.value,
      votes: 0 
    }

    e.target.anecdote.value = ''
    console.log('added', anecdoteObject )
    
    dispatch(createAnecdote(anecdoteObject))
    dispatch(setNotif(`added ${anecdoteObject.content}`, 5000) )

  }
  return (
      <form onSubmit={createNew}>
        <div><input name="anecdote" /></div>
        <button type="submit">create</button>
      </form>
    
  )
}

export default AnecdoteForm
