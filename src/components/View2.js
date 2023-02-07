import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function View2(props) {
    const [healthDigits,setHealthDigits] = useState('')
    const [gender,setGender] = useState('Male')
    const [birthday,setBirthday] = useState('')


    const{updateHealthDigits} = props;
    const{updateGender} = props;
    const{updateBirthday} = props;



    const [errorCard,setErrorCard] = useState(false)
    const numValidation = (event)=> {
        event.preventDefault();
        if(mod10(healthDigits)) {
            console.log("is mod 10")
            if(/^\d+$/.test(healthDigits)) {
                console.log("is number")
                if(healthDigits.length == 10) {
                    console.log("is long enough")
                    setErrorCard(false)
                    setPage('3')
                    
                }
            }
            
        }
        else  {
            setErrorCard(true)
        }
        console.log(errorCard + " 4")
        console.log(healthDigits);
        mod10(healthDigits);
        
    }
    function mod10(numCheck) {
        let sum = 0;
        for(let i = 1; i < numCheck.length; i = i + 2) {
            console.log(numCheck[i])
            sum = sum + parseInt(numCheck[i],10)
        }
        for(let i = 0; i < numCheck.length; i = i + 2) {
            if( parseInt(numCheck[i],10) == 5) {
                sum = sum + 1
            }
            else if(parseInt(numCheck[i],10) == 6) {
                sum = sum + 3
            }
            else if(parseInt(numCheck[i],10) == 7) {
                sum = sum + 5
            }
            else if(parseInt(numCheck[i],10) == 8) {
                sum = sum + 7
            }
            else if(parseInt(numCheck[i],10) == 9) {
                sum = sum + 9
            }
            else {
                sum = sum + parseInt(numCheck[i],10)*2
            }
        }
        console.log(sum)
        return sum%10==0
    }

    useEffect (() => {
        updateHealthDigits(healthDigits)
    }, [healthDigits]);

    useEffect (() => {
        updateGender(gender)
    }, [gender]);

    useEffect (() => {
        updateBirthday(birthday)
    }, [birthday]);

    return (
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <form onSubmit={numValidation} id="formView2">
                    <div>
                        <label for="birthday">Date of Birth</label>
                        <input class="form-control" type="date" name="birthday" id="birthday" required onChange={e=>{setBirthday(e.target.value)}}></input>
                    </div>
                    <div>
                        <label for="health">Health card number</label>
                        <input class="form-control" type="text" name="health" id="health" required maxlength="10" placeholder="0123456789" onChange={e=>{setHealthDigits(e.target.value)}}></input>
                        {errorCard?<label class="error">Invalid Heath Card Number</label>:""}
                    </div>
                    <div>
                        <label for="gender">Gender</label>
                        <select class="form-control" name="gender" id="gender" onChange={e=>{setGender(e.target.value)}}>
                            <option selected>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div>
                        <div><label for="note">Write a message</label></div>
                        <textarea class="form-control" name="note" id="note" cols="30" rows="5"></textarea>
                    </div>
                    <div>
                        <button type="submit" class="my-4 btn btn-secondary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}