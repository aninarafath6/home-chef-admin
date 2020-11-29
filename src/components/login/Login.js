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
    const [isLogged, setIsLogged] = useState();
    useEffect(()=>{
        const token =localStorage.getItem('token');
      
        if(token){

setIsLogged(true)
  
        }
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="200.716"
                  height="140.274"
                  viewBox="0 0 544.716 140.274"
                >
                  <g
                    id="Group_65"
                    data-name="Group 65"
                    transform="translate(-32 -40.682)"
                    opacity="0.8"
                  >
                    <g
                      id="chef_1_"
                      data-name="chef (1)"
                      transform="translate(32 40.682)"
                    >
                      <g id="Group_2" data-name="Group 2">
                        <g id="Group_1" data-name="Group 1">
                          <path
                            id="Path_1"
                            data-name="Path 1"
                            d="M111.918,215.959a2.626,2.626,0,0,0-5.252,0c0,6.9,7.606,16.363,8.473,17.422a2.627,2.627,0,1,0,4.062-3.334C116.385,226.617,111.918,219.759,111.918,215.959Z"
                            transform="translate(-80.407 -158.058)"
                            fill="#f8c628"
                          />
                          <path
                            id="Path_2"
                            data-name="Path 2"
                            d="M319.84,213.333a2.624,2.624,0,0,0-2.626,2.626c0,3.787-4.467,10.653-7.283,14.091a2.627,2.627,0,0,0,4.062,3.331c.867-1.059,8.473-10.527,8.473-17.422A2.624,2.624,0,0,0,319.84,213.333Z"
                            transform="translate(-233.184 -158.058)"
                            fill="#f8c628"
                          />
                          <path
                            id="Path_3"
                            data-name="Path 3"
                            d="M226.626,213.333A2.624,2.624,0,0,0,224,215.959v15.756a2.626,2.626,0,0,0,5.252,0V215.959A2.625,2.625,0,0,0,226.626,213.333Z"
                            transform="translate(-168.855 -158.058)"
                            fill="#f8c628"
                          />
                          <path
                            id="Path_4"
                            data-name="Path 4"
                            d="M86.656,10.955a26.414,26.414,0,0,0-4.981.554,30.579,30.579,0,0,0-47.808,0,26.44,26.44,0,0,0-4.981-.554C12.958,10.955,0,24.469,0,41.081A30.282,30.282,0,0,0,15.817,67.927l-.051,41.388a11.35,11.35,0,0,0,3.134,7.909,10.422,10.422,0,0,0,7.58,3.279H89.071a10.963,10.963,0,0,0,10.714-11.174V67.887a30.293,30.293,0,0,0,15.756-26.807C115.541,24.469,102.583,10.955,86.656,10.955Zm7.878,98.374a5.591,5.591,0,0,1-5.462,5.7H26.48a5.32,5.32,0,0,1-3.865-1.671,5.785,5.785,0,0,1-1.6-4.033l.014-10.728h73.5Zm1.626-45.705a2.32,2.32,0,0,0-.392.211,2.631,2.631,0,0,0-.805.824,2.85,2.85,0,0,0-.428,1.559v26.9h-73.5l.034-26.86a2.939,2.939,0,0,0-.026-.449,2.816,2.816,0,0,0-.416-1.134,2.657,2.657,0,0,0-.78-.794,2.709,2.709,0,0,0-.413-.222A24.7,24.7,0,0,1,5.252,41.081c0-13.592,10.6-24.648,23.633-24.648.509,0,1.047.064,1.575.108a33.708,33.708,0,0,0-4.2,16.325,2.628,2.628,0,1,0,5.252,0c0-15.1,11.781-27.387,26.259-27.387S84.03,17.764,84.03,32.865a2.628,2.628,0,1,0,5.252,0,33.708,33.708,0,0,0-4.2-16.325c.528-.043,1.065-.108,1.575-.108,13.032,0,23.633,11.057,23.633,24.648A24.714,24.714,0,0,1,96.159,63.624Z"
                            fill="#f8c628"
                          />
                        </g>
                      </g>
                    </g>
                    <text
                      id="Home_Chef_"
                      data-name="Home Chef "
                      transform="translate(241.716 151.956)"
                      fill="#fff"
                      fontSize="92"
                      fontFamily="Gabriola"
                    >
                      <tspan x="0" y="0">
                        Home{" "}
                      </tspan>
                      <tspan y="0" fill="#f7b614">
                        Chef{" "}
                      </tspan>
                    </text>
                  </g>
                </svg>
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
