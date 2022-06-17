import React, {Fragment, useState} from "react";
import PropTypes from "prop-types";

import Portal from '../components/Portal';
import Button from "../components/Button";
import './modalswin.css';
import Input from "../components/Input";
import Select from 'react-select';
import {getValue} from "@testing-library/user-event/dist/utils";
import Datepicker from "../components/datepicker";

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
                                <div id="frame141">
                                    <label className="save_lab">
                                        Название эксперимента:
                                        <input type="text" className="save_tex" name="firstname"/>
                                    </label>
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
                                    <div className="generations">
                                        <table>
                                            <tr className={'generations_parameters'}>
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
                                            </tr>
                                            <tr className={'generations_parameters'}>
                                                <td className={'namegens'}>Коэффициенты авторегрессии:</td>
                                                <td><label className="switch">
                                                    <input type="checkbox"/>
                                                    <span className="slider round"></span>
                                                </label></td>
                                            </tr>
                                            <tr className={'generations_parameters'}>
                                                <td className={'namegenstacts'}>Количество тактов:</td>
                                                <td><Input type="number" className="param_tex"
                                                           name="firstname" defaultValue={0} /></td>
                                            </tr>
                                            <tr className={'generations_parameters'}>
                                                <td className={'namegens params'}>Ступеньки:</td>
                                                <td><label className="switch">
                                                    <input type="checkbox"/>
                                                    <span className="slider round"></span>
                                                </label></td>
                                            </tr>
                                            <tr className={'generations_parameters'}>
                                                <td className={'namegens params'}>Выбросы:</td>
                                                <td><label className="switch">
                                                    <input type="checkbox"/>
                                                    <span className="slider round"></span>
                                                </label></td>
                                            </tr>
                                            <tr className={'generations_parameters'}>
                                                <td className={'namegens params'}>Тренды:</td>
                                                <td><label className="switch">
                                                    <input type="checkbox"/>
                                                    <span className="slider round"></span>
                                                </label></td>
                                            </tr>
                                            {/*<tr>*/}
                                            {/*    <td></td>*/}
                                            {/*    <td></td>*/}
                                            {/*</tr>*/}
                                        </table>
                                    </div>
                                </div>
                                <Button onClick={onSubmit4} className="generation_btn"><span>Сгенерировать</span></Button>
                            </div>
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

