import React, {Fragment} from "react";
import './create.css';
import {Link} from "react-router-dom";

export const EditWin = () => {
    return (
        <Fragment>
            <table>
                <tr>
                    <td id="createexp">
                        <div id="frame01">
                            <div className="fr-1">
                                <Link id="import_data"><span>Импорт данных</span></Link>
                                <input type="file"
                                       accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                       id="excel_file" />
                                <div className="text-field">
                                    <input className="text-field__input" type="text" id="path_file" value="Путь к файлу"
                                           readOnly />
                                </div>
                            </div>

                            <Link id="import_data_dat" onClick=""><span>Импорт данных из .dat файлов</span></Link>
                            <Link href="" id="generation_data"><span>Сгенерировать ряды измерений</span></Link>
                        </div>
                        <div id="frame02">
                            <h1>Редактирование генераторов</h1>
                            <ul>
                                <li id="GEN_1">
                                    <label className="container" htmlFor="radio_1">Генератор 1
                                        <input className="radio__input" name="generator" type="radio" id="radio_1" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <Link id="closing-button-c-1"><span>Добавить</span></Link>
                                    <Link id="closing-button-ch-1"><span>Выбрать</span></Link>
                                </li>
                                <li id="GEN_2">
                                    <label className="container" htmlFor="radio_2">Генератор 2
                                        <input className="radio__input" name="generator" type="radio" id="radio_2" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <Link id="closing-button-c-1"><span>Добавить</span></Link>
                                    <Link id="closing-button-ch-1"><span>Выбрать</span></Link>
                                </li>
                                <li id="GEN_3">
                                    <label className="container" htmlFor="radio_3">Генератор 3
                                        <input className="radio__input" name="generator" type="radio" id="radio_3" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <Link id="closing-button-c-1"><span>Добавить</span></Link>
                                    <Link id="closing-button-ch-1"><span>Выбрать</span></Link>
                                </li>
                                <li id="GEN_4">
                                    <label className="container" htmlFor="radio_4">Генератор 4
                                        <input className="radio__input" name="generator" type="radio" id="radio_4" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <Link id="closing-button-c-1"><span>Добавить</span></Link>
                                    <Link id="closing-button-ch-1"><span>Выбрать</span></Link>

                                </li>
                                <li id="GEN_5">
                                    <label className="container" htmlFor="radio_5">Генератор 5
                                        <input className="radio__input" name="generator" type="radio" id="radio_5" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <Link id="closing-button-c-1"><span>Добавить</span></Link>
                                    <Link id="closing-button-ch-1"><span>Выбрать</span></Link>
                                </li>
                            </ul>
                        </div>
                        <div id="disp_tmp_path"></div>
                        <div id="frame03">
                            <label htmlFor="excel_file_y_vnesh"
                                   className="closing-button-04"><span>Импорт рядов внешних измерений</span>
                                <input type="file"
                                       accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                       id="excel_file_y_vnesh" />
                            </label>
                            <div className="text-field">
                                <input className="text-field__input" type="text" id="excel_file_y_vnesh_path"
                                       value="Путь к файлу"
                                       readOnly />
                            </div>
                        </div>
                        <Link href="#" className="closing-button-4-r"><span>ПРОВЕСТИ РАСЧЁТ</span></Link>
                    </td>
                    <td id="rightcol">
                        <div id="r-frame0">
                            <div id="r-frame1"></div>
                            <div id="r-frame2"></div>
                            <div id="r-frame3"></div>
                            <div id="r-frame4"></div>
                            <div id="r-frame5"></div>
                        </div>
                    </td>
                </tr>
            </table>
        </Fragment>
    )
}


