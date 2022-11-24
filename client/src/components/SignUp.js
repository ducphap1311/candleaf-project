import React, {useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';

export const SignUp = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassWord] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = 'http://localhost:5000/api/auth/register'
        if(password !== confirmPassword){
            setError(true)
            setSuccess(false)
        } else{
            await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
                body: JSON.stringify({name, email, password}),
            }).then(res => res.json()).then(data => {
                localStorage.setItem("token", data.token)
                setSuccess(true)
                setError(false)
            }).catch(err => console.log(err))
        }
            
        
    }

    return (
        <div className='sign-up'>
            <form onSubmit={handleSubmit}>
                <div className="form-item">
                    <label htmlFor="userNameSignUp">First and last name</label>
                    <input
                        type="text"
                        id="userNameSignUp"
                        name="username"
                        placeholder="Enter your name"
                        value={name}
                        required
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>

                <div className="form-item">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email@gmail.com"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    {/* <p className={["error-message"]}>
                        {formErrors.email}
                    </p> */}
                </div>

                <div className="form-item">
                    <label htmlFor="passwordSignUp">Password</label>
                    <input
                        type="password"
                        id="passwordSignUp"
                        name="password"
                        placeholder="********"
                        value={password}
                        required
                        onChange={(e) => setPassWord(e.target.value)}
                    ></input>
                    {/* <p className={["error-message"]}>
                        {formErrors.password}
                    </p> */}
                </div>

                <div className="form-item">
                    <label htmlFor="confirm">Confirm password</label>
                    <input
                        type="password"
                        id="confirm"
                        name="confirm"
                        value={confirmPassword}
                        placeholder="********"
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    ></input>
                    {/* <p className="error-message">
                        {formErrors.confirm}
                    </p> */}
                </div>

                <div>
                    {error ? <p style={{color: "red"}}>Email or Password is wrong</p> : null}
                    {success ? <p style={{color: "green", marginBottom: "15px"}}>Success create account <Link to='/signin' style={{textDecoration: "none", marginLeft: "10px", color: "black"}}>Sign in</Link></p> : null}
                </div>

                <div className="login">
                    <button
                        type="submit"
                        className="signup-btn"
                    >
                        Create an account
                    </button>
                </div>
            </form>
        </div>
    )
}
