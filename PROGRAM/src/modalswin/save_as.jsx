import React, {Fragment, useState} from "react";
import PropTypes from "prop-types";

import Portal from '../components/Portal';
import Button from "../components/Button";
import './modalswin.css';
import Input from "../components/Input";
import Select from 'react-select';
import {getValue} from "@testing-library/user-event/dist/utils";
import Datepicker from "../components/datepicker";


const Save_As = ({
                     title3, isOpen3, onCancel3, onSubmit3,
                 }) => {

    return (
        <>
            {isOpen3 &&
                <Portal>
                    <div className="modalOverlay3">
                        <div className="modalWindow3">
                            <span className="close3" onClick={onCancel3}>&times;</span>
                            <div id="saveframe">
                                <div id="frame14">
                                    <label className="save_lab">
                                        Название эксперимента:
                                        <input type="text" className="save_tex" name="firstname"/>
                                    </label>
                                    <table cellSpacing="0" id="frame14-1">
                                        <tr>
                                            <td id="fr-14-1">
                                                <Datepicker />
                                            </td>
                                            <td id="fr-14-2">
                                                <label htmlFor={'choice_folder'} className="closing-button-2"><span>Выбрать папку</span>
                                                    <Input className={'choice_folder'} type="file" webkitdirectory onChange={() => {
                                                        document.getElementById('text-field__input-1').value = document.getElementById('choice_folder').value;
                                                    }} />
                                                </label>

                                            </td>
                                        </tr>
                                    </table>
                                    <div className="text-field-1">
                                        <input className="text-field__input-1" type="text" name="login" id="login"
                                               placeholder="Login" value="Путь к папке" readOnly />
                                    </div>
                                    <div className="checkbox1">
                                        <input className="checkbox1__input" type="checkbox" id="checkbox_1" />
                                            <label className="checkbox1__label" htmlFor="checkbox_1">Выгрузить данные
                                                эксперимента в
                                                папку</label>
                                    </div>
                                </div>
                                <Button onClick={onSubmit3} className="save_as_btn"><span>Сохранить</span></Button>
                            </div>
                        </div>
                        <div className="modalFooter3">
                        </div>
                    </div>
                </Portal>
            }
        </>
    )
}

Save_As.propTypes = {
    title3: PropTypes.string,
    isOpen3: PropTypes.bool,
    onCancel3: PropTypes.func,
    onSubmit3: PropTypes.func,
};

Save_As.defaultProps = {
    title3: 'Modal title',
    isOpen3: false,
    onCancel3: () => {
    },
    onSubmit3: () => {
    },
};


export default Save_As;

