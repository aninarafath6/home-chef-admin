import React, { useRef, useState ,useEffect} from 'react';
import {Redirect} from 'react-router-dom'

import './login.css'
import axios from 'axios';

const Login = () => {
    const visibleErrLabelRef = useRef();
    const visibleFillLabelRef = useRef();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState();
    const [isLogged, setIsLogged] = useState(false);
    useEffect(()=>{
      
    })
    const onLoginHandiler = () => {
      if(password==="" ||email===""){
          visibleFillLabelRef.current.classList.add("visble_err_label");

      }
      else if (password === "" && email === ""){
          visibleFillLabelRef.current.classList.add("visble_err_label");

      }else{
          const data = {
              email: email,
              password: password
          }
       axios.post('login',data)
         .then(res=>{
           console.log({status:res.data});
            setStatus(res.data.login);

             if(res.data.token !==undefined){

            localStorage.setItem("token",res.data.token);
            
            setIsLogged(true)
            // window.location = "/home"

             }else{

             
                setIsLogged(false)

             }
         })
         .catch(err=>{
                setIsLogged(false)

             console.log(err);
             
         })
       

          ;


      }
      }
      

    return (
      <div className="login_section">
        <div className="ovarly">
          {isLogged === false || isLogged === undefined ? (
            <>
              <div className="logo">
              <div className="logo_section">
  <h3 ><span id="homespan">HOME</span> <span id="chefspan">CHEF ADMIN</span></h3>
</div>
              </div>
              <div className="login_container">
                <div className="login">
                  <div className="login_label_div">
                    <h3 className="login_label">Login</h3>
                  </div>
                  <div className="err_label_div">
                    {status === false ? (
                      <p className="err_label visble_err_label">
                        invalid email or password
                      </p>
                    ) : (
                      <p></p>
                    )}

                    <p ref={visibleFillLabelRef} className="err_label">
                      pleese fill username and password
                    </p>
                  </div>
                  <div className="input_username login_input">
                    <input
                      className="userName_inp"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email address"
                      type="email"
                    />
                  </div>
                  <div className="input_password login_input">
                    <input
                      className=""
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="password"
                      type="password"
                    />
                  </div>
                  <div className="login_btn_div">
                    <button className="login_btn" onClick={onLoginHandiler}>
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <Redirect to="/" />
            </>
          )}
        </div>
      </div>
    );
}


export default Login;
