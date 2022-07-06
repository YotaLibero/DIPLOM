import React, {Fragment} from 'react';
import './create.css';
import {Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
// import ReactDOM from "react-dom";

import "jquery";
import Button from "../components/Button";
import Input from "../components/Input";
import Parser from "../modalswin/parser";
import Add_Gen from "../modalswin/add_gen";
import Choice_Gen from "../modalswin/choice_gen";
import Generation from "../modalswin/generation";
// import LineChart from "../charts/LineChart";
// import {getValue} from "@testing-library/user-event/dist/utils";
// import Chart from "../charts/Chart";
// import { Chart } from "../charts/Chart";

// import { LineChart, Line } from 'recharts';
import CreateLineChart from "../charts/CreateLineCharts";
import CreateLineChart_1 from "../charts/CreateLineCharts_1";
import CreateLineChart_2 from "../charts/CreateLineCharts_2";
import CreateLineChart_3 from "../charts/CreateLineCharts_3";

import {changeFilenameOfTables, changeFilenameOfDat, changeDataForGraphs} from '../reducers/CreateExperimentReducer.js';

const importData = (e) => {
    e.preventDefault(); // Чтобы не происходила перезагрузка страницы

    const remote = window.require("@electron/remote");
    const { getCurrentWebContents, getCurrentWindow, dialog } = remote;

    const webContents = getCurrentWebContents();
    const currentWindow = getCurrentWindow();

    const file = dialog.showOpenDialogSync(currentWindow, { properties: ['openFile', 'createDirectory'] })

    if (file !== undefined) {
        
    }
    

    

    return (dispatch, getState) => {
        
        if (file === undefined) {
            dispatch(changeFilenameOfTables('Путь к файлу'));
        }
        else {
            dispatch(changeFilenameOfTables(file));
            axios.post('http://localhost:8000/excelfile', {
            filename: file[0]
        }).then(res => {
            let columns_table = res.data.columns_table;
            let sheet_data = res.data.sheet_data;
            console.log('sheet_data')
            console.log(sheet_data[1])
            let data = []
            // for (let i = 0; i < sheet_data.length; ++i) {
            //     data[i] = {}
            //     data[i].name = i
            //     data[i].Y_1 = parseFloat(sheet_data[i+1][0])
            //     data[i].Y_2 = parseFloat(sheet_data[i+1][1])
            //     data[i].Y_3 = parseFloat(sheet_data[i+1][2])
            //     data[i].Y_4 = parseFloat(sheet_data[i+1][3])
            // }


            console.log('Debug request')
            console.log(res)
            console.log(data)

        if (columns_table === 4) {
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
        if (columns_table === 5) {
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
        document.getElementById("frame03").style.display = "block";
        document.getElementById("frame04").style.display = "block";


    dispatch(changeDataForGraphs(data))
    })
        }
    }
}

const importDatFiles = (e) => {
    e.preventDefault(); // Чтобы не происходила перезагрузка страницы

    const remote = window.require("@electron/remote");
    const { getCurrentWebContents, getCurrentWindow, dialog } = remote;

    const webContents = getCurrentWebContents();
    const currentWindow = getCurrentWindow();

    const files = dialog.showOpenDialogSync(currentWindow, { 
        filters: [
            { name: 'Dat Files', extensions: ['dat'] },
            { name: 'All Files', extensions: ['*'] } ], 
        properties: ['openFile', 'createDirectory', 'multiSelections']})
    
    return (dispatch, getState) => {
        if (files === undefined) {
            dispatch(changeFilenameOfDat('Путь к файлу'));
        }
        else {
            if(files.length > 1) {
                dispatch(changeFilenameOfDat(files[0] + ' – ' + files[files.length - 1]));
            }
            else {
                dispatch(changeFilenameOfDat(files[0]));
            }
            
        }
    }
}


class CreateWin extends React.Component {

    state = {
        isOpen: false,
        isOpen1: false,
        isOpen2: false,
        isOpen4: false,
    }

    openModal = () => {this.setState({ isOpen: true });}
    handleSubmit = () => {
        console.log('Submit function!');

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

        document.getElementById("frame04").style.display = "block";
        document.getElementById('frame02').style.display = "block";
        document.getElementById('frame03').style.display = "block";
        this.setState({ isOpen: false });
    }
    handleCancel = () => {
        console.log('Cancel function!');
        this.setState({ isOpen: false });
    }


    openModal1 = () => {this.setState({ isOpen1: true });}
    handleSubmit1 = () => {
        console.log('Submit function!');
        this.setState({ isOpen1: false });
    }
    handleCancel1 = () => {
        console.log('Cancel function!');
        this.setState({ isOpen1: false });
    }


    openModal2 = () => {this.setState({ isOpen2: true });}
    handleSubmit2 = () => {
        console.log('Submit function!');
        this.setState({ isOpen2: false });
    }
    handleCancel2 = () => {
        console.log('Cancel function!');
        this.setState({ isOpen2: false });
    }

    openModal4 = () => {this.setState({ isOpen4: true });}
    handleSubmit4 = () => {
        console.log('Submit function!');
        document.getElementById('frame02').style.display = "block";
        document.getElementById('frame03').style.display = "none";
        console.log()
        this.setState({ isOpen4: false });
    }
    handleCancel4 = () => {
        console.log('Cancel function!');
        this.setState({ isOpen4: false });
    }

    render() {
        return (
            <Fragment>
                <table>
                    <tr>
                        <td id="createexp">
                            <div id="frame01">
                                <div className="fr-1">
                                     {/* <label htmlFor="excel_file"
                                           id="import_data"><span>Импорт данных</span> */}
                                        {/* <input type="file"
                                               accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                               id="excel_file" onClick={() => {
                                            console.log('Хоть что-то...')
                                        }} onChange={(e) => {
                                            const file = e.target.files[0];
                                            console.log(file);
                                            handleFile(file);
                                        }} /> */}
                                        <Button id="import_data" onClick={this.props.importData}><span>Импорт данных</span></Button>
                                    {/* </label> */}
                                    <div className="text-field">
                                        <input className="text-field__input" type="text" id="path_file"
                                               value={this.props.filenameOfTables}
                                               readOnly/>
                                    </div>
                                </div>

                                <Button className="import_data_dat" onClick={this.openModal}><span>Импорт данных из .dat файлов</span></Button>
                                <Parser isOpen={this.state.isOpen}
                                        onCancel={this.handleCancel}
                                        onSubmit={this.handleSubmit}
                                >
                                        <div id="modryad">
                                            <div id="frame030">
                                                <ul>
                                                    {/* <label htmlFor="dat_file"
                                                           className="closing-button-21"><span>Импорт данных</span>
                                                        <input type="file"
                                                               accept=".dat" id="dat_file" multiple="multiple" onChange={() => {
                                                            let inputFile = document.getElementById('dat_file').files;
                                                            console.log(inputFile.length - 1);
                                                            document.getElementById('path_file_dat').value = inputFile[0].name + ' – ' + inputFile[inputFile.length - 1].name;
                                                            console.log(document.getElementById('dat_file').files);
                                                            console.log(inputFile[1].name.toString());
                                                        }}/>
                                                    </label> */}
                                                    <Button id="dat_file" className="closing-button-21" onClick={this.props.importDatFiles}><span>Импорт данных</span></Button>
                                                </ul>
                                                <div className="text-field">
                                                    <input className="text-field__input" type="text"
                                                           name="login" id={'path_file_dat'}
                                                           placeholder="Login" value={this.props.filenameOfDat} readOnly/>
                                                </div>
                                                <div className="text-radios-list">
                                                    <h3>Выбрать интервал:</h3>
                                                    <div className="radio-list--1">
                                                        <div className="form_radio_btn">
                                                            <input id="radio-1" type="radio" name="radio"
                                                                   value="1"/>
                                                            <label htmlFor="radio-1">1</label>
                                                        </div>
                                                        <div className="form_radio_btn">
                                                            <input id="radio-2" type="radio" name="radio"
                                                                   value="2"/>
                                                            <label htmlFor="radio-2">2</label>
                                                        </div>
                                                        <div className="form_radio_btn">
                                                            <input id="radio-3" type="radio" name="radio"
                                                                   value="3"/>
                                                            <label htmlFor="radio-3">3</label>
                                                        </div>
                                                        <div className="form_radio_btn">
                                                            <input id="radio-4" type="radio" name="radio"
                                                                   value="4"/>
                                                            <label htmlFor="radio-4">4</label>
                                                        </div>
                                                        <div className="form_radio_btn">
                                                            <input id="radio-5" type="radio" name="radio"
                                                                   value="5"/>
                                                            <label htmlFor="radio-5">5</label>
                                                        </div>
                                                        <div className="form_radio_btn">
                                                            <input id="radio-6" type="radio" name="radio"
                                                                   value="6"/>
                                                            <label htmlFor="radio-6">6</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <Button className="closing-button-cl" onClick={this.handleSubmit}><span>Сформировать</span></Button>
                                        </div>
                                </Parser>
                                <Button className="generation_data" onClick={this.openModal4}><span>Сгенерировать ряды измерений</span></Button>
                                <Generation isOpen4={this.state.isOpen4}
                                            onCancel4={this.handleCancel4}
                                            onSubmit4={this.handleSubmit4}
                                />
                            </div>
                            <div id="frame02">
                                <h1>Редактирование генераторов</h1>
                                <ul>
                                    <li id="GEN_1">
                                        <label className="container" htmlFor="radio_1">Генератор 1
                                            <input className="radio__input" name="generator" type="radio" id="radio_1"/>
                                            <span className="checkmark"></span>
                                        </label>
                                        <Button onClick={this.openModal1} className="closing-button-c-1">Добавить</Button>
                                        <Add_Gen isOpen1={this.state.isOpen1}
                                                onCancel1={this.handleCancel1}
                                                onSubmit1={this.handleSubmit1}
                                        />
                                        <Button onClick={this.openModal2} className="closing-button-ch-1">Выбрать</Button>
                                        <Choice_Gen isOpen2={this.state.isOpen2}
                                                 onCancel2={this.handleCancel2}
                                                 onSubmit2={this.handleSubmit2}
                                        />
                                    </li>
                                    <li id="GEN_2">
                                        <label className="container" htmlFor="radio_2">Генератор 2
                                            <input className="radio__input" name="generator" type="radio" id="radio_2"/>
                                            <span className="checkmark"></span>
                                        </label>
                                        <Button onClick={this.openModal1} className="closing-button-c-1">Добавить</Button>
                                        <Add_Gen isOpen1={this.state.isOpen1}
                                                 onCancel1={this.handleCancel1}
                                                 onSubmit1={this.handleSubmit1}
                                        />
                                        <Button onClick={this.openModal2} className="closing-button-ch-1">Выбрать</Button>
                                        <Choice_Gen isOpen2={this.state.isOpen2}
                                                    onCancel2={this.handleCancel2}
                                                    onSubmit2={this.handleSubmit2}
                                        />
                                    </li>
                                    <li id="GEN_3">
                                        <label className="container" htmlFor="radio_3">Генератор 3
                                            <input className="radio__input" name="generator" type="radio" id="radio_3"/>
                                            <span className="checkmark"></span>
                                        </label>
                                        <Button onClick={this.openModal1} className="closing-button-c-1">Добавить</Button>
                                        <Add_Gen isOpen1={this.state.isOpen1}
                                                 onCancel1={this.handleCancel1}
                                                 onSubmit1={this.handleSubmit1}
                                        />
                                        <Button onClick={this.openModal2} className="closing-button-ch-1">Выбрать</Button>
                                        <Choice_Gen isOpen2={this.state.isOpen2}
                                                    onCancel2={this.handleCancel2}
                                                    onSubmit2={this.handleSubmit2}
                                        />
                                    </li>
                                    <li id="GEN_4">
                                        <label className="container" htmlFor="radio_4">Генератор 4
                                            <input className="radio__input" name="generator" type="radio" id="radio_4"/>
                                            <span className="checkmark"></span>
                                        </label>
                                        <Button onClick={this.openModal1} className="closing-button-c-1">Добавить</Button>
                                        <Add_Gen isOpen1={this.state.isOpen1}
                                                 onCancel1={this.handleCancel1}
                                                 onSubmit1={this.handleSubmit1}
                                        />
                                        <Button onClick={this.openModal2} className="closing-button-ch-1">Выбрать</Button>
                                        <Choice_Gen isOpen2={this.state.isOpen2}
                                                    onCancel2={this.handleCancel2}
                                                    onSubmit2={this.handleSubmit2}
                                        />
                                    </li>
                                    <li id="GEN_5">
                                        <label className="container" htmlFor="radio_5">Генератор 5
                                            <input className="radio__input" name="generator" type="radio" id="radio_5"/>
                                            <span className="checkmark"></span>
                                        </label>
                                        <Button onClick={this.openModal1} className="closing-button-c-1">Добавить</Button>
                                        <Add_Gen isOpen1={this.state.isOpen1}
                                                 onCancel1={this.handleCancel1}
                                                 onSubmit1={this.handleSubmit1}
                                        />
                                        <Button onClick={this.openModal2} className="closing-button-ch-1">Выбрать</Button>
                                        <Choice_Gen isOpen2={this.state.isOpen2}
                                                    onCancel2={this.handleCancel2}
                                                    onSubmit2={this.handleSubmit2}
                                        />
                                    </li>
                                </ul>
                            </div>
                            <div id="disp_tmp_path"></div>
                            <div id='frame04'>
                                <table>
                                    <tr>
                                        <td><label className="param_lab">Количество тактов:</label></td>
                                        <td><Input type="number" className="param_tex_tacts" name="firstname"/></td>
                                    </tr>
                                </table>
                            </div>
                            <div id="frame03">
                                <label htmlFor="excel_file_y_vnesh"
                                       className="closing-button-04"><span>Импорт рядов внешних измерений</span>
                                    <input type="file"
                                           accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                           id="excel_file_y_vnesh" onChange={() => {
                                        document.getElementById('excel_file_y_vnesh_path').value = document.getElementById('excel_file_y_vnesh').value;
                                    }}/>
                                </label>
                                <div className="text-field">
                                    <input className="text-field__input" type="text" id="excel_file_y_vnesh_path"
                                           value="Путь к файлу"
                                           readOnly/>
                                </div>
                            </div>
                            <Link href="#" className="closing-button-4-r"><span>ПРОВЕСТИ РАСЧЁТ</span></Link>
                        </td>
                        <td id="rightcol">
                            <div id="r-frame0">
                                <div id="r-frame1">
                                    <CreateLineChart />
                                </div>
                                <div id="r-frame2">
                                    <CreateLineChart_1 />
                                </div>
                                <div id="r-frame3">
                                    <CreateLineChart_2 />
                                </div>
                                <div id="r-frame4">
                                    <CreateLineChart_3 />
                                </div>
                                <div id="r-frame5"></div>
                            </div>
                        </td>
                    </tr>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filenameOfTables: state.createExperiment.filenameOfTables,
        filenameOfDat: state.createExperiment.filenameOfDat
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        importData: (e) => dispatch(importData(e)),
        importDatFiles: (e) => dispatch(importDatFiles(e))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateWin);

