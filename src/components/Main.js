import React from "react";
import View1 from "./View1";
import View2 from "./View2";
import { useState } from "react";

export default function Main() {
    const [fName,setFName] = useState('')
    const updateFName = (e) => {
        setFName(e)
    }

    const [lName,setLName] = useState('')
    const updateLName = (e) => {
        setLName(e)
    }

    const [healthDigits,setHealthDigits] = useState('')
    const updateHealthDigits = (e) => {
        setHealthDigits(e)
    }
    
    const [gender,setGender] = useState('Male')
    const updateGender = (e) => {
        setGender(e)
    }


    const [birthday,setBirthday] = useState('')
    const updateBirthday = (e) => {
        setBirthday(e)
    }


        return (<div>
                    <View1 updateFName={updateFName} updateLName={updateLName}/>
                    <View2 updateHealthDigits={updateHealthDigits} updateGender={updateGender} updateBirthday={updateBirthday} />

                    <div class="table-responsive-md ">
                        <table class="table table-bordered table-hover">
                            <tr>
                                <td colSpan="2" id="tabelTitle"><h4>Here is your information</h4></td>
                            </tr>
                            <tr>
                                <td class="heading">First Name</td>
                                <td class="result">{fName}</td>
                            </tr>
                            <tr>
                                <td class="heading">Last Name</td>
                                <td class="result">{lName}</td>
                            </tr>
                            <tr>
                                <td class="heading">Gender</td>
                                <td class="result">{gender}</td>
                            </tr>
                            <tr>
                                <td class="heading">Date of Birth</td>
                                <td class="result">{birthday}</td>
                            </tr>
                            <tr>
                                <td class="heading">Health Card Number</td>
                                <td class="result">{healthDigits}</td>
                            </tr>
                        </table>

                    </div>
                </div>)

    
}