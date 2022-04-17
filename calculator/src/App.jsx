/* eslint no-eval: 0 *///desactiva la evaluacion del linter para el EVAL
import React, {useState, useEffect} from 'react'
import words from 'lodash.words'
/**components */
import Result from './Components/Render/Result/Result'
import MathOperations from './Components/MathOperations/MathOperations'
import Numbers from './Components/Numbers/Numbers'
import Functions from './Components/Functions/Functions'
/**Css */
import './App.css'



const App = () => {
  //console.log("Render App")

  const [value, setValue] = useState("")

  
  const onClickOperation = (operation) => {
    if (value !== ''){
      setValue(`${value}${operation}`)  
    }
    
  }

  const onClickEqual = (equal) => {  
    if (value!== ''){
      setValue(eval(value).toString())
    }      
  }

  const onClickNumber = (number) => {   
    setValue(`${value}${number}`)      
  }  

  const onContentClear = () => {
    setValue('')
  }

  const onDelete = () => {
    if (value.length > 0 ){
      if(value.length === 1){
        setValue("0")  
      }else{
        setValue(value.substring(0,value.length-1))
      }
    } else {
      setValue("0")  
    }
    
  }
  
  const item = words(value, /[^-^+^*^/]+/g)
  const display = item.length > 0 ? (item[item.length-1]).toString() : (0).toString()

  console.log('render', display)
  return (
    <main className="react-calculator ">
      <h1 className='title'> Calculadora </h1>
      <Result value={display} />
      
      <Numbers onClickNumber={onClickNumber} />
        
      <Functions onContentClear={onContentClear} onDelete={onDelete}/>

      <MathOperations onClickOperation={onClickOperation} onClickEqual={onClickEqual} />
    </main>
  )
}
export default App