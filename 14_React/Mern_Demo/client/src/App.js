import './App.css';
import axios from 'axios';
import {useState} from 'react';

 function App(){
  const initialState={
    fname:'',
    lname:''
  }
  const [formData, setFormData]= useState(initialState)
  


   const handleClick= ()=>{
     console.log('I am the handle click!!')
     axios.get('/test')
     .then((response)=> console.log(response))
     .catch((err)=>console.log('error: ',err))
     .finally(()=>console.log('I am ALWAYS!!'))
   }
   
   const handleChange= (event)=>{
     setFormData({
       ...formData,// spread operator in order to maintain previous data
       [event.target.name]: event.target.value
     })
   }

   const handleSubmit= (event)=>{
     event.preventDefault()
     axios.post('/new'. formData)
     .then(response=>{
      resetFields() 
      console.log('Response Data: ', response.data)})
     .catch(err=>console.log('Error: ', err))
    
   }

   const resetFields= ()=>{
     setFormData(initialState)
   }

   return(
     <div>
     <h1>Mern Demo</h1>
     <button onClick={handleClick}>Click Me</button>
     <form onSubmit={handleSubmit}>
       <label htmlFor="fname">First Name: </label>
       <input type="text" 
name="fname" 
id="fname" value={formData.fname}
onChange={handleChange}/>
<label htmlFor="lname">Last Name:</label>
<input type="text" name="lname" id="lname" value={formData.lname} onChange={handleChange}></input>
       <button type="submit">SUBMIT</button>
       <button type="reset">Reset</button>
    </form>
     </div>
   );
 }

export default App;
