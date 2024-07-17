import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import './App.css'


function App() { 
  const [count,setCount] = useState(0);

  const logSomething = useCallback(() => { //now after using usecallback we see that when we click the counter button it dosent rerender anything and only when we click the child component then only it shows the child clicked message this is the use of useCallback
    console.log("child clicked!!");      
  },[]) //only if something in the dependency array changes then it will only consider the logsomething function to change 

  //the child wala onclick will call an onCLick func above and will show child clicked 
  return <div> 
    <Child inputFunction={logSomething} /> 
    <button onClick={() => {
      setCount(count+1);
    }}>Click Me {count}</button>
  </div>
}

//and we are using memo here because this child component is static we dont want the child to render whenver the child is harassed if we dont use memo here then what will happen is that when the counter button is clicked then the child render msg will show that means unnceccasary rerender that is the parent is getting re render and the child will too and react is not smart enogh to identify that is the same function but it is referentially different
const Child = memo(({inputFunction}) => { //if we still click on the counter button the msg child render will show because react is not smart enough to know that the logseomthing is the same func as the last render
  console.log("child render");

  return <div>
    <button onClick={inputFunction}>Button Clicked</button>
  </div>
})



export default App
