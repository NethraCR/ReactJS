import React,{useState , useRef} from "react";

const SignUp =(props)=>{
    const refUserEmail = useRef();
    const refUserpwd = useRef();

    const submitHandler = (event) => {
        event.preventDefault();       
        //  props.onSave(records);
        
    }

    return (
        <div className='txt'>
        <form onSubmit={submitHandler}>
                <label id='appl' for="userid">Email Id:</label>
                <input id='Emailid' name="name" type="email" ref={refUserEmail}/><br></br><br></br>
        
                <label id='appl' for="password">Password:</label>
                <input id='Password' name="password" type="password" ref={refUserpwd}/><br></br><br></br>
            
            <button id="hf" type="submit">SignUp</button>
        </form>
        </div>
    ); 
    
}

export default SignUp;