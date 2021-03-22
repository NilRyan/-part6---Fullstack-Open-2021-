import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotif } from '../reducers/notificationReducer'

const Anecdote = ({anecdote, handleVote}) => {
  return(
    <li>
      <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => handleVote(anecdote.id)}>vote</button>
      </div>
    </li>
   
  )
}
const AnecdoteList = () => {
  const anecdotes = useSelector(state => 
    state.anecdotes.filter((anecdotes) => anecdotes.content.includes(state.filter)))
  const dispatch = useDispatch()

  const handleVote = (id) => {
    console.log('vote', id)
    const anecdote = anecdotes.find((anecdote) => anecdote.id === id)
    dispatch(vote(id))
    dispatch(setNotif(`you voted ${anecdote.content}`, 5000))
  }
  return (
    <div>
      { anecdotes
        .sort((a, b) => b.votes - a.votes)
        .map(anecdote =>
        <Anecdote key={anecdote.id} anecdote={anecdote} handleVote ={handleVote} />
      )}
    </div>
    
  )
}

export default AnecdoteList
