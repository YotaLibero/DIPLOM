import React, {Fragment, useState} from "react";
import PropTypes from "prop-types";

import Portal from '../components/Portal';
import Button from "../components/Button";
import './modalswin.css';
import Input from "../components/Input";
import Select from 'react-select';
import {getValue} from "@testing-library/user-event/dist/utils";


const options = [
    // могу предположить, что можно будет спокойно обращаться к БД и заменить позже эти стат значения на запрос к БД
    {
        value: 'Generator 0', // для БД
        label: 'Generator 0' // то, что мы видим (логично)
    },
    {
        value: 'Generator 1', // для БД
        label: 'Generator 1' // то, что мы видим (логично)
    },
    {
        value: 'Generator 2',
        label: 'Generator 2'
    },
    {
        value: 'Generator 3',
        label: 'Generator 3'
    },
    {
        value: 'Generator 4',
        label: 'Generator 4'
    },
    {
        value: 'Generator 5',
        label: 'Generator 5'
    },
    {
        value: 'Generator 6',
        label: 'Generator 6'
    },
    {
        value: 'Generator 7',
        label: 'Generator 7'
    },
    {
        value: 'Generator 8',
        label: 'Generator 8'
    },
]

const Choice_Gen = ({
                     title2, isOpen2, onCancel2, onSubmit2,
                 }) => {

    const [currentGenerator, setCurrentGenerator] = useState("Generator 0")

    const getValue = () => {
        return currentGenerator ? options.find(c => c.value === currentGenerator) : ''
    }
    const OnChange = (newValue: any) => {
        setCurrentGenerator(newValue.value)
    }

    return(
        <>
            { isOpen2 &&
                <Portal>
                    <div className="modalOverlay1">
                        <div className="modalWindow1">
                            <span className="close1" onClick={onCancel2}>&times;</span>
                            <div className="modalBody1">
                                <div id="gen_parameters">
                                    <div id="frame7-1">
                                        <table>
                                            <tr>
                                                <td><h3>Выбрать генератор: </h3></td>
                                                <div className="select-box">
                                                    <td>
                                                        <Select
                                                            classNamePrefix='custom-select'
                                                            onChange={OnChange}
                                                            value={getValue()}
                                                            options={options}
                                                        />
                                                    </td>
                                                </div>
                                            </tr>
                                        </table>
                                    </div>
                                    <div id="frame-4-1">
                                        <table>
                                            <tr className={'parameters_frame'}>
                                                <h2 className={'parameters_h2'}>Построение модели АРСС</h2>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div id="frame-4-5-1">
                                                        <h2 className={'par-el'}>Модель авторегрессии</h2>
                                                        <h3>Порядок:</h3>
                                                        <div id="AR_0" className="form_radio_btn">
                                                            <input id="radio-ar-0"
                                                                   onChange='showOrHideAR("radio-1", "PHI_1", "PHI_2", "PHI_3", "Y_AR_1","Y_AR_2", "Y_AR_3", "MA_0")'
                                                                   type="radio" name="radio-1"
                                                                   value="0"/>
                                                            <label htmlFor="radio-ar-0">0</label>
                                                        </div>
                                                        <div className="form_radio_btn">
                                                            <input id="radio-ar-1"
                                                                   onChange='showOrHideAR("radio-1", "PHI_1", "PHI_2", "PHI_3", "Y_AR_1","Y_AR_2", "Y_AR_3", "MA_0")'
                                                                   type="radio" name="radio-1"
                                                                   value="1" checked="checked"/>
                                                            <label htmlFor="radio-ar-1">1</label>
                                                        </div>
                                                        <div className="form_radio_btn">
                                                            <input id="radio-ar-2"
                                                                   onChange='showOrHideAR("radio-1", "PHI_1", "PHI_2", "PHI_3", "Y_AR_1","Y_AR_2", "Y_AR_3","MA_0")'
                                                                   type="radio" name="radio-1"
                                                                   value="2"/>
                                                            <label htmlFor="radio-ar-2">2</label>
                                                        </div>
                                                        <div className="form_radio_btn">
                                                            <input id="radio-ar-3"
                                                                   onChange='showOrHideAR("radio-1", "PHI_1", "PHI_2", "PHI_3", "Y_AR_1","Y_AR_2", "Y_AR_3", "MA_0")'
                                                                   type="radio" name="radio-1"
                                                                   value="3"/>
                                                            <label htmlFor="radio-ar-3">3</label>
                                                        </div>
                                                        <div className="AR">
                                                            <table className={'parameters_elements'}>
                                                                <tr>
                                                                    <td>
                                                                        <tr>
                                                                            <td><label id="PHI_1"
                                                                                       className="param_lab">AR1:</label>
                                                                            </td>
                                                                            <td><Input type="number" className="param_tex"
                                                                                       name="phi_1" defaultValue={0.0} readOnly />
                                                                            </td>
                                                                            <td><label id="PHI_2"
                                                                                       className="param_lab">AR2:</label>
                                                                            </td>
                                                                            <td><Input type="number" className="param_tex"
                                                                                       name="firstname" defaultValue={0.0} readOnly />
                                                                            </td>
                                                                            <td><label id="PHI_3"
                                                                                       className="param_lab">AR3:</label>
                                                                            </td>
                                                                            <td><Input type="number" className="param_tex"
                                                                                       name="firstname" defaultValue={0.0} readOnly />
                                                                            </td>
                                                                        </tr>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                        <h3>Коэффициент(-ы) на начало:</h3>
                                                        <div className="AR">
                                                            <table className={'parameters_elements'}>
                                                                <tr>
                                                                    <td>
                                                                        <tr>
                                                                            <td><label id="Y_AR_1"
                                                                                       className="param_lab-1">Y_1:</label>
                                                                            </td>
                                                                            <td><Input type="number"
                                                                                       className="param_tex-1"
                                                                                       name="firstname" defaultValue={0.0} readOnly />
                                                                            </td>
                                                                            <td><label id="Y_AR_2"
                                                                                       className="param_lab-1">Y_2:</label>
                                                                            </td>
                                                                            <td><Input type="number"
                                                                                       className="param_tex-1"
                                                                                       name="firstname" defaultValue={0.0} readOnly />
                                                                            </td>
                                                                            <td><label id="Y_AR_3"
                                                                                       className="param_lab-1">Y_3:</label>
                                                                            </td>
                                                                            <td><Input type="number"
                                                                                       className="param_tex-1"
                                                                                       name="firstname" defaultValue={0.0} readOnly />
                                                                            </td>
                                                                        </tr>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div id="frame-4-6-1">
                                                        <h2 className={'par-el'}>Модель скользящего среднего</h2>
                                                        <h3>Порядок:</h3>
                                                        <div id="MA_0" className="form_radio_btn">
                                                            <input id="radio-ma-0"
                                                                   onChange='showOrHideMA("radio-2", "TETA_1", "TETA_2", "Y_MA_1", "AR_0")'
                                                                   type="radio" name="radio-2"
                                                                   value="0" checked="checked"/>
                                                            <label htmlFor="radio-ma-0">0</label>
                                                        </div>
                                                        <div className="form_radio_btn">
                                                            <input id="radio-ma-1"
                                                                   onChange='showOrHideMA("radio-2", "TETA_1", "TETA_2", "Y_MA_1", "AR_0")'
                                                                   type="radio" name="radio-2"
                                                                   value="1"/>
                                                            <label htmlFor="radio-ma-1">1</label>
                                                        </div>
                                                        <div className="form_radio_btn">
                                                            <input id="radio-ma-2"
                                                                   onChange='showOrHideMA("radio-2", "TETA_1", "TETA_2", "Y_MA_1", "AR_0")'
                                                                   type="radio" name="radio-2"
                                                                   value="2"/>
                                                            <label htmlFor="radio-ma-2">2</label>
                                                        </div>
                                                        <div className="MA">
                                                            <table className={'parameters_elements'}>
                                                                <tr>
                                                                    <td>
                                                                        <tr>
                                                                            <td><label id="TETA_1"
                                                                                       className="param_lab">MA1:</label>
                                                                            </td>
                                                                            <td><Input type="number" className="param_tex"
                                                                                       name="firstname" defaultValue={0.0} readOnly /></td>
                                                                            <td><label id="TETA_2"
                                                                                       className="param_lab">MA2:</label>
                                                                            </td>
                                                                            <td><Input type="number" className="param_tex"
                                                                                       name="firstname" defaultValue={0.0} readOnly /></td>
                                                                        </tr>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                        <h3>Коэффициент(-ы) на начало:</h3>
                                                        <div className="AR">
                                                            <ul>
                                                                <li>
                                                                    <table>
                                                                        <tr>
                                                                            <td><label id="Y_MA_1"
                                                                                       className="param_lab-1">Y_1:</label>
                                                                            </td>
                                                                            <td><Input type="text"
                                                                                       className="param_tex-1"
                                                                                       name="firstname" defaultValue={0.0} readOnly /></td>
                                                                        </tr>
                                                                    </table>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <h3>Расчёт ошибки прогноза:</h3>
                                                        <div className="MA">
                                                            <table className={'parameters_elements-1'}>
                                                                <tr>
                                                                    <td>
                                                                        <tr>
                                                                            <td><label className="param_lab-2">Мат
                                                                                ожидание: </label></td>
                                                                            <td><Input type="number" className="param_tex"
                                                                                       name="firstname" defaultValue={0.0} readOnly /></td>
                                                                            <td><label
                                                                                className="param_lab-2-1">Дисперсия: </label>
                                                                            </td>
                                                                            <td><Input type="number" className="param_tex"
                                                                                       name="firstname" defaultValue={0.0} readOnly /></td>
                                                                        </tr>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div id="frame-5-1">
                                        <table>
                                            <tr>
                                                <td>
                                                    <div id="frame-5-7-1">
                                                        <h2 className={'par-el'}>КОЭФФИЦИЕНТЫ ТРЕНДА</h2>
                                                        <div className="trend-inline">
                                                            <ul>
                                                                <li>
                                                                    <table>
                                                                        <tr>
                                                                            <td><label className="param_lab">a:</label>
                                                                            </td>
                                                                            <td><Input type="number" className="param_tex"
                                                                                       name="firstname" defaultValue={0.0} readOnly /></td>
                                                                        </tr>
                                                                    </table>
                                                                </li>
                                                                <li>
                                                                    <table>
                                                                        <tr>
                                                                            <td><label className="param_lab">b:</label>
                                                                            </td>
                                                                            <td><Input type="number" className="param_tex"
                                                                                       name="firstname" defaultValue={0.0} readOnly /></td>
                                                                        </tr>
                                                                    </table>
                                                                </li>
                                                                <li>
                                                                    <table>
                                                                        <tr>
                                                                            <td><label className="param_lab">c:</label>
                                                                            </td>
                                                                            <td><Input type="number" className="param_tex"
                                                                                       name="firstname" defaultValue={0.0} readOnly /></td>
                                                                        </tr>
                                                                    </table>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div id="frame-5-8-1">
                                                        <h2 className={'par-el'}>ОБЩИЕ ПАРАМЕТРЫ</h2>
                                                        <table className={'parameters_elements'}>
                                                            <tr>
                                                                <td>
                                                                    <tr className={'n1'}>
                                                                        <td><label className="param_lab">СКО рядов
                                                                            стационарной составляющей:</label></td>
                                                                        <td><Input type="number" className="param_tex"
                                                                                   name="firstname" defaultValue={0.0} readOnly /></td>
                                                                    </tr>
                                                                    <tr className={'n1'}>
                                                                        <td><label className="param_lab">Начальное
                                                                            значение ступеньки:</label></td>
                                                                        <td><Input type="number" className="param_tex"
                                                                                   name="firstname" defaultValue={0.0} readOnly /></td>
                                                                    </tr>
                                                                    <tr className={'n1'}>
                                                                        <td><label className="param_lab">СКО без
                                                                            выбросов:</label></td>
                                                                        <td><Input type="number" className="param_tex"
                                                                                   name="firstname" defaultValue={0.0} readOnly /></td>
                                                                    </tr>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>

                                    <a className="closing-button-4" onClick={onSubmit2}><span>Добавить генератор</span></a>
                                </div>
                            </div>
                            <div className="modalFooter1">
                            </div>
                        </div>
                    </div>
                </Portal>
            }
        </>
    )
}

Choice_Gen.propTypes = {
    title2: PropTypes.string,
    isOpen2: PropTypes.bool,
    onCancel2: PropTypes.func,
    onSubmit2: PropTypes.func,
};

Choice_Gen.defaultProps = {
    title2: 'Modal title',
    isOpen2: false,
    onCancel2: () => {},
    onSubmit2: () => {},
};


export default Choice_Gen;