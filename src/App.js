import './App.css';
import { Jednina, Mnozina, Pozdrav } from './components';

function App() {
  const count = false;
  const arr = [1,2]

  // //IF-ELSE CONDITIONAL RENDERING
  // if(count===1){
  //   return (
  //     <div className='App'>
  //       <Jednina/>
  //     </div>
  //   )
  // }else{
  //   return (
  //     <div className='App'>
  //       <Mnozina/>
  //     </div>
  //   )
  // }

  // // && operator
  // return (
  //   <div className='App'>
  //     {count && <Pozdrav/>}
  //     {!arr.length && <p>Iduci</p>}
  //   </div>
  // )

  //TERNARY OPERATOR
  const num = 1
  return(
    <div className='App'>
      {num===1 ? <Jednina/> : <Mnozina/>}
    </div>
  )
}

export default App;
