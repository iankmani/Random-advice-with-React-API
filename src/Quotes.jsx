import {ScaleLoader} from 'react-spinners'
import { useState, useEffect } from 'react'
import './App.css';
const Quotes = () => {
    const [advice, setAdvice] = useState(null)
    const [loading, setLoading] = useState(false)
    


  const handleGiveAdvice = async(e) => {
        e.preventDefault();
        try{
            const response = await fetch('https://api.adviceslip.com/advice');
            setLoading(true)
            const data = await response.json();
            setAdvice(data.slip.advice);
            setLoading(false)
            }
            catch(error){
                console.log(error);
                console.log("there was an error! Please try again later!")
                }
        }
       
        return (
            <div className="App">
                <h1>Random Advice by <a href="https://www.linkedin.com/in/ian-tos-/" target='_blank'>Ian Kimani</a></h1>
                <button onClick={handleGiveAdvice}>Give me advice!</button>
                {advice && <p>{advice}</p>}
                <h1>{loading && <ScaleLoader color="#36d7b7" size={80} />}</h1>
                
                
                </div>

             )   
            }
export default Quotes;