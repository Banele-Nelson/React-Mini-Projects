import { useState } from 'react';
import './App.css';



const App = () => {

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");

  const calculateBMI = () => {
    if(!height || !weight){
      setResult("Please enter valid height and weight");
      return;
    }
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    let bmiCategory = '';
    if(bmi < 18.5){
      bmiCategory = 'Underweight';
    } else if(bmi >= 18.5 && bmi < 24.9){
      bmiCategory = 'Normal weight';
    } else if(bmi >= 25 && bmi < 29.9){
      bmiCategory = 'Overweight';
    } else {
      bmiCategory = 'Obesity';
    }
    
    setResult(`Your BMI is ${bmi} which is considered ${bmiCategory}`);
  }
  
  return (
    <div>
      <div className="container">
        <h1>BMI Calculator</h1>
        <label htmlFor="height" >Height(cm)</label>
        <input type="number" id="height" placeholder="Enter height in cm" value={height} onChange={(e) => setHeight(e.target.value)}/>
        <label htmlFor="weight" >Weight(kg)</label>
        <input type="number" id="weight" placeholder="Enter weight in kg" value={weight} onChange={(e) => setWeight(e.target.value)} />
        <button onClick={calculateBMI}>Calculate BMI</button>
        <div className="result">{result}</div>
      </div>
      
    </div>
  )
}

export default App

