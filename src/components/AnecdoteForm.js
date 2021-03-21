import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { addNotif, removeNotif } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

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
    const anecdote = await anecdoteService.create(
      anecdoteObject
    )
    console.log(anecdote.content)
    dispatch(createAnecdote(anecdote))
    dispatch(addNotif(anecdote.content))
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
