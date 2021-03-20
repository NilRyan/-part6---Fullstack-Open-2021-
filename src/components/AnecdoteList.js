import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'

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
  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()

  const handleVote = (id) => {
    console.log('vote', id)
    dispatch(vote(id))
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
