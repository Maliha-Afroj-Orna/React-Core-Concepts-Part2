import './App.css'
import Batsman from './Batsman';
import Counter from './Counter';

function App() {

  // traditional function
  function handleClick () {
    alert ("I am clicked!");
  }

  // arrow function
  const handleClick3 = () => {
    alert("Clicked 3");
  }

  // pass parameter to arrow function
  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
      <section id="center">
        <h1>Get started</h1>

        <Batsman></Batsman>

        <Counter></Counter>

        {/* call handleClick function */}
        <button onClick={handleClick}>Click Me</button>

        {/* direct use function inside onClick */}
        <button onClick={function handleClick2 () {
          alert("Clicked 2!!!")
        }}>Click Me 2</button>

        {/* call handleClick3 arrow function */}
        <button onClick={handleClick3}>Click Me 3</button>

        {/* use arrow function directly inside onClick */}
        <button onClick={() => alert("Clicked 4")}>Click Me 4</button>

        {/* pass parameter to arrow function */}
        <button onClick={() => handleAdd5(10)}>Click Add 5</button>
      </section>
    </>
  )
}

export default App
