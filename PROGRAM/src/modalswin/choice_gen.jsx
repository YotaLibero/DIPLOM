import React, {Fragment} from "react";
import PropTypes from "prop-types";

import Portal from '../components/Portal';
import Button from "../components/Button";
import './modalswin.css';
import Input from "../components/Input";

const Choice_Gen = ({
                     title2, isOpen2, onCancel2, onSubmit2,
                 }) => {

    return(
        <>
            { isOpen2 &&
                <Portal>
                    <div className="modalOverlay1">
                        <div className="modalWindow1">
                            <span className="close1" onClick={onCancel2}>&times;</span>
                            <div className="modalBody1">
                                <h1>СПАСИ МЕНЯ...</h1>
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