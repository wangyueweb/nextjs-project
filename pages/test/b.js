import React, { useState, useEffect, useReducer, useLayoutEffect, useContext, useRef } from "react"
import { withRouter } from "next/router"
import Comp from "../../components/comp"
import MyContext from "../../lib/my-context"

// class MyCount extends React.Component{

//   state={
//     count: 0
//   }

//   componentDidMount(){
//     this.interval = setInterval(() => {
//       this.setState({count: this.state.count + 1});
//     }, 1000);
//   }

//   componentWillUnmount(){
//     if(this.interval){
//       clearInterval(this.interval);
//     }
//   }
  
//   render(){
//     const {router} = this.props
//     return(
//       <span ref={this.ref}>{this.state.count}</span>
//     )
//   }
// }

function countReducer (state, action) {
  switch (action.type){
    case 'add':
      return state + 1;
    case 'minus':
      return state - 1;
    default:
      return state
  }
}

function MyCountFunc(){
  // const [count, setCount] = useState(0)
  const [count, dispatchCount] = useReducer(countReducer, 13);
  const [name, setName] = useState('nick');
  const context = useContext(MyContext);
  const inputRef = useRef();

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // setCount(count => count + 1);
  //     dispatchCount({type: 'minus'});
  //   }, 1000);

  //   return() => {
  //     clearInterval(interval)
  //   }
  // }, [])

  useEffect(() => {
    console.log('effect invoked');
    console.log(inputRef)
    return() => {
      console.log('effect deteched')
    }
  }, [name])

  // useLayoutEffect(() => {
  //   console.log('LayoutEffect invoked');
  //   return() => {
  //     console.log('LayoutEffect deteched')
  //   }
  // }, [name])

  return (
    <div>
      <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
      <button onClick={() => dispatchCount({type: 'add'})}>{count}</button>
      <p>{context}</p>
    </div>
  )
}

export default withRouter(MyCountFunc);