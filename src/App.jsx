import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [words, setWords] = useState('');

  const increment = () => {
    setCount(count + 1);
    setWords(`Counter is Incremented by ${count + 1}`);
    if (count >= 20) {
      setWords('bus krde bhai or kitta check krega');
    }
  };
  const decrement = () => {
    if (count === 0) {
      setCount(0);
      setWords(`the last count is 0`);
    } else {
      setCount(count - 1);
      setWords(`Counter is decremented by ${count}`);
    }
  };
  const reset = () => {
    setCount(0);
    setWords('Counter has been reseted');
  };
  return (
    <>
      <section className="element">
        <h1>Count is : {count}</h1>
        {words && <p>{words}</p>}
        <div>
          <button onClick={() => increment()}>increment</button>
          <button onClick={() => reset()}>reset</button>
          <button onClick={() => decrement()}>decrement</button>
        </div>
      </section>
    </>
  );
}

export default App;
