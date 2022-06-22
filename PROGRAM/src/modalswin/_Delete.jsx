import React, {Fragment, useState} from "react";
import PropTypes from "prop-types";

import Portal from '../components/Portal';
import Button from "../components/Button";
import './modalswin.css';
import Input from "../components/Input";
import Select from 'react-select';
import {getValue} from "@testing-library/user-event/dist/utils";
import Datepicker from "../components/datepicker";


const _Delete_btn = ({
                     title5, isOpen5, onCancel5, onSubmit5,
                 }) => {

    return (
        <>
            {isOpen5 &&
                <Portal>
                    <div className="modalOverlay5">
                        <div className="modalWindow5">
                            <span className="close5" onClick={onCancel5}>&times;</span>
                            <div id="daleteframe">
                                <div id="frame14">
                                    <h1>СПАСИТЕ КТО-НИБУДЬ...</h1>
                                </div>
                                <Button onClick={onSubmit5} className="save_as_btn"><span>Сохранить</span></Button>
                            </div>
                        </div>
                        <div className="modalFooter5">
                        </div>
                    </div>
                </Portal>
            }
        </>
    )
}

_Delete_btn.propTypes = {
    title5: PropTypes.string,
    isOpen5: PropTypes.bool,
    onCancel5: PropTypes.func,
    onSubmit5: PropTypes.func,
};

_Delete_btn.defaultProps = {
    title5: 'Modal title',
    isOpen5: false,
    onCancel5: () => {},
    onSubmit5: () => {},
};


export default _Delete_btn;

