// import logo from './logo.svg';
import './App.css';
import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { incNumber,decNumber } from './actions';

const App = () => {
  const myState = useSelector((state)=>state.changetheNumber);
  const dispatch = useDispatch()
  return (
    <div className="main-div">
      

    <div className="container">
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>
      
      <div className="quantity">
        <a className="quantity__minus" title="Decrement" onClick={()=>dispatch(decNumber(5))}><span>-</span></a>
        <input name="quantity" type="text" className="quantity__input" value={myState} />
        <a className="quantity__plus" title="Increment" onClick={()=>dispatch(incNumber(5))}><span>+</span></a>
        </div>
  
  </div>
</div>
  )
}

export default App
