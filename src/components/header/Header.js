import React, {useRef, useState ,useEffect} from 'react';
import './header.css'
import './side_panel.css'
import Manage_bord from '../mange_bord/Manage_bord'
import {useHistory,Link} from 'react-router-dom'
export const LogutContaxt = React.createContext();
const Header = () => {
const [count,setCount]=useState(0)
let route = useHistory().location.pathname    
const [status,setStatus]=useState(false)
const ref =useRef()
const menuRef =useRef()
const hiddenRef =useRef()
const pRef =useRef()
const DashbordRef =useRef()
const VendorRef =useRef()
const catogaryRef =useRef()
const orderRef =useRef()
const userRef =useRef()
const logRef =useRef()
const panel_ref =useRef()
  
                    useEffect(()=>{
                        if(route==='/login'){
                            hiddenRef.current.classList.add('display_none');
                        }
                    },[count])
        const toggle = () => {
              ref.current.classList.toggle("toggle_panel")
              panel_ref.current.classList.toggle("panel_toggle")
        if(status){

    pRef.current.classList.toggle("visible")
DashbordRef.current.classList.toggle("visible")
VendorRef.current.classList.toggle("visible")
catogaryRef.current.classList.toggle("visible")
orderRef.current.classList.toggle("visible")
userRef.current.classList.toggle("visible")
logRef.current.classList.toggle("visible")
    setTimeout(() => {
        ref.current.classList.toggle("position_fixed")

}, 700);

setStatus(false)
}else{
    ref.current.classList.toggle("position_fixed")

                        setTimeout(() => {
                                    pRef.current.classList.toggle("visible")
                                                    DashbordRef.current.classList.toggle("visible")
                                                         VendorRef.current.classList.toggle("visible")
                                                             catogaryRef.current.classList.toggle("visible")
                                                                     orderRef.current.classList.toggle("visible")
                                                                          userRef.current.classList.toggle("visible")
                                                                                  logRef.current.classList.toggle("visible")

                    }, 500);
setStatus(true)
}

 

    }
  const onLoGout =()=>{
     localStorage.clear('token')
     window.location.reload() 
 }
    return (
      <div ref={hiddenRef} className="header_section">
        <header className="header">
          <nav className="navbar">
            <div className="toggle_section">
              <svg
                onClick={toggle}
                xmlns="http://www.w3.org/2000/svg"
                width="26.956"
                height="22.309"
                viewBox="0 0 52.956 45.309"
              >
                <path
                  id="bars-solid"
                  d="M1.891,68.322H51.065a1.871,1.871,0,0,0,1.891-1.849V61.849A1.871,1.871,0,0,0,51.065,60H1.891A1.871,1.871,0,0,0,0,61.849v4.623A1.871,1.871,0,0,0,1.891,68.322Zm0,18.493H38.065a1.871,1.871,0,0,0,1.891-1.849V80.343a1.871,1.871,0,0,0-1.891-1.849H1.891A1.871,1.871,0,0,0,0,80.343v4.623A1.871,1.871,0,0,0,1.891,86.816Zm0,18.493H51.065a1.871,1.871,0,0,0,1.891-1.849V98.836a1.871,1.871,0,0,0-1.891-1.849H1.891A1.871,1.871,0,0,0,0,98.836v4.623A1.871,1.871,0,0,0,1.891,105.309Z"
                  transform="translate(0 -60)"
                  fill="#fff"
                />
              </svg>
            </div>
            <div className="logo_section">
              <Link to="/">
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
              </Link>
            </div>
            <div className="icons_div">
              <i className="fas fa-user nav_icons"></i>
              <i className="fas fa-bell nav_icons"></i>
              <i onClick={onLoGout} class="fas fa-power-off nav_icons"></i>
            </div>
          </nav>
        </header>
        <div ref={panel_ref} className="panel">
          <aside ref={ref} className="side_panel_section ">
            {" "}
            <div className="menu_section">
              <ul className="menus">
                <li className="menu">
                  <Link to="/dashboard">
                    <svg
                      id="dashboard"
                      xmlns="http://www.w3.org/2000/svg"
                      width="27.411"
                      height="27.411"
                      viewBox="0 0 27.411 27.411"
                    >
                      <path
                        id="Path_69"
                        data-name="Path 69"
                        d="M10.565,0H2A2,2,0,0,0,0,2v5.14a2,2,0,0,0,2,2h8.566a2,2,0,0,0,2-2V2A2,2,0,0,0,10.565,0Zm0,0"
                        fill="#fff"
                      />
                      <path
                        id="Path_70"
                        data-name="Path 70"
                        d="M10.565,213.332H2a2,2,0,0,0-2,2v11.992a2,2,0,0,0,2,2h8.566a2,2,0,0,0,2-2V215.331A2,2,0,0,0,10.565,213.332Zm0,0"
                        transform="translate(0 -201.911)"
                        fill="#fff"
                      />
                      <path
                        id="Path_71"
                        data-name="Path 71"
                        d="M287.9,341.332h-8.566a2,2,0,0,0-2,2v5.14a2,2,0,0,0,2,2H287.9a2,2,0,0,0,2-2v-5.14A2,2,0,0,0,287.9,341.332Zm0,0"
                        transform="translate(-262.484 -323.058)"
                        fill="#fff"
                      />
                      <path
                        id="Path_72"
                        data-name="Path 72"
                        d="M287.9,0h-8.566a2,2,0,0,0-2,2V13.991a2,2,0,0,0,2,2H287.9a2,2,0,0,0,2-2V2A2,2,0,0,0,287.9,0Zm0,0"
                        transform="translate(-262.484)"
                        fill="#fff"
                      />
                    </svg>

                    <p ref={DashbordRef} className="hedden">
                      Dashbord
                    </p>
                  </Link>
                </li>
                <li className="menu">
                  <Link to="/vendor">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26.25"
                      height="27.411"
                      viewBox="0 0 26.25 27.411"
                    >
                      <g id="market-store" transform="translate(-10.265)">
                        <path
                          id="Path_73"
                          data-name="Path 73"
                          d="M35.2,199.52h-.556v-13.7h0a3.269,3.269,0,0,1-1.869-.6,3.25,3.25,0,0,1-1.882.6,3.208,3.208,0,0,1-.417-.034v10.191a1.053,1.053,0,0,1-1.054,1.053H25.641v-2.886l1.334,2.227a.841.841,0,1,0,1.444-.865l-2.682-4.477a.832.832,0,0,0-.77-.4c-.02,0-3.108,0-3.127,0a.834.834,0,0,0-.781.4l-2.683,4.477a.842.842,0,1,0,1.444.865l1.343-2.241v2.9H17.371a1.053,1.053,0,0,1-1.054-1.053V185.786a3.2,3.2,0,0,1-.417.034,3.309,3.309,0,0,1-.643-.064,3.252,3.252,0,0,1-1.24-.535,3.268,3.268,0,0,1-1.869.6h0v13.7h-.556a1.318,1.318,0,0,0,0,2.637H35.2a1.318,1.318,0,1,0,0-2.637Z"
                          transform="translate(-0.009 -174.745)"
                          fill="#fff"
                        />
                        <path
                          id="Path_74"
                          data-name="Path 74"
                          d="M213.068,197.226a2.024,2.024,0,1,0,1.754,2.006A1.893,1.893,0,0,0,213.068,197.226Z"
                          transform="translate(-189.678 -186.071)"
                          fill="#fff"
                        />
                        <path
                          id="Path_75"
                          data-name="Path 75"
                          d="M11.6,9.59a1.875,1.875,0,0,0,2.333-1.26l.1-.33a1.87,1.87,0,0,0,3.694.159l.046-.229a1.872,1.872,0,0,0,1.679,1.729c.063.006.126.009.189.009a1.875,1.875,0,0,0,1.863-1.689l.014-.139a1.871,1.871,0,0,0,3.741,0l.014.139a1.875,1.875,0,0,0,1.863,1.689c.062,0,.125,0,.188-.009A1.871,1.871,0,0,0,29,7.93l.046.229A1.87,1.87,0,0,0,32.744,8l.1.33a1.875,1.875,0,0,0,1.8,1.338,1.9,1.9,0,0,0,.538-.078,1.875,1.875,0,0,0,1.26-2.333L34.744,1.593A2.231,2.231,0,0,0,32.606,0H14.174a2.231,2.231,0,0,0-2.138,1.593L10.344,7.257A1.875,1.875,0,0,0,11.6,9.59Z"
                          fill="#fff"
                        />
                      </g>
                    </svg>

                    <span ref={VendorRef} className="hedden">
                      Vendor Management
                    </span>

                    <div className="hedden">
                      <div className="hedden"></div>
                    </div>
                  </Link>
                </li>
                <li className="menu">
                  <Link to="/category">
                    <svg
                      id="list"
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="22.275"
                      viewBox="0 0 28 22.275"
                    >
                      <path
                        id="Path_76"
                        data-name="Path 76"
                        d="M0,6.2H6.2V0H0ZM1.641,1.641H4.555V4.555H1.641Zm0,0"
                        fill="#fff"
                      />
                      <path
                        id="Path_77"
                        data-name="Path 77"
                        d="M149.3,0V6.2h19.835V0Zm18.194,4.555H150.938V1.641h16.554Zm0,0"
                        transform="translate(-141.132)"
                        fill="#fff"
                      />
                      <path
                        id="Path_78"
                        data-name="Path 78"
                        d="M0,153.2H6.2v-6.2H0Zm1.641-4.555H4.555v2.914H1.641Zm0,0"
                        transform="translate(0 -138.969)"
                        fill="#fff"
                      />
                      <path
                        id="Path_79"
                        data-name="Path 79"
                        d="M149.3,153.2h19.835v-6.2H149.3Zm1.641-4.555h16.554v2.914H150.938Zm0,0"
                        transform="translate(-141.132 -138.969)"
                        fill="#fff"
                      />
                      <path
                        id="Path_80"
                        data-name="Path 80"
                        d="M0,300.208H6.2v-6.2H0Zm1.641-4.555H4.555v2.914H1.641Zm0,0"
                        transform="translate(0 -277.933)"
                        fill="#fff"
                      />
                      <path
                        id="Path_81"
                        data-name="Path 81"
                        d="M149.3,300.208h19.835v-6.2H149.3Zm1.641-4.555h16.554v2.914H150.938Zm0,0"
                        transform="translate(-141.132 -277.933)"
                        fill="#fff"
                      />
                    </svg>

                    <span ref={catogaryRef} className="hedden">
                      Category Management
                    </span>
                  </Link>
                </li>
                <li className="menu">
                  <Link to="/menu">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20.943"
                      height="29.919"
                      viewBox="0 0 20.943 29.919"
                    >
                      <g id="menu" transform="translate(-71.998)">
                        <g
                          id="Group_108"
                          data-name="Group 108"
                          transform="translate(71.998 0)"
                        >
                          <g
                            id="Group_107"
                            data-name="Group 107"
                            transform="translate(0 0)"
                          >
                            <path
                              id="Path_82"
                              data-name="Path 82"
                              d="M92.443,4.986H89.949V.5A.5.5,0,0,0,89.31.02L72.356,5.007c-.01,0-.017.01-.027.013a.5.5,0,0,0-.073.037.5.5,0,0,0-.085.057.541.541,0,0,0-.054.058.522.522,0,0,0-.057.085.513.513,0,0,0-.03.072.468.468,0,0,0-.022.108c0,.016-.009.03-.009.047V29.42a.5.5,0,0,0,.5.5H92.443a.5.5,0,0,0,.5-.5V5.485A.5.5,0,0,0,92.443,4.986ZM88.952,1.165V4.986H75.959Zm2.992,27.757H73V5.984H91.944Z"
                              transform="translate(-71.998 0)"
                              fill="#fff"
                            />
                          </g>
                        </g>
                        <g
                          id="Group_110"
                          data-name="Group 110"
                          transform="translate(75.489 7.978)"
                        >
                          <g
                            id="Group_109"
                            data-name="Group 109"
                            transform="translate(0)"
                          >
                            <path
                              id="Path_83"
                              data-name="Path 83"
                              d="M131.488,128a.5.5,0,0,0-.427.242l-1.069,1.781-1.069-1.781a.5.5,0,0,0-.926.257v3.989a.5.5,0,1,0,1,0V130.3l.57.95a.518.518,0,0,0,.855,0l.57-.95v2.189a.5.5,0,1,0,1,0V128.5A.5.5,0,0,0,131.488,128Z"
                              transform="translate(-127.997 -127.999)"
                              fill="#fff"
                            />
                          </g>
                        </g>
                        <g
                          id="Group_112"
                          data-name="Group 112"
                          transform="translate(79.976 7.978)"
                        >
                          <g
                            id="Group_111"
                            data-name="Group 111"
                            transform="translate(0)"
                          >
                            <path
                              id="Path_84"
                              data-name="Path 84"
                              d="M201.993,130.989a.5.5,0,0,0,0-1h-1v-1h1a.5.5,0,1,0,0-1h-1.5a.5.5,0,0,0-.5.5v3.989a.5.5,0,0,0,.5.5h1.5a.5.5,0,1,0,0-1h-1v-1Z"
                              transform="translate(-199.998 -127.997)"
                              fill="#fff"
                            />
                          </g>
                        </g>
                        <g
                          id="Group_114"
                          data-name="Group 114"
                          transform="translate(82.968 7.973)"
                        >
                          <g
                            id="Group_113"
                            data-name="Group 113"
                            transform="translate(0)"
                          >
                            <path
                              id="Path_85"
                              data-name="Path 85"
                              d="M250.491,127.911a.5.5,0,0,0-.5.5v1.877l-1.047-2.1a.5.5,0,0,0-.947.223V132.4a.5.5,0,1,0,1,0v-1.877l1.047,2.1a.5.5,0,0,0,.947-.223V128.41A.5.5,0,0,0,250.491,127.911Z"
                              transform="translate(-247.998 -127.905)"
                              fill="#fff"
                            />
                          </g>
                        </g>
                        <g
                          id="Group_116"
                          data-name="Group 116"
                          transform="translate(86.459 7.978)"
                        >
                          <g id="Group_115" data-name="Group 115">
                            <path
                              id="Path_86"
                              data-name="Path 86"
                              d="M306.491,128a.5.5,0,0,0-.5.5v2.992a.5.5,0,0,1-1,0V128.5a.5.5,0,0,0-1,0v2.992a1.5,1.5,0,1,0,2.992,0V128.5A.5.5,0,0,0,306.491,128Z"
                              transform="translate(-303.998 -127.997)"
                              fill="#fff"
                            />
                          </g>
                        </g>
                        <g
                          id="Group_118"
                          data-name="Group 118"
                          transform="translate(73.993 17.453)"
                        >
                          <g
                            id="Group_117"
                            data-name="Group 117"
                            transform="translate(0)"
                          >
                            <path
                              id="Path_87"
                              data-name="Path 87"
                              d="M120.454,280H104.5a.5.5,0,0,0,0,1h15.957a.5.5,0,0,0,0-1Z"
                              transform="translate(-103.998 -279.997)"
                              fill="#fff"
                            />
                          </g>
                        </g>
                        <g
                          id="Group_120"
                          data-name="Group 120"
                          transform="translate(73.993 20.445)"
                        >
                          <g
                            id="Group_119"
                            data-name="Group 119"
                            transform="translate(0)"
                          >
                            <path
                              id="Path_88"
                              data-name="Path 88"
                              d="M120.454,328H104.5a.5.5,0,1,0,0,1h15.957a.5.5,0,1,0,0-1Z"
                              transform="translate(-103.998 -327.997)"
                              fill="#fff"
                            />
                          </g>
                        </g>
                        <g
                          id="Group_122"
                          data-name="Group 122"
                          transform="translate(73.993 23.436)"
                        >
                          <g
                            id="Group_121"
                            data-name="Group 121"
                            transform="translate(0)"
                          >
                            <path
                              id="Path_89"
                              data-name="Path 89"
                              d="M120.454,376H104.5a.5.5,0,1,0,0,1h15.957a.5.5,0,1,0,0-1Z"
                              transform="translate(-103.998 -375.997)"
                              fill="#fff"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                    <p ref={pRef} className="hedden">
                      Menus
                    </p>
                  </Link>
                </li>
                <li className="menu">
                  <Link to="/orders">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28.027"
                      viewBox="0 0 28 28.027"
                    >
                      <g id="checklist" transform="translate(-0.251)">
                        <path
                          id="Path_90"
                          data-name="Path 90"
                          d="M61.438,143.836a.845.845,0,0,0,1.168-.068l2.055-2.345a.82.82,0,0,0-1.235-1.08l-1.506,1.718-.4-.365a.82.82,0,1,0-1.1,1.216Z"
                          transform="translate(-56.618 -132.402)"
                          fill="#fff"
                        />
                        <path
                          id="Path_91"
                          data-name="Path 91"
                          d="M172.343,182.345h-4.735a.82.82,0,1,0,0,1.639h4.735a.82.82,0,1,0,0-1.639Z"
                          transform="translate(-157.427 -172.37)"
                          fill="#fff"
                        />
                        <path
                          id="Path_92"
                          data-name="Path 92"
                          d="M70.37,244.5H59.735a.82.82,0,1,0,0,1.639H70.37a.82.82,0,1,0,0-1.639Z"
                          transform="translate(-55.454 -231.126)"
                          fill="#fff"
                        />
                        <path
                          id="Path_93"
                          data-name="Path 93"
                          d="M61.438,315.616a.845.845,0,0,0,1.168-.068l2.055-2.345a.82.82,0,0,0-1.235-1.08l-1.506,1.718-.4-.365a.82.82,0,1,0-1.1,1.216Z"
                          transform="translate(-56.618 -294.785)"
                          fill="#fff"
                        />
                        <path
                          id="Path_94"
                          data-name="Path 94"
                          d="M172.343,354.07h-4.735a.82.82,0,1,0,0,1.639h4.735a.82.82,0,1,0,0-1.639Z"
                          transform="translate(-157.427 -334.702)"
                          fill="#fff"
                        />
                        <path
                          id="Path_95"
                          data-name="Path 95"
                          d="M70.37,415.337H59.735a.82.82,0,1,0,0,1.639H70.37a.82.82,0,1,0,0-1.639Z"
                          transform="translate(-55.454 -392.617)"
                          fill="#fff"
                        />
                        <path
                          id="Path_96"
                          data-name="Path 96"
                          d="M26.249,0H10.625a1.433,1.433,0,0,0-.5.1A2.7,2.7,0,0,0,9.615.05a2.674,2.674,0,0,0-2.53,1.811H6.208A1.171,1.171,0,0,0,5.041,2.952H2.147a1.9,1.9,0,0,0-1.9,1.894V26.133a1.9,1.9,0,0,0,1.9,1.894H17.082a1.9,1.9,0,0,0,1.831-1.4h7.474a2.034,2.034,0,0,0,1.864-2V2a2,2,0,0,0-2-2ZM6.678,3.5H7.765a.82.82,0,0,0,.82-.8,1.029,1.029,0,0,1,2.058,0,.82.82,0,0,0,.82.8h1.087v.9H6.678Zm10.66,22.633a.256.256,0,0,1-.255.255H2.147a.256.256,0,0,1-.255-.255V4.847a.256.256,0,0,1,.255-.255h2.89v.174A1.278,1.278,0,0,0,6.315,6.042h6.6a1.278,1.278,0,0,0,1.278-1.276V4.592h2.89a.256.256,0,0,1,.255.255Zm9.272-1.506a.359.359,0,0,1-.318.357l-.024,0H18.979V4.847a1.9,1.9,0,0,0-1.9-1.894H14.188a1.181,1.181,0,0,0-1.177-1.092h-.867c-.025-.075-.055-.149-.087-.221H26.249a.361.361,0,0,1,.36.36Z"
                          fill="#fff"
                        />
                      </g>
                    </svg>
                    <span ref={orderRef} className="hedden">
                      Orders
                    </span>
                  </Link>
                </li>
                <li className="menu">
                  <Link to="/users">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="27.533"
                      height="19.273"
                      viewBox="0 0 27.533 19.273"
                    >
                      <path
                        id="users-solid"
                        d="M4.13,40.26a2.753,2.753,0,1,0-2.753-2.753A2.756,2.756,0,0,0,4.13,40.26Zm19.273,0a2.753,2.753,0,1,0-2.753-2.753A2.756,2.756,0,0,0,23.4,40.26Zm1.377,1.377H22.026a2.745,2.745,0,0,0-1.94.8,6.293,6.293,0,0,1,3.231,4.706h2.839a1.375,1.375,0,0,0,1.377-1.377V44.39A2.756,2.756,0,0,0,24.779,41.636Zm-11.013,0a4.818,4.818,0,1,0-4.818-4.818A4.816,4.816,0,0,0,13.766,41.636Zm3.3,1.377h-.357a6.652,6.652,0,0,1-5.894,0h-.357a4.957,4.957,0,0,0-4.956,4.956v1.239a2.065,2.065,0,0,0,2.065,2.065h12.39a2.065,2.065,0,0,0,2.065-2.065V47.969A4.957,4.957,0,0,0,17.07,43.013Zm-9.624-.576a2.745,2.745,0,0,0-1.94-.8H2.753A2.756,2.756,0,0,0,0,44.39v1.377a1.375,1.375,0,0,0,1.377,1.377H4.212a6.309,6.309,0,0,1,3.235-4.706Z"
                        transform="translate(0 -32)"
                        fill="#fff"
                      />
                    </svg>
                    <span ref={userRef} className="hedden">
                      Users
                    </span>
                  </Link>
                </li>
                <li className="menu" onClick={onLoGout}>
                  <Link>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28.452"
                      viewBox="0 0 28 28.452"
                    >
                      <path
                        id="power-off-solid"
                        d="M30.129,3.054A14,14,0,1,1,13.86,3.06a1.359,1.359,0,0,1,1.976.435l.892,1.586a1.354,1.354,0,0,1-.373,1.75,9.483,9.483,0,1,0,11.285-.006,1.347,1.347,0,0,1-.367-1.744l.892-1.586A1.353,1.353,0,0,1,30.129,3.054ZM24.258,14.9V1.355A1.352,1.352,0,0,0,22.9,0H21.1a1.352,1.352,0,0,0-1.355,1.355V14.9A1.352,1.352,0,0,0,21.1,16.258H22.9A1.352,1.352,0,0,0,24.258,14.9Z"
                        transform="translate(-8)"
                        fill="#fff"
                      />
                    </svg>
                    <span ref={logRef} className="hedden">
                      Logout
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    );
}

export default Header;
