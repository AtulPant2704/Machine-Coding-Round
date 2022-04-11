// Make a form, which will take the following 3 inputs from the user,  name, email, and mobile number
// And the form will have a save button at the end.

// When the user completes the form, the user should be able to save it.
// After saving data, **show a success message.**

// After data is submitted input fields should be disabled.

// Then, Besides every field, there should be an edit button, which allows users to edit the field and save it.

import { useState } from "react";

const UserData = () => {
    const [user, setUser] = useState({
        name: "", email: "", phone: ""
    })
    const [showMsg, setShowMsg] = useState(false);
    const [userName, setUserName] = useState({ name: "", isEditable: true });
    const [userEmail, setUserEmail] = useState({ email: "", isEditable: true });
    const [userPhone, setUserPhone] = useState({ phone: "", isEditable: true });

    const submitHandler = () => {
        setUser(prev => ({ ...prev, name: userName.name, email: userEmail.email, phone: userPhone.phone }))
        setUserName(prev => ({ ...prev, isEditable: false }))
        setUserEmail(prev => ({ ...prev, isEditable: false }))
        setUserPhone(prev => ({ ...prev, isEditable: false }))
        setShowMsg(true);
        setTimeout(() => setShowMsg(false), 2000);
    }


    return (
        <div>
            <div>
                <label htmlFor="">Enter Name: </label>
                <input type="text" value={userName.name} onChange={(e) => setUserName(prev => ({ ...prev, name: e.target.value }))} required disabled={!userName.isEditable}></input>
                <button onClick={() => setUserName(prev => ({ ...prev, isEditable: true }))}>Edit</button>
            </div>
            <div>
                <label htmlFor="">Enter Email: </label>
                <input type="email" value={userEmail.email} onChange={(e) => setUserEmail(prev => ({ ...prev, email: e.target.value }))} required disabled={!userEmail.isEditable}></input>
                <button onClick={() => setUserEmail(prev => ({ ...prev, isEditable: true }))}>Edit</button>
            </div>
            <div>
                <label htmlFor="">Enter Phone: </label>
                <input type="number" value={userPhone.phone} onChange={(e) => setUserPhone(prev => ({ ...prev, phone: e.target.value }))} required disabled={!userPhone.isEditable}></input>
                <button onClick={() => setUserPhone(prev => ({ ...prev, isEditable: true }))}>Edit</button>
            </div>
            <button onClick={submitHandler}>Submit</button>
            {showMsg ? <p>Data Saved</p> : null}
        </div >
    )
}

export { UserData };
