function App() {
  const [count, setCount] = React.useState(0);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return (
    <div>
      <p>Vote Respectfully</p>
      <img src='' />
      <p>Current number of likes is {count}</p>
      <hr />
      <button onClick={increaseCount}>Like</button>
      <button onClick={decreaseCount}>DISLIKE</button>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById(
    'app'
  )
);