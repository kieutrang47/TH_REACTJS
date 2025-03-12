import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [name, setName] = useState("");
//   const [display, setDisplay]= useState("");
//   return (
//     <>
//       <div>
//         <span>Nhập tên: </span>
//         <input type="text"  id="" onChange={e=>setName(e.target.value)}/>
//         <button onClick={()=>setDisplay(name)}> Send </button>
//         <div>Dữ liệu nhập liệu: 
//           <span> Hello {display}</span>
//         </div>
//       </div>
//     </>
//   )
// }

//  CONG TRU NHAN CHIA
function App(){
  var[a, setA] =useState(0);
  var [b, setB]= useState(0);
  var [result, setResult]=useState("");
  var [operator, setOperator] =useState();

  function handleChangeA(e){
    setA(e.target.value);
  }
  function handleChangeB(e){
    setB(e.target.value);
  }
  function handleClick(e){
    // setResult(parseInt(a)+parseInt(b))
   if(operator=='+')
   setResult(parseInt(a)+ parseInt(b));
  else if (operator=='-')
  setResult(parseInt(a)- parseInt(b));
  else if (operator=='*')
  setResult(parseInt(a)* parseInt(b));
  else if (operator=='/')
  setResult(parseInt(a)/ parseInt(b));
  }



  function handleRadioChange(e){
    setOperator(e.target.value);
  }

  return(
    <>
      <input onChange={handleChangeA} placeholder='nhap a' type="text" />
      <br />
      <input onChange={handleChangeB} placeholder='nhap b' type="text" />
      <br />
      
      <input onChange={handleRadioChange} type="radio" name="group" value="+" /><span>+</span>
      <input onChange={handleRadioChange} type="radio" name="group" value="-" /><span>-</span>
      <input onChange={handleRadioChange} type="radio" name="group" value="*" /><span>*</span>
      <input onChange={handleRadioChange} type="radio" name="group" value="/" /><span>/</span>
      <br />
      <button onClick={handleClick}>Click</button>
      <br />
      <span>Ket qua la: {result}</span>

    </>
  )
}

export default App