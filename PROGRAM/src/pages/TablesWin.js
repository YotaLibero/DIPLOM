import React, {Fragment} from "react";
import './tables.css';
import './check.svg';


export const TablesWin = () => {
    return (
        <Fragment>
            <table>
                <tr>
                    <td className="left-win">
                        <div id="frame001">
                            <input type="file" id="excel_file"/>
                            <div id="excel_data" className="mt-5"></div>
                            <div id="frame004"></div>
                        </div>
                        <div id="frame002">
                            <div id="frame005"></div>
                        </div>
                    </td>

                    <td className="right-win">
                        <div id="frame003">
                            <div className="tabs3">
                                <input type="radio" name="tab4-btn"
                                       onChange='showVsHide("tab-btn-1", "frame1", "frame2")'
                                       id="tab3-btn-1" value="" />
                                <label htmlFor="tab3-btn-1">Генераторы</label>
                                <input type="radio" name="tab4-btn"
                                       onChange='showVsHide("tab-btn-2", "frame2", "frame1")'
                                       id="tab3-btn-2" value=""/>
                                <label htmlFor="tab3-btn-2">Результаты</label>
                                <div id="content3-1">
                                    <div id="frame003-3">
                                        <h3 className="H-3">РЕЗУЛЬТАТЫ:</h3>
                                        <div className="radio">
                                            <input className="radio__input" name="male" type="radio"
                                                   id="radio_1"/>
                                            <label className="radio__label" htmlFor="radio_1">Y
                                                прогноз</label>
                                        </div>
                                        <div className="radio">
                                            <input className="radio__input" name="male" type="radio"
                                                   id="radio_2"/>
                                            <label className="radio__label"
                                                   htmlFor="radio_2">МНК-оценки</label>
                                        </div>
                                        <div className="radio">
                                            <input className="radio__input" name="male" type="radio"
                                                   id="radio_3"/>
                                            <label className="radio__label" htmlFor="radio_3">Y
                                                внешние</label>
                                        </div>
                                        <div className="radio">
                                            <input className="radio__input" name="male" type="radio"
                                                   id="radio_4"/>
                                            <label className="radio__label" htmlFor="radio_4">Z до
                                                фильтрации</label>
                                        </div>
                                        <div className="radio">
                                            <input className="radio__input" name="male" type="radio"
                                                   id="radio_5"/>
                                            <label className="radio__label" htmlFor="radio_5">Z после
                                                фильтрации</label>
                                        </div>
                                        <div className="radio">
                                            <input className="radio__input" name="male" type="radio"
                                                   id="radio_6"/>
                                            <label className="radio__label" htmlFor="radio_6">Ступеньки
                                                исходные</label>
                                        </div>
                                        <div className="radio">
                                            <input className="radio__input" name="male" type="radio"
                                                   id="radio_7"/>
                                            <label className="radio__label" htmlFor="radio_7">Ступеньки
                                                полученные</label>
                                        </div>
                                        <div className="radio">
                                            <input className="radio__input" name="male" type="radio"
                                                   id="radio_8"/>
                                            <label className="radio__label" htmlFor="radio_8">Тренды
                                                исходные</label>
                                        </div>
                                        <div className="radio">
                                            <input className="radio__input" name="male" type="radio"
                                                   id="radio_9"/>
                                            <label className="radio__label" htmlFor="radio_9">Тренды
                                                полученные</label>
                                        </div>
                                        <div className="radio">
                                            <input className="radio__input" name="male" type="radio"
                                                   id="radio_10"/>
                                            <label className="radio__label" htmlFor="radio_10">Y
                                                стационарной
                                                составляющей</label>
                                        </div>
                                        <div className="radio">
                                            <input className="radio__input" name="male" type="radio"
                                                   id="radio_11"/>
                                            <label className="radio__label" htmlFor="radio_1">Наличие
                                                выбросов</label>
                                        </div>
                                        <div className="radio">
                                            <input className="radio__input" name="male" type="radio"
                                                   id="radio_12"/>
                                            <label className="radio__label" htmlFor="radio_12">Коэффициенты
                                                авторегрессии</label>
                                        </div>
                                        <div className="radio">
                                            <input className="radio__input" name="male" type="radio"
                                                   id="radio_13"/>
                                            <label className="radio__label" htmlFor="radio_13">Остаточная
                                                дисперсия</label>
                                        </div>
                                        <div className="radio">
                                            <input className="radio__input" name="male" type="radio"
                                                   id="radio_14"/>
                                            <label className="radio__label" htmlFor="radio_14">Угловой
                                                коэффициент
                                                тренда</label>
                                        </div>
                                    </div>
                                    <div id="frame003-1">
                                        <h3>ГЕНЕРАТОРЫ:</h3>
                                        <div className="checkbox-list">
                                            <div className="form_checkbox_btn">
                                                <input id="gen11-1" type="checkbox"
                                                       onChange='showOrHide("gen11-1", "frame4")'
                                                       name="checkbox" value="1" checked/>
                                                <label htmlFor="gen11-1">1</label>
                                            </div>
                                            <div className="form_checkbox_btn">
                                                <input id="gen11-2" type="checkbox" name="checkbox" value="2"
                                                       checked/>
                                                <label htmlFor="gen11-2">2</label>
                                            </div>
                                            <div className="form_checkbox_btn">
                                                <input id="gen11-3" type="checkbox" name="checkbox" value="3"
                                                       checked/>
                                                <label htmlFor="gen11-3">3</label>
                                            </div>
                                            <div className="form_checkbox_btn">
                                                <input id="gen11-4" type="checkbox" name="checkbox" value="4"
                                                       checked/>
                                                <label htmlFor="gen11-4">4</label>
                                            </div>
                                            <div className="form_checkbox_btn">
                                                <input id="gen11-5" type="checkbox" name="checkbox" value="5"
                                                       checked/>
                                                <label htmlFor="gen11-5">5</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="content3-2">
                                    <div id="frame003-2">
                                        <h3>ГЕНЕРАТОРЫ:</h3>
                                        <div className="checkbox-list1">
                                            <div className="form_checkbox_btn1">
                                                <input id="gen1-1" type="radio" name="radio" value="1" />
                                                <label htmlFor="gen1-1">1</label>
                                            </div>
                                            <div className="form_checkbox_btn1">
                                                <input id="gen1-2" type="radio" name="radio" value="2"/>
                                                <label htmlFor="gen1-2">2</label>
                                            </div>
                                            <div className="form_checkbox_btn1">
                                                <input id="gen1-3" type="radio" name="radio" value="3"/>
                                                <label htmlFor="gen1-3">3</label>
                                            </div>
                                            <div className="form_checkbox_btn1">
                                                <input id="gen1-4" type="radio" name="radio" value="4"/>
                                                <label htmlFor="gen1-4">4</label>
                                            </div>
                                            <div className="form_checkbox_btn1">
                                                <input id="gen1-5" type="radio" name="radio" value="5"/>
                                                <label htmlFor="gen1-5">5</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="frame003-4-1">
                                        <div className="container-list1">
                                            <h3>РЕЗУЛЬТАТЫ:</h3>
                                            <div className="container-checkboxes-01">
                                                <div className="checkbox">
                                                    <input className="checkbox__input" type="checkbox"
                                                           id="checkbox_1"/>
                                                    <label className="checkbox__label" htmlFor="checkbox_1">Y
                                                        прогноз</label>
                                                </div>
                                                <div className="checkbox">
                                                    <input className="checkbox__input" type="checkbox"
                                                           id="checkbox_2"/>
                                                    <label className="checkbox__label"
                                                           htmlFor="checkbox_2">МНК-оценки</label>
                                                </div>
                                                <div className="checkbox">
                                                    <input className="checkbox__input" type="checkbox"
                                                           id="checkbox_3"/>
                                                    <label className="checkbox__label" htmlFor="checkbox_3">Y
                                                        внешние</label>
                                                </div>
                                                <div className="checkbox">
                                                    <input className="checkbox__input" type="checkbox"
                                                           id="checkbox_4"/>
                                                    <label className="checkbox__label" htmlFor="checkbox_4">Z
                                                        до фильтрации</label>
                                                </div>
                                                <div className="checkbox">
                                                    <input className="checkbox__input" type="checkbox"
                                                           id="checkbox_5"/>
                                                    <label className="checkbox__label" htmlFor="checkbox_5">Z
                                                        после фильтрации</label>
                                                </div>
                                                <div className="checkbox">
                                                    <input className="checkbox__input" type="checkbox"
                                                           id="checkbox_6"/>
                                                    <label className="checkbox__label" htmlFor="checkbox_6">Ступеньки
                                                        исходные</label>
                                                </div>
                                                <div className="checkbox">
                                                    <input className="checkbox__input" type="checkbox"
                                                           id="checkbox_7"/>
                                                    <label className="checkbox__label" htmlFor="checkbox_7">Ступеньки
                                                        полученные</label>
                                                </div>
                                                <div className="checkbox">
                                                    <input className="checkbox__input" type="checkbox"
                                                           id="checkbox_8"/>
                                                    <label className="checkbox__label" htmlFor="checkbox_8">Тренды
                                                        исходные</label>
                                                </div>
                                                <div className="checkbox">
                                                    <input className="checkbox__input" type="checkbox"
                                                           id="checkbox_9"/>
                                                    <label className="checkbox__label" htmlFor="checkbox_9">Тренды
                                                        полученные</label>
                                                </div>
                                                <div className="checkbox">
                                                    <input className="checkbox__input" type="checkbox"
                                                           id="checkbox_10"/>
                                                    <label className="checkbox__label"
                                                           htmlFor="checkbox_10">Y стационарной
                                                        составляющей</label>
                                                </div>
                                                <div className="checkbox">
                                                    <input className="checkbox__input" type="checkbox"
                                                           id="checkbox_11"/>
                                                    <label className="checkbox__label"
                                                           htmlFor="checkbox_11">Наличие выбросов</label>
                                                </div>
                                                <div className="checkbox">
                                                    <input className="checkbox__input" type="checkbox"
                                                           id="checkbox_12"/>
                                                    <label className="checkbox__label"
                                                           htmlFor="checkbox_12">Коэффициенты
                                                        авторегрессии</label>
                                                </div>
                                                <div className="checkbox">
                                                    <input className="checkbox__input" type="checkbox"
                                                           id="checkbox_13"/>
                                                    <label className="checkbox__label"
                                                           htmlFor="checkbox_13">Остаточная
                                                        дисперсия</label>
                                                </div>
                                                <div className="checkbox">
                                                    <input className="checkbox__input" type="checkbox"
                                                           id="checkbox_14"/>
                                                    <label className="checkbox__label"
                                                           htmlFor="checkbox_14">Угловой коэффициент
                                                        тренда</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a id="closing-buttont-r1" onClick=""><span>Экспорт в .xlsx</span></a>
                    </td>
                </tr>
            </table>
        </Fragment>
    )
}


