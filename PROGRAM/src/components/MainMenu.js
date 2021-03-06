import React from "react";
import {NavLink} from 'react-router-dom';

import './MainMenu.css';

export const MainMenu = () => {
    return (
        <div>
            <div id="mainmenu">
                <ul>
                    <li className="exp-home"><NavLink to='/' exact className="exp-home-a" activeClassName={'active-link'}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             viewBox="-110 -170 800 711">
                            <path
                                d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"/>
                        </svg>
                        <span>ГЛАВНАЯ</span></NavLink></li>
                    <li className="exp-new" ><NavLink to='/create' className="exp-new-a" activeClassName={'active-link'}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             viewBox="-140 -250 800 800">
                            <path
                                d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z"/>
                        </svg>
                        <span>НОВЫЙ</span></NavLink></li>
                    <li className="exp-open"><NavLink to='/open' className="exp-open-a" activeClassName={'active-link'}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             viewBox="-140 -290 800 800">
                            <path
                                d="M512 144v288c0 26.5-21.5 48-48 48h-416C21.5 480 0 458.5 0 432v-352C0 53.5 21.5 32 48 32h160l64 64h192C490.5 96 512 117.5 512 144z"/>
                        </svg>
                        <span>ОТКРЫТЬ</span></NavLink></li>
                    <li className="exp-edit"><NavLink to='/edit' className="exp-edit-a" activeClassName={'active-link'}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             viewBox="-140 -250 800 800">
                            <path
                                d="M362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32zM421.7 220.3L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3z"/>
                        </svg>
                        <span>ИЗМЕНИТЬ</span></NavLink></li>
                    <li className="exp-results"><NavLink to='/graphics' className="exp-results-a" activeClassName={'active-link'}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             viewBox="-170 -380 800 914">
                            <path
                                d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM128 224C110.3 224 96 238.3 96 256V352C96 369.7 110.3 384 128 384C145.7 384 160 369.7 160 352V256C160 238.3 145.7 224 128 224zM192 352C192 369.7 206.3 384 224 384C241.7 384 256 369.7 256 352V160C256 142.3 241.7 128 224 128C206.3 128 192 142.3 192 160V352zM320 288C302.3 288 288 302.3 288 320V352C288 369.7 302.3 384 320 384C337.7 384 352 369.7 352 352V320C352 302.3 337.7 288 320 288z"/>
                        </svg>
                        <span>ГРАФИКИ</span></NavLink></li>
                    <li className="exp-tables"><NavLink to='/tables' className="exp-tables-a" activeClassName={'active-link'}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             viewBox="-150 -270 800 800">
                            <path
                                d="M448 32C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM224 256V160H64V256H224zM64 320V416H224V320H64zM288 416H448V320H288V416zM448 256V160H288V256H448z"/>
                        </svg>
                        <span>ТАБЛИЦЫ</span></NavLink></li>
                </ul>
            </div>
            <div id="divider"></div>
        </div>
    )
}


