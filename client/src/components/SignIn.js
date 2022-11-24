import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {checkIsLogin} from '../features/cart/cartSlice'

export const SignIn = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassWord] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = 'http://localhost:5000/api/auth/login'

            await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
                body: JSON.stringify({email, password}),
            }).then(res => res.json()).then(data => {
                localStorage.setItem("token", data.token)
                localStorage.setItem("userName", data.decoded.userName)
                dispatch(checkIsLogin())
                setError(false)
                navigate('/')
            }).catch(err => {
                console.log(err)
                setError(true)
            })
            
        
    }

    return (
        <div className='sign-in'>
            <form onSubmit={handleSubmit}>
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
                </div>

                <div>
                    {error ? <p style={{color: "red"}}>Password does not match</p> : null}
                </div>

                <div className="login">
                    <button type="submit" className="signup-btn">Sign in</button>
                </div>
            </form>
        </div>
    )
}
