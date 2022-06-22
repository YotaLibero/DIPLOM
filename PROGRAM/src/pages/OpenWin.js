import React, {Fragment} from "react";
import './open.css';
// import axios from 'axios';
import CreateWin from "./CreateWin";
import DataTable from "../components/DataTable";

function sortTableByColumn(table, column, asc = true) {
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));

    // Sort each row
    const sortedRows = rows.sort((a, b) => {
        const aColText = a.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();
        const bColText = b.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();

        return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
    });

    // Remove all existing TRs from the table
    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }

    // Re-add the newly sorted rows
    tBody.append(...sortedRows);

    // Remember how the column is currently sorted
    table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
    table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-asc", asc);
    table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-desc", !asc);
}

document.querySelectorAll(".table-sortable th").forEach(headerCell => {
    headerCell.addEventListener("click", () => {
        const tableElement = headerCell.parentElement.parentElement.parentElement;
        const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
        const currentIsAscending = headerCell.classList.contains("th-sort-asc");

        sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
    });
});

class OpenWin extends React.Component {
    render() {
        return (
            <Fragment>
                {/*<div id="frame8">*/}
                {/*    <table cellSpacing="0" id="maket">*/}
                {/*        <tr>*/}
                {/*            <td><a href="" className="closing-button-search-"><span>Поиск</span></a></td>*/}
                {/*            <td>*/}
                {/*                <div className="text-field-open">*/}
                {/*                    <input className="text-field__input-open" type="text" name="login"*/}
                {/*                           value="Поиск..."/>*/}
                {/*                </div>*/}
                {/*            </td>*/}
                {/*        </tr>*/}
                {/*    </table>*/}
                {/*</div>*/}
                <div id="frame9">
                    <DataTable />
                    {/*<table className="table table-sortable">*/}
                    {/*    <thead>*/}
                    {/*    <tr>*/}
                    {/*        <th className="table-col-name" onClick={() => {*/}
                    {/*            sortTableByColumn(document.querySelector('table'), document.querySelector('table-col-name'))*/}
                    {/*        }}>Наименование</th>*/}
                    {/*        <th className="table-col-description">Краткое описание эксперимента</th>*/}
                    {/*        <th className="table-col-date">Дата эксперимента</th>*/}
                    {/*    </tr>*/}
                    {/*    </thead>*/}
                    {/*    <tbody>*/}
                    {/*    <tr>*/}
                    {/*        <td className="table-col-name">Эксперимент 1</td>*/}
                    {/*        <td className="table-col-description">Проверка адаптаци по 15, 30 и 50 точкам с ЛИНЕЙНЫМИ*/}
                    {/*            ТРЕНДАМИ.*/}
                    {/*            Проверка получения прогнозов ошибки по моделям по 150, 30 и 50 точкам.*/}
                    {/*        </td>*/}
                    {/*        <td className="table-col-date">22/05/2022</td>*/}
                    {/*        <td className="table-col-full_description"><a*/}
                    {/*            className="closing-button-ch"><span>Подробнее</span></a></td>*/}
                    {/*        <td className="table-col-open"><a className="closing-button-c"><span>Открыть</span></a></td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td className="table-col-name">Эксперимент 2</td>*/}
                    {/*        <td className="table-col-description">Проверка адаптаци по 15, 30 и 50 точкам с ЛИНЕЙНЫМИ*/}
                    {/*            ТРЕНДАМИ.*/}
                    {/*            Проверка получения прогнозов ошибки по моделям по 150, 30 и 50 точкам.*/}
                    {/*        </td>*/}
                    {/*        <td className="table-col-date">20/05/2022</td>*/}
                    {/*        <td className="table-col-full_description"><a*/}
                    {/*            className="closing-button-ch"><span>Подробнее</span></a></td>*/}
                    {/*        <td className="table-col-open"><a className="closing-button-c"><span>Открыть</span></a></td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td className="table-col-name">Модель неадекватна</td>*/}
                    {/*        <td className="table-col-description">Проверка адаптаци по 15, 30 и 50 точкам с ЛИНЕЙНЫМИ*/}
                    {/*            ТРЕНДАМИ.*/}
                    {/*            Проверка получения прогнозов ошибки по моделям по 150, 30 и 50 точкам.*/}
                    {/*        </td>*/}
                    {/*        <td className="table-col-date">12/06/2022</td>*/}
                    {/*        <td className="table-col-full_description"><a*/}
                    {/*            className="closing-button-ch"><span>Подробнее</span></a></td>*/}
                    {/*        <td className="table-col-open"><a className="closing-button-c"><span>Открыть</span></a></td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td className="table-col-name">Эксперимент со ступеньками</td>*/}
                    {/*        <td className="table-col-description">Проверка адаптаци по 15, 30 и 50 точкам с ЛИНЕЙНЫМИ*/}
                    {/*            ТРЕНДАМИ.*/}
                    {/*            Проверка получения прогнозов ошибки по моделям по 150, 30 и 50 точкам.*/}
                    {/*        </td>*/}
                    {/*        <td className="table-col-date">12/04/2022</td>*/}
                    {/*        <td className="table-col-full_description"><a*/}
                    {/*            className="closing-button-ch"><span>Подробнее</span></a></td>*/}
                    {/*        <td className="table-col-open"><a className="closing-button-c"><span>Открыть</span></a></td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td className="table-col-name">Эксперимент с трендами</td>*/}
                    {/*        <td className="table-col-description">Проверка адаптаци по 15, 30 и 50 точкам с ЛИНЕЙНЫМИ*/}
                    {/*            ТРЕНДАМИ.*/}
                    {/*            Проверка получения прогнозов ошибки по моделям по 150, 30 и 50 точкам.*/}
                    {/*        </td>*/}
                    {/*        <td className="table-col-date">02/05/2022</td>*/}
                    {/*        <td className="table-col-full_description"><a*/}
                    {/*            className="closing-button-ch"><span>Подробнее</span></a></td>*/}
                    {/*        <td className="table-col-open"><a className="closing-button-c"><span>Открыть</span></a></td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td className="table-col-name">Добились адекватности</td>*/}
                    {/*        <td className="table-col-description">Проверка адаптаци по 15, 30 и 50 точкам с ЛИНЕЙНЫМИ*/}
                    {/*            ТРЕНДАМИ.*/}
                    {/*            Проверка получения прогнозов ошибки по моделям по 150, 30 и 50 точкам.*/}
                    {/*        </td>*/}
                    {/*        <td className="table-col-date">22/04/2022</td>*/}
                    {/*        <td className="table-col-full_description"><a*/}
                    {/*            className="closing-button-ch"><span>Подробнее</span></a></td>*/}
                    {/*        <td className="table-col-open"><a className="closing-button-c"><span>Открыть</span></a></td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td className="table-col-name">Эксперимент 112</td>*/}
                    {/*        <td className="table-col-description">Проверка адаптаци по 15, 30 и 50 точкам с ЛИНЕЙНЫМИ*/}
                    {/*            ТРЕНДАМИ.*/}
                    {/*            Проверка получения прогнозов ошибки по моделям по 150, 30 и 50 точкам.*/}
                    {/*        </td>*/}
                    {/*        <td className="table-col-date">07/04/2022</td>*/}
                    {/*        <td className="table-col-full_description"><a*/}
                    {/*            className="closing-button-ch"><span>Подробнее</span></a></td>*/}
                    {/*        <td className="table-col-open"><a className="closing-button-c"><span>Открыть</span></a></td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td className="table-col-name">Эксперимент 12</td>*/}
                    {/*        <td className="table-col-description">Проверка адаптаци по 15, 30 и 50 точкам с ЛИНЕЙНЫМИ*/}
                    {/*            ТРЕНДАМИ.*/}
                    {/*            Проверка получения прогнозов ошибки по моделям по 150, 30 и 50 точкам.*/}
                    {/*        </td>*/}
                    {/*        <td className="table-col-date">03/05/2022</td>*/}
                    {/*        <td className="table-col-full_description"><a*/}
                    {/*            className="closing-button-ch"><span>Подробнее</span></a></td>*/}
                    {/*        <td className="table-col-open"><a className="closing-button-c"><span>Открыть</span></a></td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td className="table-col-name">Эксперимент 12</td>*/}
                    {/*        <td className="table-col-description">Проверка адаптаци по 15, 30 и 50 точкам с ЛИНЕЙНЫМИ*/}
                    {/*            ТРЕНДАМИ.*/}
                    {/*            Проверка получения прогнозов ошибки по моделям по 150, 30 и 50 точкам.*/}
                    {/*        </td>*/}
                    {/*        <td className="table-col-date">03/05/2022</td>*/}
                    {/*        <td className="table-col-full_description"><a*/}
                    {/*            className="closing-button-ch"><span>Подробнее</span></a></td>*/}
                    {/*        <td className="table-col-open"><a className="closing-button-c"><span>Открыть</span></a></td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td className="table-col-name">Эксперимент 12</td>*/}
                    {/*        <td className="table-col-description">Проверка адаптаци по 15, 30 и 50 точкам с ЛИНЕЙНЫМИ*/}
                    {/*            ТРЕНДАМИ.*/}
                    {/*            Проверка получения прогнозов ошибки по моделям по 150, 30 и 50 точкам.*/}
                    {/*        </td>*/}
                    {/*        <td className="table-col-date">03/05/2022</td>*/}
                    {/*        <td className="table-col-full_description"><a*/}
                    {/*            className="closing-button-ch"><span>Подробнее</span></a></td>*/}
                    {/*        <td className="table-col-open"><a className="closing-button-c"><span>Открыть</span></a></td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td className="table-col-name">Эксперимент 12</td>*/}
                    {/*        <td className="table-col-description">Проверка адаптаци по 15, 30 и 50 точкам с ЛИНЕЙНЫМИ*/}
                    {/*            ТРЕНДАМИ.*/}
                    {/*            Проверка получения прогнозов ошибки по моделям по 150, 30 и 50 точкам.*/}
                    {/*        </td>*/}
                    {/*        <td className="table-col-date">03/05/2022</td>*/}
                    {/*        <td className="table-col-full_description"><a*/}
                    {/*            className="closing-button-ch"><span>Подробнее</span></a></td>*/}
                    {/*        <td className="table-col-open"><a className="closing-button-c"><span>Открыть</span></a></td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td className="table-col-name">Эксперимент 12</td>*/}
                    {/*        <td className="table-col-description">Проверка адаптаци по 15, 30 и 50 точкам с ЛИНЕЙНЫМИ*/}
                    {/*            ТРЕНДАМИ.*/}
                    {/*            Проверка получения прогнозов ошибки по моделям по 150, 30 и 50 точкам.*/}
                    {/*        </td>*/}
                    {/*        <td className="table-col-date">03/05/2022</td>*/}
                    {/*        <td className="table-col-full_description"><a*/}
                    {/*            className="closing-button-ch"><span>Подробнее</span></a></td>*/}
                    {/*        <td className="table-col-open"><a className="closing-button-c"><span>Открыть</span></a></td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td className="table-col-name">Эксперимент 12</td>*/}
                    {/*        <td className="table-col-description">Проверка адаптаци по 15, 30 и 50 точкам с ЛИНЕЙНЫМИ*/}
                    {/*            ТРЕНДАМИ.*/}
                    {/*            Проверка получения прогнозов ошибки по моделям по 150, 30 и 50 точкам.*/}
                    {/*        </td>*/}
                    {/*        <td className="table-col-date">03/05/2022</td>*/}
                    {/*        <td className="table-col-full_description"><a*/}
                    {/*            className="closing-button-ch"><span>Подробнее</span></a></td>*/}
                    {/*        <td className="table-col-open"><a className="closing-button-c"><span>Открыть</span></a></td>*/}
                    {/*    </tr>*/}
                    {/*    <tr>*/}
                    {/*        <td className="table-col-name">Эксперимент 12</td>*/}
                    {/*        <td className="table-col-description">Проверка адаптаци по 15, 30 и 50 точкам с ЛИНЕЙНЫМИ*/}
                    {/*            ТРЕНДАМИ.*/}
                    {/*            Проверка получения прогнозов ошибки по моделям по 150, 30 и 50 точкам.*/}
                    {/*        </td>*/}
                    {/*        <td className="table-col-date">03/05/2022</td>*/}
                    {/*        <td className="table-col-full_description"><a*/}
                    {/*            className="closing-button-ch"><span>Подробнее</span></a></td>*/}
                    {/*        <td className="table-col-open"><a className="closing-button-c"><span>Открыть</span></a></td>*/}
                    {/*    </tr>*/}
                    {/*    </tbody>*/}
                    {/*</table>*/}
                </div>
            </Fragment>
        )
    }
}

export default OpenWin;