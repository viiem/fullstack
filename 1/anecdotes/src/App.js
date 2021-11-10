import React, { useState } from 'react'
import ReactDOM from "react-dom";

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0,0,0,0,0,0]);
  let newAnecdote;
  let mostVotes = Math.max(...votes);
  const bestAnecdote = anecdotes[votes.indexOf(mostVotes)];

  const changeAnecdote = () => {
    newAnecdote = () => Math.floor(Math.random() * anecdotes.length);
    setSelected(newAnecdote);
  };

  const voteAnecdote = () => {
    const votesCopy = [...votes];
    votesCopy[selected] += 1;
    setVotes(votesCopy);
  };

  return (
    <div>
      <h3> Anecdote of the day </h3>
      {anecdotes[selected]}
      <br></br> has {votes[selected]} votes
      <br></br>
      <button onClick={changeAnecdote}>new anecdote</button>
      <button onClick={voteAnecdote}>vote</button>
      <h3>Anecdote with most votes</h3>
       {bestAnecdote}
       <br></br> has {mostVotes} votes.
    </div>
  )
};
const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
];

ReactDOM.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} />
  </React.StrictMode>,
  document.getElementById("root")
);

export default App