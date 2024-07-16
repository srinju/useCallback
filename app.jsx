import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import './App.css'

var a = 1;
function App() { //we use usememo so that the re rendering again dosent happen when we click the counter button

  const [counter,setCounter] = useState(0);
  
  const a = useCallback(() => { //when we wrap the referencially equal function to the useCallback hook then the re rendering of the child component is prohibited
    console.log("hi there !!");
  }, [])
  
  return <div>
    <button onClick={() => { //when we click on the button then the code runs again from the start then the state variable changes and then it renders again (this is a issue) we clear this by using useMEMO
      setCounter(counter + 1);
    }}>counter {counter}</button>

    <Demo a={a} />
  </div>
}

const Demo = memo(function({a}){
  console.log("rerender");
  return <div>
    hi there {a}
  </div>
})

export default App
