import React, {Fragment} from "react";
import PropTypes from "prop-types";

import Portal from '../components/Portal';
import Button from "../components/Button";
import './modalswin.css';

const Parser = ({
                    title, isOpen, onCancel, onSubmit, children
}) => {

    return(
        <>
            { isOpen &&
                <Portal>
                    <div className="modalOverlay">
                        <div className="modalWindow">
                            <span className="close" onClick={onCancel}>&times;</span>
                            <div className="modalBody">
                                {children}
                            </div>
                            <div className="modalFooter">
                            </div>
                        </div>
                    </div>
                </Portal>
            }
        </>
    )
}

Parser.propTypes = {
    title: PropTypes.string,
    isOpen: PropTypes.bool,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func,
    children: PropTypes.node,
};

Parser.defaultProps = {
    title: 'Modal title',
    isOpen: false,
    onCancel: () => {},
    onSubmit: () => {},
    children: null,
};


export default Parser;