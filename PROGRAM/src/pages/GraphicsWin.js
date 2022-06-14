import React, {Fragment} from "react";
import './graphics.css';
import {Link, NavLink} from "react-router-dom";

export const GraphicsWin = () => {
    return (
        <Fragment>
            <table>
                <tr>
                    <td className="left-win">
                        <div id="frame0">
                            <script src="https://d3js.org/d3.v4.js"></script>
                            <div id="frame0-1-1">
                                <div id="dataviz_axisZoom"></div>
                            </div>
                            <div id="frame0-1-2"></div>
                            <div id="frame0-2-1"></div>
                            <div id="frame0-2-2"></div>
                            <div id="frame0-3-1"></div>
                            <div id="frame0-3-2"></div>
                            <div id="frame0-4-1"></div>
                            <div id="frame0-4-2"></div>
                            <div id="frame0-5-1"></div>
                            <div id="frame0-5-2"></div>
                        </div>
                        <div id="frame1">
                            <div id="frame1-1-1"></div>
                            <div id="frame1-1-2"></div>
                            <div id="frame1-2-1"></div>
                            <div id="frame1-2-2"></div>
                            <div id="frame1-3-1"></div>
                            <div id="frame1-3-2"></div>
                            <div id="frame1-4-1"></div>
                            <div id="frame1-4-2"></div>
                            <div id="frame1-5-1"></div>
                            <div id="frame1-5-2"></div>

                        </div>
                    </td>

                    <td className="right-win">
                        <div className="tabs0">
                            <input type="radio" name="tab0-btn" id="tab0-btn-1"
                                   onChange='showVsHide("tab-btn-1", "frame0", "frame1")' value="" />
                            <label htmlFor="tab0-btn-1">Динамика</label>
                            <input type="radio" name="tab0-btn" id="tab0-btn-2"
                                   onChange='showVsHide("tab-btn-2", "frame1", "frame0")' value="" />
                            <label htmlFor="tab0-btn-2">Адаптация + Динамика</label>
                            <input type="radio" name="tab0-btn" id="tab0-btn-3"
                                   onChange='showVsHide("tab-btn-3", "frame1", "frame0")' value="" />
                            <label htmlFor="tab0-btn-3">Адаптация vs Динамика</label>

                            <div id="content0-1">
                                <div id="frame2">
                                    <div id="frame2-1"></div>
                                    <div id="frame2-2"></div>
                                </div>
                                <div id="frame3">
                                    <div className="tabs">
                                        <input type="radio" name="tab-btn" id="tab-btn-1"
                                               onChange='showVsHide("tab-btn-1", "frame0", "frame1")' value="" />
                                        <label htmlFor="tab-btn-1">Типовые графики</label>
                                        <input type="radio" name="tab-btn" id="tab-btn-2"
                                               onChange='showVsHide("tab-btn-2", "frame1", "frame0")' value="" />
                                        <label htmlFor="tab-btn-2">Уникальные графики</label>
                                        <div id="content-1">
                                            <div id="frame3-1">
                                                <h3>ГЕНЕРАТОРЫ:</h3>
                                                <div className="checkbox-list">
                                                    <div className="form_checkbox_btn">
                                                        <input id="gen11-1" type="checkbox"
                                                               onChange='showOrHide("gen11-1", "frame0-1-1", "frame0-1-2")'
                                                               name="checkbox" value="1"/>
                                                        <label htmlFor="gen11-1">1</label>
                                                    </div>
                                                    <div className="form_checkbox_btn">
                                                        <input id="gen11-2" type="checkbox"
                                                               onChange='showOrHide("gen11-2", "frame0-2-1", "frame0-2-2")'
                                                               name="checkbox" value="2"/>
                                                        <label htmlFor="gen11-2">2</label>
                                                    </div>
                                                    <div className="form_checkbox_btn">
                                                        <input id="gen11-3" type="checkbox"
                                                               onChange='showOrHide("gen11-3", "frame0-3-1", "frame0-3-2")'
                                                               name="checkbox" value="3"/>
                                                        <label htmlFor="gen11-3">3</label>
                                                    </div>
                                                    <div className="form_checkbox_btn">
                                                        <input id="gen11-4" type="checkbox"
                                                               onChange='showOrHide("gen11-4", "frame0-4-1", "frame0-4-2")'
                                                               name="checkbox" value="4"/>
                                                        <label htmlFor="gen11-4">4</label>
                                                    </div>
                                                    <div className="form_checkbox_btn">
                                                        <input id="gen11-5" type="checkbox"
                                                               onChange='showOrHide("gen11-5", "frame0-5-1", "frame0-5-2")'
                                                               name="checkbox" value="5"/>
                                                        <label htmlFor="gen11-5">5</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="frame3-3">
                                                <div className="container-list">
                                                    <div className="container-checkboxes-01">
                                                        <input type="checkbox" id="optional0-all-theme-1"
                                                               onChange="checkAll(this, '.container-checkboxes-01 ')"/>
                                                        <label htmlFor="optional0-all-theme-1">Оценка
                                                            частоты</label>

                                                        <input type="checkbox" id="option0-1-theme-1"/>
                                                        <label
                                                            htmlFor="option0-1-theme-1">МНК-оценки</label>
                                                        <input type="checkbox" id="option0-2-theme-1"/>
                                                        <label htmlFor="option0-2-theme-1">Y
                                                            внешние</label>
                                                        <input type="checkbox"
                                                               id="option0-3-theme-1"/>
                                                        <label htmlFor="option0-3-theme-1">Y
                                                            спрогнозированные</label>
                                                    </div>
                                                    <div className="container-checkboxes-02">
                                                        <input type="checkbox" id="optional0-all-theme-2"
                                                               onChange="checkAll(this, '.container-checkboxes-02 ')"/>
                                                        <label htmlFor="optional0-all-theme-2">Ступеньки</label>
                                                        <input type="checkbox" id="option0-1-theme-2"/>
                                                        <label
                                                            htmlFor="option0-1-theme-2">Полученные</label>
                                                        <input type="checkbox" id="option0-2-theme-2"/>
                                                        <label
                                                            htmlFor="option0-2-theme-2">Исходные</label>
                                                    </div>
                                                    <div className="container-checkboxes-03">
                                                        <input type="checkbox" id="optional0-all-theme-3"
                                                               onChange="checkAll(this, '.container-checkboxes-03 ')"/>
                                                        <label htmlFor="optional0-all-theme-3">Тренды</label>

                                                        <input type="checkbox" id="option0-1-theme-3"/>
                                                        <label
                                                            htmlFor="option0-1-theme-3">Полученные</label>
                                                        <input type="checkbox" id="option0-2-theme-3"/>
                                                        <label
                                                            htmlFor="option0-2-theme-3">Исходные</label>
                                                    </div>
                                                    <div className="container-checkboxes-04">
                                                        <input type="checkbox" id="optional0-all-theme-4"
                                                               onChange="checkAll(this, '.container-checkboxes-04 ')"/>
                                                        <label htmlFor="optional0-all-theme-4">Ряды
                                                            измерений</label>
                                                        <input type="checkbox" id="option0-1-theme-4"/>
                                                        <label htmlFor="option0-1-theme-4">До
                                                            фильтрации</label>
                                                        <input type="checkbox" id="option0-2-theme-4"/>
                                                        <label htmlFor="option0-2-theme-4">После
                                                            фильтрации</label>
                                                    </div>
                                                    <div className="container-checkboxes">
                                                        <input type="checkbox" id="optional0-all-theme-5"/>
                                                        <label htmlFor="optional0-all-theme-5">Прогноз стационарных
                                                            составляющих</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="content-2">
                                            <div id="frame3-2">
                                                <div className="tabs1">
                                                    <input type="radio" name="tab-btn1" id="tab-btn1-1" value="" />
                                                    <label htmlFor="tab-btn1-1">1</label>
                                                    <input type="radio" name="tab-btn1" id="tab-btn1-2" value="" />
                                                    <label htmlFor="tab-btn1-2">2</label>
                                                    <input type="radio" name="tab-btn1" id="tab-btn1-3"
                                                           value=""/>
                                                    <label htmlFor="tab-btn1-3">3</label>
                                                    <input type="radio" name="tab-btn1" id="tab-btn1-4"
                                                           value=""/>
                                                    <label htmlFor="tab-btn1-4">4</label>
                                                    <input type="radio" name="tab-btn1" id="tab-btn1-5"
                                                           value=""/>
                                                    <label htmlFor="tab-btn1-5">5</label>
                                                    <div id="content1-1">
                                                        <div id="frame3-4-1">
                                                            <div className="container-list">
                                                                <div
                                                                    className="form_checkbox_btn_graphic">
                                                                    <input id="gen1" type="checkbox"
                                                                           onChange='showOrHide("gen1", "frame1-1-1", "frame1-1-2")'
                                                                           name="checkbox"
                                                                           value="1"/>
                                                                    <label htmlFor="gen1">Отобразить
                                                                        график</label>
                                                                </div>
                                                                <h3>ГЕНЕРАТОРЫ:</h3>
                                                                <div className="checkbox-list1">
                                                                    <div
                                                                        className="form_checkbox_btn">
                                                                        <input id="gen1-1"
                                                                               type="checkbox"
                                                                               name="checkbox"
                                                                               value="1"
                                                                               checked/>
                                                                        <label
                                                                            htmlFor="gen1-1">1</label>
                                                                    </div>
                                                                    <div
                                                                        className="form_checkbox_btn">
                                                                        <input id="gen1-2"
                                                                               type="checkbox"
                                                                               name="checkbox"
                                                                               value="2"/>
                                                                        <label
                                                                            htmlFor="gen1-2">2</label>
                                                                    </div>
                                                                    <div
                                                                        className="form_checkbox_btn">
                                                                        <input id="gen1-3"
                                                                               type="checkbox"
                                                                               name="checkbox"
                                                                               value="3"/>
                                                                        <label
                                                                            htmlFor="gen1-3">3</label>
                                                                    </div>
                                                                    <div
                                                                        className="form_checkbox_btn">
                                                                        <input id="gen1-4"
                                                                               type="checkbox"
                                                                               name="checkbox"
                                                                               value="4"/>
                                                                        <label
                                                                            htmlFor="gen1-4">4</label>
                                                                    </div>
                                                                    <div
                                                                        className="form_checkbox_btn">
                                                                        <input id="gen1-5"
                                                                               type="checkbox"
                                                                               name="checkbox"
                                                                               value="5"/>
                                                                        <label
                                                                            htmlFor="gen1-5">5</label>
                                                                    </div>
                                                                </div>

                                                                <div
                                                                    className="container-checkboxes-1">
                                                                    <input type="checkbox"
                                                                           id="optional1-all-theme-1"
                                                                           onChange="checkAll(this, '.container-checkboxes-1 ')"/>
                                                                    <label
                                                                        htmlFor="optional1-all-theme-1">Оценка
                                                                        частоты</label>

                                                                    <input type="checkbox"
                                                                           id="option1-1-theme-1"/>
                                                                    <label
                                                                        htmlFor="option1-1-theme-1">МНК-оценки</label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id="option1-2-theme-1"/>
                                                                    <label
                                                                        htmlFor="option1-2-theme-1">Y
                                                                        внешние</label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id="option1-3-theme-1"/>
                                                                    <label
                                                                        htmlFor="option1-3-theme-1">Y
                                                                        спрогнозированные</label>
                                                                </div>
                                                                <div
                                                                    className="container-checkboxes-2">
                                                                    <input type="checkbox"
                                                                           id="optional1-all-theme-2"
                                                                           onChange="checkAll(this, '.container-checkboxes-2 ')"/>
                                                                    <label
                                                                        htmlFor="optional1-all-theme-2">Ступеньки</label>
                                                                    <input type="checkbox"
                                                                           id="option1-1-theme-2"/>
                                                                    <label
                                                                        htmlFor="option1-1-theme-2">Полученные</label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id="option1-2-theme-2"/>
                                                                    <label
                                                                        htmlFor="option1-2-theme-2">Исходные</label>
                                                                </div>
                                                                <div
                                                                    className="container-checkboxes-3">
                                                                    <input type="checkbox"
                                                                           id="optional1-all-theme-3"
                                                                           onChange="checkAll(this, '.container-checkboxes-3 ')"/>
                                                                    <label
                                                                        htmlFor="optional1-all-theme-3">Тренды</label>

                                                                    <input type="checkbox"
                                                                           id="option1-1-theme-3"/>
                                                                    <label
                                                                        htmlFor="option1-1-theme-3">Полученные</label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id="option1-2-theme-3"/>
                                                                    <label
                                                                        htmlFor="option1-2-theme-3">Исходные</label>
                                                                </div>
                                                                <div
                                                                    className="container-checkboxes-4">
                                                                    <input type="checkbox"
                                                                           id="optional1-all-theme-4"
                                                                           onChange="checkAll(this, '.container-checkboxes-4 ')"/>
                                                                    <label
                                                                        htmlFor="optional1-all-theme-4">Ряды
                                                                        измерений</label>

                                                                    <input type="checkbox"
                                                                           id="option1-1-theme-4"/>
                                                                    <label
                                                                        htmlFor="option1-1-theme-4">До
                                                                        фильтрации</label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id="option1-2-theme-4"/>
                                                                    <label
                                                                        htmlFor="option1-2-theme-4">После
                                                                        фильтрации</label>
                                                                </div>
                                                                <div
                                                                    className="container-checkboxes">
                                                                    <input type="checkbox"
                                                                           id="optional1-all-theme-5"/>
                                                                    <label
                                                                        htmlFor="optional1-all-theme-5">Прогноз
                                                                        стационарных
                                                                        составляющих</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="content1-2">
                                                        <div id="frame3-4-2">
                                                            <div className="container-list">
                                                                <div
                                                                    className="form_checkbox_btn_graphic">
                                                                    <input id="gen2" type="checkbox"
                                                                           onChange='showOrHide("gen2", "frame1-2-1", "frame1-2-2")'
                                                                           name="checkbox"
                                                                           value="2"/>
                                                                    <label htmlFor="gen2">Отобразить
                                                                        график</label>
                                                                </div>
                                                                <h3>ГЕНЕРАТОРЫ:</h3>
                                                                <div className="checkbox-list1">
                                                                    <div
                                                                        className="form_checkbox_btn">
                                                                        <input id="gen2-1"
                                                                               type="checkbox"
                                                                               name="checkbox"
                                                                               value="1"
                                                                               checked/>
                                                                        <label
                                                                            htmlFor="gen2-1">1</label>
                                                                    </div>
                                                                    <div
                                                                        className="form_checkbox_btn">
                                                                        <input id="gen2-2"
                                                                               type="checkbox"
                                                                               name="checkbox"
                                                                               value="2"/>
                                                                        <label
                                                                            htmlFor="gen2-2">2</label>
                                                                    </div>
                                                                    <div
                                                                        className="form_checkbox_btn">
                                                                        <input id="gen2-3"
                                                                               type="checkbox"
                                                                               name="checkbox"
                                                                               value="3"/>
                                                                        <label
                                                                            htmlFor="gen2-3">3</label>
                                                                    </div>
                                                                    <div
                                                                        className="form_checkbox_btn">
                                                                        <input id="gen2-4"
                                                                               type="checkbox"
                                                                               name="checkbox"
                                                                               value="4"/>
                                                                        <label
                                                                            htmlFor="gen2-4">4</label>
                                                                    </div>
                                                                    <div
                                                                        className="form_checkbox_btn">
                                                                        <input id="gen2-5"
                                                                               type="checkbox"
                                                                               name="checkbox"
                                                                               value="5"/>
                                                                        <label
                                                                            htmlFor="gen2-5">5</label>
                                                                    </div>
                                                                </div>

                                                                <div
                                                                    className="container-checkboxes-5">
                                                                    <input type="checkbox"
                                                                           id="optional2-all-theme-1"
                                                                           onChange="checkAll(this, '.container-checkboxes-5 ')"/>
                                                                    <label
                                                                        htmlFor="optional2-all-theme-1">Оценка
                                                                        частоты</label>

                                                                    <input type="checkbox"
                                                                           id="option2-1-theme-1"/>
                                                                    <label
                                                                        htmlFor="option2-1-theme-1">МНК-оценки</label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id="option2-2-theme-1"/>
                                                                    <label
                                                                        htmlFor="option2-2-theme-1">Y
                                                                        внешние</label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id="option2-3-theme-1"/>
                                                                    <label
                                                                        htmlFor="option2-3-theme-1">Y
                                                                        спрогнозированные</label>
                                                                </div>
                                                                <div
                                                                    className="container-checkboxes-6">
                                                                    <input type="checkbox"
                                                                           id="optional2-all-theme-2"
                                                                           onChange="checkAll(this, '.container-checkboxes-6 ')"/>
                                                                    <label
                                                                        htmlFor="optional2-all-theme-2">Ступеньки</label>
                                                                    <input type="checkbox"
                                                                           id="option2-1-theme-2"/>
                                                                    <label
                                                                        htmlFor="option2-1-theme-2">Полученные</label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id="option2-2-theme-2"/>
                                                                    <label
                                                                        htmlFor="option2-2-theme-2">Исходные</label>
                                                                </div>
                                                                <div
                                                                    className="container-checkboxes-7">
                                                                    <input type="checkbox"
                                                                           id="optional2-all-theme-3"
                                                                           onChange="checkAll(this, '.container-checkboxes-7 ')"/>
                                                                    <label
                                                                        htmlFor="optional2-all-theme-3">Тренды</label>

                                                                    <input type="checkbox"
                                                                           id="option2-1-theme-3"/>
                                                                    <label
                                                                        htmlFor="option2-1-theme-3">Полученные</label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id="option2-2-theme-3"/>
                                                                    <label
                                                                        htmlFor="option2-2-theme-3">Исходные</label>
                                                                </div>
                                                                <div
                                                                    className="container-checkboxes-8">
                                                                    <input type="checkbox"
                                                                           id="optional2-all-theme-4"
                                                                           onChange="checkAll(this, '.container-checkboxes-8 ')"/>
                                                                    <label
                                                                        htmlFor="optional2-all-theme-4">Ряды
                                                                        измерений</label>

                                                                    <input type="checkbox"
                                                                           id="option2-1-theme-4"/>
                                                                    <label
                                                                        htmlFor="option2-1-theme-4">До
                                                                        фильтрации</label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id="option2-2-theme-4"/>
                                                                    <label
                                                                        htmlFor="option2-2-theme-4">После
                                                                        фильтрации</label>
                                                                </div>
                                                                <div
                                                                    className="container-checkboxes">
                                                                    <input type="checkbox"
                                                                           id="optional2-all-theme-5"/>
                                                                    <label
                                                                        htmlFor="optional2-all-theme-5">Прогноз
                                                                        стационарных
                                                                        составляющих</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="content1-3">
                                                        <div id="frame3-4-3">
                                                            <div className="container-list">
                                                                <div
                                                                    className="form_checkbox_btn_graphic">
                                                                    <input id="gen3" type="checkbox"
                                                                           onChange='showOrHide("gen3", "frame1-3-1", "frame1-3-2")'
                                                                           name="checkbox"
                                                                           value="3"/>
                                                                    <label htmlFor="gen3">Отобразить
                                                                        график</label>
                                                                </div>
                                                                <h3>ГЕНЕРАТОРЫ:</h3>
                                                                <div className="checkbox-list1">
                                                                    <div
                                                                        className="form_checkbox_btn">
                                                                        <input id="gen3-1"
                                                                               type="checkbox"
                                                                               name="checkbox"
                                                                               value="1"
                                                                               checked/>
                                                                        <label
                                                                            htmlFor="gen3-1">1</label>
                                                                    </div>
                                                                    <div
                                                                        className="form_checkbox_btn">
                                                                        <input id="gen3-2"
                                                                               type="checkbox"
                                                                               name="checkbox"
                                                                               value="2"/>
                                                                        <label
                                                                            htmlFor="gen3-2">2</label>
                                                                    </div>
                                                                    <div
                                                                        className="form_checkbox_btn">
                                                                        <input id="gen3-3"
                                                                               type="checkbox"
                                                                               name="checkbox"
                                                                               value="3"/>
                                                                        <label
                                                                            htmlFor="gen3-3">3</label>
                                                                    </div>
                                                                    <div
                                                                        className="form_checkbox_btn">
                                                                        <input id="gen3-4"
                                                                               type="checkbox"
                                                                               name="checkbox"
                                                                               value="4"/>
                                                                        <label
                                                                            htmlFor="gen3-4">4</label>
                                                                    </div>
                                                                    <div
                                                                        className="form_checkbox_btn">
                                                                        <input id="gen3-5"
                                                                               type="checkbox"
                                                                               name="checkbox"
                                                                               value="5"/>
                                                                        <label
                                                                            htmlFor="gen3-5">5</label>
                                                                    </div>
                                                                </div>

                                                                <div
                                                                    className="container-checkboxes-9">
                                                                    <input type="checkbox"
                                                                           id="optional3-all-theme-1"
                                                                           onChange="checkAll(this, '.container-checkboxes-9 ')"/>
                                                                    <label
                                                                        htmlFor="optional3-all-theme-1">Оценка
                                                                        частоты</label>

                                                                    <input type="checkbox"
                                                                           id="option3-1-theme-1"/>
                                                                    <label
                                                                        htmlFor="option3-1-theme-1">МНК-оценки</label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id="option3-2-theme-1"/>
                                                                    <label
                                                                        htmlFor="option3-2-theme-1">Y
                                                                        внешние</label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id="option3-3-theme-1"/>
                                                                    <label
                                                                        htmlFor="option3-3-theme-1">Y
                                                                        спрогнозированные</label>
                                                                </div>
                                                                <div
                                                                    className="container-checkboxes-10">
                                                                    <input type="checkbox"
                                                                           id="optional3-all-theme-2"
                                                                           onChange="checkAll(this, '.container-checkboxes-10 ')"/>
                                                                    <label
                                                                        htmlFor="optional3-all-theme-2">Ступеньки</label>
                                                                    <input type="checkbox"
                                                                           id="option3-1-theme-2"/>
                                                                    <label
                                                                        htmlFor="option3-1-theme-2">Полученные</label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id="option3-2-theme-2"/>
                                                                    <label
                                                                        htmlFor="option3-2-theme-2">Исходные</label>
                                                                </div>
                                                                <div
                                                                    className="container-checkboxes-11">
                                                                    <input type="checkbox"
                                                                           id="optional3-all-theme-3"
                                                                           onChange="checkAll(this, '.container-checkboxes-11 ')"/>
                                                                    <label
                                                                        htmlFor="optional3-all-theme-3">Тренды</label>

                                                                    <input type="checkbox"
                                                                           id="option3-1-theme-3"/>
                                                                    <label
                                                                        htmlFor="option3-1-theme-3">Полученные</label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id="option3-2-theme-3"/>
                                                                    <label
                                                                        htmlFor="option3-2-theme-3">Исходные</label>
                                                                </div>
                                                                <div
                                                                    className="container-checkboxes-12">
                                                                    <input type="checkbox"
                                                                           id="optional3-all-theme-4"
                                                                           onChange="checkAll(this, '.container-checkboxes-12 ')"/>
                                                                    <label
                                                                        htmlFor="optional3-all-theme-4">Ряды
                                                                        измерений</label>

                                                                    <input type="checkbox"
                                                                           id="option3-1-theme-4"/>
                                                                    <label
                                                                        htmlFor="option3-1-theme-4">До
                                                                        фильтрации</label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id="option3-2-theme-4"/>
                                                                    <label
                                                                        htmlFor="option3-2-theme-4">После
                                                                        фильтрации</label>
                                                                </div>
                                                                <div
                                                                    className="container-checkboxes">
                                                                    <input type="checkbox"
                                                                           id="optional3-all-theme-5"/>
                                                                    <label
                                                                        htmlFor="optional3-all-theme-5">Прогноз
                                                                        стационарных
                                                                        составляющих</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="content1-4">
                                                        <div id="frame3-4-4">
                                                            <div className="container-list">
                                                                <div
                                                                    className="form_checkbox_btn_graphic">
                                                                    <input id="gen4" type="checkbox"
                                                                           onChange='showOrHide("gen4", "frame1-4-1", "frame1-4-2")'
                                                                           name="checkbox"
                                                                           value="4"/>
                                                                    <label htmlFor="gen4">Отобразить
                                                                        график</label>
                                                                </div>
                                                                <h3>ГЕНЕРАТОРЫ:</h3>
                                                                <div className="checkbox-list1">
                                                                    <div
                                                                        className="form_checkbox_btn">
                                                                        <input id="gen4-1"
                                                                               type="checkbox"
                                                                               name="checkbox"
                                                                               value="1"
                                                                               checked/>
                                                                        <label
                                                                            htmlFor="gen4-1">1</label>
                                                                    </div>
                                                                    <div
                                                                        className="form_checkbox_btn">
                                                                        <input id="gen4-2"
                                                                               type="checkbox"
                                                                               name="checkbox"
                                                                               value="2"/>
                                                                        <label
                                                                            htmlFor="gen4-2">2</label>
                                                                    </div>
                                                                    <div
                                                                        className="form_checkbox_btn">
                                                                        <input id="gen4-3"
                                                                               type="checkbox"
                                                                               name="checkbox"
                                                                               value="3"/>
                                                                        <label
                                                                            htmlFor="gen4-3">3</label>
                                                                    </div>
                                                                    <div
                                                                        className="form_checkbox_btn">
                                                                        <input id="gen4-4"
                                                                               type="checkbox"
                                                                               name="checkbox"
                                                                               value="4"/>
                                                                        <label
                                                                            htmlFor="gen4-4">4</label>
                                                                    </div>
                                                                    <div
                                                                        className="form_checkbox_btn">
                                                                        <input id="gen4-5"
                                                                               type="checkbox"
                                                                               name="checkbox"
                                                                               value="5"/>
                                                                        <label
                                                                            htmlFor="gen4-5">5</label>
                                                                    </div>
                                                                </div>

                                                                <div
                                                                    className="container-checkboxes-13">
                                                                    <input type="checkbox"
                                                                           id="optional4-all-theme-1"
                                                                           onChange="checkAll(this, '.container-checkboxes-13 ')"/>
                                                                    <label
                                                                        htmlFor="optional4-all-theme-1">Оценка
                                                                        частоты</label>

                                                                    <input type="checkbox"
                                                                           id="option4-1-theme-1"/>
                                                                    <label
                                                                        htmlFor="option4-1-theme-1">МНК-оценки</label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id="option4-2-theme-1"/>
                                                                    <label
                                                                        htmlFor="option4-2-theme-1">Y
                                                                        внешние</label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id="option4-3-theme-1"/>
                                                                    <label
                                                                        htmlFor="option4-3-theme-1">Y
                                                                        спрогнозированные</label>
                                                                </div>
                                                                <div
                                                                    className="container-checkboxes-14">
                                                                    <input type="checkbox"
                                                                           id="optional4-all-theme-2"
                                                                           onChange="checkAll(this, '.container-checkboxes-14 ')"/>
                                                                    <label
                                                                        htmlFor="optional4-all-theme-2">Ступеньки</label>
                                                                    <input type="checkbox"
                                                                           id="option4-1-theme-2"/>
                                                                    <label
                                                                        htmlFor="option4-1-theme-2">Полученные</label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id="option4-2-theme-2"/>
                                                                    <label
                                                                        htmlFor="option4-2-theme-2">Исходные</label>
                                                                </div>
                                                                <div
                                                                    className="container-checkboxes-15">
                                                                    <input type="checkbox"
                                                                           id="optional4-all-theme-3"
                                                                           onChange="checkAll(this, '.container-checkboxes-15 ')"/>
                                                                    <label
                                                                        htmlFor="optional4-all-theme-3">Тренды</label>

                                                                    <input type="checkbox"
                                                                           id="option4-1-theme-3"/>
                                                                    <label
                                                                        htmlFor="option4-1-theme-3">Полученные</label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id="option4-2-theme-3"/>
                                                                    <label
                                                                        htmlFor="option4-2-theme-3">Исходные</label>
                                                                </div>
                                                                <div
                                                                    className="container-checkboxes-16">
                                                                    <input type="checkbox"
                                                                           id="optional4-all-theme-4"
                                                                           onChange="checkAll(this, '.container-checkboxes-16 ')"/>
                                                                    <label
                                                                        htmlFor="optional4-all-theme-4">Ряды
                                                                        измерений</label>

                                                                    <input type="checkbox"
                                                                           id="option4-1-theme-4"/>
                                                                    <label
                                                                        htmlFor="option4-1-theme-4">До
                                                                        фильтрации</label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id="option4-2-theme-4"/>
                                                                    <label
                                                                        htmlFor="option4-2-theme-4">После
                                                                        фильтрации</label>
                                                                </div>
                                                                <div
                                                                    className="container-checkboxes">
                                                                    <input type="checkbox"
                                                                           id="optional4-all-theme-5"/>
                                                                    <label
                                                                        htmlFor="optional4-all-theme-5">Прогноз
                                                                        стационарных
                                                                        составляющих</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="content1-5">
                                                        <div id="frame3-4-5">
                                                            <div className="container-list">
                                                                <div
                                                                    className="form_checkbox_btn_graphic">
                                                                    <input id="gen5" type="checkbox"
                                                                           onChange='showOrHide("gen5", "frame1-5-1", "frame1-5-2")'
                                                                           name="checkbox"
                                                                           value="5"/>
                                                                    <label htmlFor="gen5">Отобразить
                                                                        график</label>
                                                                </div>
                                                                <h3>ГЕНЕРАТОРЫ:</h3>
                                                                <div className="checkbox-list1">
                                                                    <div
                                                                        className="form_checkbox_btn">
                                                                        <input id="gen5-1"
                                                                               type="checkbox"
                                                                               name="checkbox"
                                                                               value="1"
                                                                               checked/>
                                                                        <label
                                                                            htmlFor="gen5-1">1</label>
                                                                    </div>
                                                                    <div
                                                                        className="form_checkbox_btn">
                                                                        <input id="gen5-2"
                                                                               type="checkbox"
                                                                               name="checkbox"
                                                                               value="2"/>
                                                                        <label
                                                                            htmlFor="gen5-2">2</label>
                                                                    </div>
                                                                    <div
                                                                        className="form_checkbox_btn">
                                                                        <input id="gen5-3"
                                                                               type="checkbox"
                                                                               name="checkbox"
                                                                               value="3"/>
                                                                        <label
                                                                            htmlFor="gen5-3">3</label>
                                                                    </div>
                                                                    <div
                                                                        className="form_checkbox_btn">
                                                                        <input id="gen5-4"
                                                                               type="checkbox"
                                                                               name="checkbox"
                                                                               value="4"/>
                                                                        <label
                                                                            htmlFor="gen5-4">4</label>
                                                                    </div>
                                                                    <div
                                                                        className="form_checkbox_btn">
                                                                        <input id="gen5-5"
                                                                               type="checkbox"
                                                                               name="checkbox"
                                                                               value="5"/>
                                                                        <label
                                                                            htmlFor="gen5-5">5</label>
                                                                    </div>
                                                                </div>

                                                                <div
                                                                    className="container-checkboxes-17">
                                                                    <input type="checkbox"
                                                                           id="optional5-all-theme-1"
                                                                           onChange="checkAll(this, '.container-checkboxes-17 ')"/>
                                                                    <label
                                                                        htmlFor="optional5-all-theme-1">Оценка
                                                                        частоты</label>

                                                                    <input type="checkbox"
                                                                           id="option5-1-theme-1"/>
                                                                    <label
                                                                        htmlFor="option5-1-theme-1">МНК-оценки</label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id="option5-2-theme-1"/>
                                                                    <label
                                                                        htmlFor="option5-2-theme-1">Y
                                                                        внешние</label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id="option5-3-theme-1"/>
                                                                    <label
                                                                        htmlFor="option5-3-theme-1">Y
                                                                        спрогнозированные</label>
                                                                </div>
                                                                <div
                                                                    className="container-checkboxes-18">
                                                                    <input type="checkbox"
                                                                           id="optional5-all-theme-2"
                                                                           onChange="checkAll(this, '.container-checkboxes-18 ')"/>
                                                                    <label
                                                                        htmlFor="optional5-all-theme-2">Ступеньки</label>
                                                                    <input type="checkbox"
                                                                           id="option5-1-theme-2"/>
                                                                    <label
                                                                        htmlFor="option5-1-theme-2">Полученные</label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id="option5-2-theme-2"/>
                                                                    <label
                                                                        htmlFor="option5-2-theme-2">Исходные</label>
                                                                </div>
                                                                <div
                                                                    className="container-checkboxes-19">
                                                                    <input type="checkbox"
                                                                           id="optional5-all-theme-3"
                                                                           onChange="checkAll(this, '.container-checkboxes-19 ')"/>
                                                                    <label
                                                                        htmlFor="optional5-all-theme-3">Тренды</label>

                                                                    <input type="checkbox"
                                                                           id="option5-1-theme-3"/>
                                                                    <label
                                                                        htmlFor="option5-1-theme-3">Полученные</label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id="option5-2-theme-3"/>
                                                                    <label
                                                                        htmlFor="option5-2-theme-3">Исходные</label>
                                                                </div>
                                                                <div
                                                                    className="container-checkboxes-20">
                                                                    <input type="checkbox"
                                                                           id="optional5-all-theme-4"
                                                                           onChange="checkAll(this, '.container-checkboxes-20 ')"/>
                                                                    <label
                                                                        htmlFor="optional5-all-theme-4">Ряды
                                                                        измерений</label>

                                                                    <input type="checkbox"
                                                                           id="option5-1-theme-4"/>
                                                                    <label
                                                                        htmlFor="option5-1-theme-4">До
                                                                        фильтрации</label>
                                                                    <input
                                                                        type="checkbox"
                                                                        id="option5-2-theme-4"/>
                                                                    <label
                                                                        htmlFor="option5-2-theme-4">После
                                                                        фильтрации</label>
                                                                </div>
                                                                <div
                                                                    className="container-checkboxes">
                                                                    <input type="checkbox"
                                                                           id="optional5-all-theme-5"/>
                                                                    <label
                                                                        htmlFor="optional5-all-theme-5">Прогноз
                                                                        стационарных
                                                                        составляющих</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="tables.html"
                                   className="closing-button-search"><span>Сравнить результаты экспериментов</span></a>
                                <a id="closing-button-r1" onClick=""><span>Сохранить как</span></a>
                                <script src="js/graphics_panel.js"></script>
                                <div id="myModal" className="modal">
                                    <div className="modal-content">
                                        <span className="close">&times;</span>
                                        <div className="modal-body">
                                            <div id="saveframe">
                                                <div id="frame14">
                                                    <label className="save_lab">
                                                        Название эксперимента:
                                                        <input type="text" className="save_tex" name="firstname"/>
                                                    </label>
                                                    <table cellSpacing="0" id="frame14-1">
                                                        <tr>
                                                            <td id="fr-14-1">
                                                                <div className="date-picker">
                                                                    <div className="selected-date"></div>

                                                                    <div className="dates">
                                                                        <div className="month">
                                                                            <div className="arrows prev-mth">&lt;</div>
                                                                            <div className="mth"></div>
                                                                            <div className="arrows next-mth">&gt;</div>
                                                                        </div>

                                                                        <div className="days"></div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td id="fr-14-2">
                                                                <a href=""
                                                                   className="closing-button-2"><span>Выбрать папку</span></a>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <div className="text-field-1">
                                                        <input className="text-field__input-1" type="text" name="login"
                                                               id="login"
                                                               placeholder="Login" value="Путь к файлу" readOnly/>
                                                    </div>
                                                    <div className="checkbox">
                                                        <input className="checkbox__input" type="checkbox" id="checkbox_1"/>
                                                        <label className="checkbox__label" htmlFor="checkbox_1">Выгрузить
                                                            данные эксперимента в
                                                            папку</label>
                                                    </div>
                                                </div>
                                                <a href="" className="closing-button-r2"><span>Сохранить</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="closing-button-r2"><span>Сохранить</span></a>
                            </div>
                            <div id="content0-2"></div>
                            <div id="content0-3"></div>
                        </div>

                    </td>
                </tr>
            </table>
        </Fragment>
    )
}


