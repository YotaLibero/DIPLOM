import React, {Fragment, useState} from "react";
import PropTypes from "prop-types";

import Portal from '../components/Portal';
import Button from "../components/Button";
import './modalswin.css';
import Input from "../components/Input";
import Select from 'react-select';
import {getValue} from "@testing-library/user-event/dist/utils";
import Datepicker from "../components/datepicker";
import NumGen from '../pages/CreateWin'
import AllLineCharts from "../charts/AllLineCharts";

const options = [
    // могу предположить, что можно будет спокойно обращаться к БД и заменить позже эти стат значения на запрос к БД
    {
        value: 4, // для БД
        label: '4-х генераторов' // то, что мы видим (логично)
    },
    {
        value: 5, // для БД
        label: '5-ти генераторов' // то, что мы видим (логично)
    },]

const Generation = ({
                     title4, isOpen4, onCancel4, onSubmit4,
                 }) => {

    const [currentChoiceGen, setCurrentChoiceGen] = useState("4-х генераторов")

    const getValue = () => {
        return currentChoiceGen ? options.find(c => c.value === currentChoiceGen) : ''
    }
    const OnChange = (newValue: any) => {
        setCurrentChoiceGen(newValue.value)
    }

    return (
        <>
            {isOpen4 &&
                <Portal>
                    <div className="modalOverlay4">
                        <div className="modalWindow4">
                            <span className="close4" onClick={onCancel4}>&times;</span>
                            <div id="saveframe">
                                <table>
                                <div id="frame141">
                                    <tr>
                                        <table>
                                            <tr>
                                        <td>
                                            <label className="save_lab">
                                                Название эксперимента:
                                                <input type="text" className="save_tex" name="firstname"/>
                                            </label>
                                        </td>
                                            </tr>
                                        </table>
                                        <td>
                                            <table cellSpacing="0" id="frame14-1">
                                                <tr>
                                                    <td id="fr-14-1">
                                                        <label htmlFor={'choice_folder'} className="closing-button-2"><span>Выбрать папку</span>
                                                            <Input className={'choice_folder'} type="file" webkitdirectory onChange={() => {
                                                                document.getElementById('text-field__input-1').value = document.getElementById('choice_folder').value;
                                                            }} />
                                                        </label>
                                                    </td>
                                                    <td id="fr-14-2">
                                                        <div className="text-field-11">
                                                            <input className="text-field__input-11" type="text" name="login" id="login"
                                                                   placeholder="Login" value="Путь к папке" readOnly />
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <div className="generations">
                                        <table>
                                            <tr className={'generations_parameters'}>
                                                <table>
                                                <td className={'namegens'}>Сгенерировать ряды для: </td>
                                                <td>
                                                    <div className="select-box">
                                                        <td>
                                                            <Select
                                                                classNamePrefix='custom-select-for-gens'
                                                                onChange={OnChange}
                                                                value={getValue()}
                                                                options={options}
                                                            />
                                                        </td>
                                                    </div>
                                                </td>
                                                </table>
                                                <td>
                                                    <tr className={'generations_parameters'}>
                                                        <td className={'namegens'}>Автоматически сгенерировать коэффициенты авторегрессии:</td>
                                                        <td><label className="switch">
                                                            <input type="checkbox"/>
                                                            <span className="slider round"></span>
                                                        </label></td>
                                                    </tr>
                                                    <tr></tr>
                                                    <tr className={'generations_parameters'}>
                                                        <td className={'namegenstacts'}>Количество тактов:</td>
                                                        <td><Input type="number" className="param_tex"
                                                                   name="firstname" defaultValue={0} /></td>
                                                    </tr>
                                                </td>
                                            </tr>
                                        </table>
                                        <table>
                                            <tr>
                                                <td>
                                                    <tr>
                                                        <td><label id="PHI_1"
                                                                   className="param_lab">СКО остаточной дисперсии АРСС:</label>
                                                        </td>
                                                    </tr>
                                                </td>
                                                <td id={'padding-table'}></td>
                                                <td>
                                                    <tr>
                                                        <td><label id="ar_1"
                                                                   className="param_lab">AR1:</label>
                                                        </td>
                                                        <td><Input type="number" className="param_tex-ar"
                                                                   name="phi_1" defaultValue={0.0}/>
                                                        </td>
                                                        <td><label id="ar_2"
                                                                   className="param_lab">AR2:</label>
                                                        </td>
                                                        <td><Input type="number" className="param_tex-ar"
                                                                   name="firstname" defaultValue={0.0}/>
                                                        </td>
                                                        <td><label id="ar_3"
                                                                   className="param_lab">AR3:</label>
                                                        </td>
                                                        <td><Input type="number" className="param_tex-ar"
                                                                   name="firstname" defaultValue={0.0}/>
                                                        </td>
                                                        <td><label id="ar_4"
                                                                   className="param_lab">AR4:</label>
                                                        </td>
                                                        <td><Input type="number" className="param_tex-ar"
                                                                   name="firstname" defaultValue={0.0}/>
                                                        </td>
                                                        <td><label id="ar_5"
                                                                   className="param_lab">AR5:</label>
                                                        </td>
                                                        <td><Input type="number" className="param_tex-ar"
                                                                   name="firstname" defaultValue={0.0}/>
                                                        </td>
                                                    </tr>
                                                </td>
                                            </tr>
                                        </table>
                                        <table>
                                            <tr>
                                                <td><label id="ar_1"
                                                           className="param_lab">SRm1:</label>
                                                </td>
                                                <td><Input type="number" className="param_tex-ar"
                                                           name="phi_1" defaultValue={0.0}/>
                                                </td>
                                                <td><label id="ar_2"
                                                           className="param_lab">SRm2:</label>
                                                </td>
                                                <td><Input type="number" className="param_tex-ar"
                                                           name="firstname" defaultValue={0.0}/>
                                                </td>
                                                <td><label id="ar_3"
                                                           className="param_lab">SRm3:</label>
                                                </td>
                                                <td><Input type="number" className="param_tex-ar"
                                                           name="firstname" defaultValue={0.0}/>
                                                </td>
                                            </tr>
                                            <tr></tr>
                                            <tr>
                                                <td><label id="ar_4"
                                                           className="param_lab">SRm4:</label>
                                                </td>
                                                <td><Input type="number" className="param_tex-ar"
                                                           name="firstname" defaultValue={0.0}/>
                                                </td>
                                                <td><label id="ar_5"
                                                           className="param_lab">SRm5:</label>
                                                </td>
                                                <td><Input type="number" className="param_tex-ar"
                                                           name="firstname" defaultValue={0.0}/>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </table>
                            </div>
                            <table>
                                <tr>

                            <div id={'generation-1'}>
                                <table>
                                    <tr className={'generations_parameters'}>
                                        <td className={'namegens params'}><h2 className={'par-el'}>Тренды:</h2></td>
                                        <td><label className="switch">
                                            <input type="checkbox"/>
                                            <span className="slider round"></span>
                                        </label></td>
                                    </tr>
                                </table>
                                <table>
                                    <tr>
                                        <div className="trend-inline">
                                                    <table>
                                                        <tr>
                                                            <td><label className="param_lab">a:</label>
                                                            </td>
                                                            <td><Input type="number" className="param_tex"
                                                                       name="firstname" defaultValue={0.0}/></td>
                                                            <td><label className="param_lab">b:</label>
                                                            </td>
                                                            <td><Input type="number" className="param_tex"
                                                                       name="firstname" defaultValue={0.0}/></td>
                                                            <td><label className="param_lab">c:</label>
                                                            </td>
                                                            <td><Input type="number" className="param_tex"
                                                                       name="firstname" defaultValue={0.0}/></td>
                                                        </tr>
                                                    </table>
                                        </div>
                                    </tr>
                                </table>
                            </div>
                                </tr>
                            <tr>
                            <div id={'generation-2'}>
                                <table>
                                    <tr className={'generations_parameters'}>
                                        <td className={'namegens params'}><h2 className={'par-el'}>Ступеньки:</h2></td>
                                        <td><label className="switch">
                                            <input type="checkbox"/>
                                            <span className="slider round"></span>
                                        </label></td>
                                    </tr>
                                </table>
                                <table>
                                    <tr>
                                        <div className="trend-inline">
                                            <table>
                                                <tr>
                                                    <td><label className="param_lab">pr:</label>
                                                    </td>
                                                    <td><Input type="number" className="param_tex"
                                                               name="firstname" defaultValue={0.0}/></td>
                                                    <td><label className="param_lab">sigma:</label>
                                                    </td>
                                                    <td><Input type="number" className="param_tex"
                                                               name="firstname" defaultValue={0.0}/></td>
                                                </tr>
                                            </table>
                                        </div>
                                    </tr>
                                </table>
                            </div>
                            </tr>
                            <tr>
                            <div id={'generation-3'}>
                                <table>
                                    <tr className={'generations_parameters'}>
                                        <td className={'namegens params'}><h2 className={'par-el'}>Выбросы:</h2></td>
                                        <td><label className="switch">
                                            <input type="checkbox"/>
                                            <span className="slider round"></span>
                                        </label></td>
                                    </tr>
                                </table>
                                <table>
                                    <tr>
                                        <div className="trend-inline">
                                            <table>
                                                <tr>
                                                    <td><label className="param_lab">Количество выборсов:</label>
                                                    </td>
                                                    <td><Input type="number" className="param_tex"
                                                               name="firstname" defaultValue={0.0}/></td>
                                                </tr>
                                                <tr>
                                                    <td><label className="param_lab">sigma:</label>
                                                    </td>
                                                    <td><Input type="number" className="param_tex"
                                                               name="firstname" defaultValue={0.0}/></td>
                                                </tr>
                                            </table>
                                        </div>
                                    </tr>
                                </table>
                            </div>
                            </tr>
                            </table>
                            <Button className="generation_btn-1" onClick={onCancel4} ><span>Сгенерировать</span></Button>
                            <table>
                                <tr>
                                    <div id={'frame-gens'}><AllLineCharts /></div>
                                </tr>
                            </table>
                            <Button onClick={() => {
                                console.log();
                                if (currentChoiceGen === 4) {
                                    document.getElementById("frame02").style.display = "block";
                                    document.getElementById("frame02").style.height = "275px";
                                    document.getElementById("GEN_1").style.display = "block";
                                    document.getElementById("GEN_2").style.display = "block";
                                    document.getElementById("GEN_3").style.display = "block";
                                    document.getElementById("GEN_4").style.display = "block";
                                    document.getElementById("GEN_5").style.display = "none";

                                    document.getElementById("r-frame0").style.display = "block";
                                    document.getElementById("r-frame0").style.height = "593px";
                                    document.getElementById("r-frame1").style.display = "block";
                                    document.getElementById("r-frame2").style.display = "block";
                                    document.getElementById("r-frame3").style.display = "block";
                                    document.getElementById("r-frame4").style.display = "block";
                                    document.getElementById("r-frame5").style.display = "none";
                                }
                                if (currentChoiceGen === 5) {
                                    document.getElementById("frame02").style.display = "block";
                                    document.getElementById("frame02").style.height = "340px";
                                    document.getElementById("GEN_1").style.display = "block";
                                    document.getElementById("GEN_2").style.display = "block";
                                    document.getElementById("GEN_3").style.display = "block";
                                    document.getElementById("GEN_4").style.display = "block";
                                    document.getElementById("GEN_5").style.display = "block";

                                    document.getElementById("r-frame0").style.display = "block";
                                    document.getElementById("r-frame0").style.height = "740px";
                                    document.getElementById("r-frame1").style.display = "block";
                                    document.getElementById("r-frame2").style.display = "block";
                                    document.getElementById("r-frame3").style.display = "block";
                                    document.getElementById("r-frame4").style.display = "block";
                                    document.getElementById("r-frame5").style.display = "block";
                                }
                                document.getElementById("frame04").style.display = "none";
                                document.getElementById("frame03").style.display = "none";
                                onSubmit4();}} className="generation_btn"><span>Подтвердить</span></Button>
                        </div>
                        <div className="modalFooter4">
                        </div>
                    </div>
                </Portal>
            }
        </>
    )
}

Generation.propTypes = {
    title4: PropTypes.string,
    isOpen4: PropTypes.bool,
    onCancel4: PropTypes.func,
    onSubmit4: PropTypes.func,
};

Generation.defaultProps = {
    title4: 'Modal title',
    isOpen4: false,
    onCancel4: () => {
    },
    onSubmit4: () => {
    },
};


export default Generation;

