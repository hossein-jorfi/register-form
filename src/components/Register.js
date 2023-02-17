import React, { useEffect, useState } from 'react';

// style
import style from './Register.module.css'

// validate function
import { validate } from '../helper/validate';

// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

     const [data, setData] = useState({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          check: false
     })
     const [errors, setErrors] = useState({})
     const [touch, setTouch] = useState({})

     useEffect(() => {
          setErrors(validate(data))
     }, [data])

     const changeHandler = event => {
          if (event.target.name === 'check') {
               setData({ ...data, [event.target.name]: event.target.checked })
          } else {
               setData({ ...data, [event.target.name]: event.target.value })
          }
     }

     const registred = () => toast.success('Registered Successfully', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
     });
     const notRegistred = () => toast.error('Invalid Data', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
     const clickHandler = event => {
          event.preventDefault()

          setTouch({
               name: true,
               email: true,
               password: true,
               confirmPassword: true,
               check: true
          })

          if (!Object.keys(errors).length) {
               // alert('Registered Successfully')
               registred()
          } else {
               notRegistred()
          }
     }

     const focusHandler = event => {
          setTimeout(() => {
               setTouch({ ...touch, [event.target.name]: true })
          }, 2000)
     }

     return (
          <div>
               <form className={style.form}>
                    <h1 className={style.header}>Sign Up</h1>
                    <div>
                         <input onChange={changeHandler} value={data.name} className={style.input} type="text" name="name"
                              placeholder='Name' onFocus={focusHandler} />
                         <p className={style.message}>
                              {
                                   touch.name &&
                                   errors.name && errors.name
                              }
                         </p>
                    </div>
                    <div>
                         <input onChange={changeHandler} value={data.email} className={style.input} type="email" name="email" placeholder='Email' onFocus={focusHandler} />
                         <p className={style.message}>
                              {
                                   touch.email &&
                                   errors.email && errors.email
                              }
                         </p>
                    </div>
                    <div>
                         <input onChange={changeHandler} value={data.password} className={style.input} type="password" name="password" placeholder='Password' onFocus={focusHandler} />
                         <p className={style.message}>
                              {
                                   touch.password &&
                                   errors.password && errors.password
                              }
                         </p>
                    </div>
                    <div>
                         <input onChange={changeHandler} value={data.confirmPassword} className={style.input} type="password" name="confirmPassword" placeholder='Confirm Password' onFocus={focusHandler} />
                         <p className={style.message}>
                              {
                                   touch.confirmPassword &&
                                   errors.confirmPassword && errors.confirmPassword
                              }
                         </p>
                    </div>
                    <div>
                         <div className={style.checkBoxContainer}>
                              <label>i accepet terms of privacy policy</label>
                              <input onChange={changeHandler} value={data.check} type="checkbox" name="check" onFocus={focusHandler} />
                         </div>
                         <p className={style.message}>{
                              touch.check &&
                              errors.check && errors.check
                         }</p>
                    </div>
                    <div className={style.buttonsContainer}>
                         <button className={style.button2}>
                              Login
                         </button>
                         <button className={style.button} onClick={clickHandler}>
                              Sign Up
                         </button>
                    </div>
               </form>

               <ToastContainer />
          </div>
     );
};

export default Register;