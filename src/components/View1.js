import React, { useEffect } from "react";
import { useState } from "react";
function View1(props) {
    const [fName,setFName] = useState('')
    const [lName,setLName] = useState('')
    const [nameError, setNameError] = useState(false)

    const{updateFName} = props;
    const{updateLName} = props;
    const{updatePage} = props;

    const nameValidation = (event)=> {
        
        event.preventDefault();
        console.log(fName,lName)
        if(/[^a-zA-Z]/.test(fName) || /[^a-zA-Z]/.test(lName)) {
            setNameError(true)
           
        }
    }

    useEffect (() => {
        updateFName(fName)
    }, [fName]);

    useEffect (() => {
        updateLName(lName)
    }, [lName]);


    return (
        <div class="row justify-content-center">
            <div class="col-lg-6" >
                <form id="formView1" onSubmit={nameValidation}>
                    <div>
                        <label for="fName">First Name</label>
                        <input type="text" name="fName" id="fName" required placeholder="John e.g" onChange={e=>setFName(e.target.value)} class="form-control"></input>
                        {nameError && /[^a-zA-Z]/.test(fName)?<label class="error">Name can't contain numbers</label>:""}
                    </div>
                    <div>
                        <label for="lName">Last Name</label>
                        <input class="form-control" type="text" name="lName" id="lName" required placeholder="Smith e.g" onChange={e=>setLName(e.target.value)}></input>
                        {nameError && /[^a-zA-Z]/.test(lName)?<label class="error">Name can't contain numbers</label>:""}
                    </div>
                    <div>
                        <button type="submit" class="btn btn-secondary my-4">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default View1;
