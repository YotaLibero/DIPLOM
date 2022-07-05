import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
// import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
// import "./styles.css";
import Button from "./Button";
import _Delete_btn from "../modalswin/_Delete";
import filterFactory, {textFilter} from 'react-bootstrap-table2-filter';

import axios from 'axios';
import { data } from "jquery";

// const products = [
//     {
//         id: 1,
//         name: "Marrilee",
//         description: "Le Clercq",
//         date: "2022-04-22"
//     },
//     {
//         id: 2,
//         name: "Nancey",
//         description: "quia molestiae reprehenderit quasi aspernatur\\naut expedita occaecati aliquam eveniet laudantium\\nomnis quibusdam delectus saepe quia accusamus maiores nam est\\ncum et ducimus et vero voluptates excepturi deleniti ratione",
//         date: "2022-04-21"
//     },
//     {
//         id: 3,
//         name: "Malanie",
//         description: "Decroix",
//         date: "2022-04-23"
//     },
//     {
//         id: 4,
//         name: "Darcee",
//         description: "Milverton",
//         date: "2022-04-24"
//     },
//     {
//         id: 5,
//         name: "Robbie",
//         description: "quia molestiae reprehenderit quasi aspernatur\\naut expedita occaecati aliquam eveniet laudantium\\nomnis quibusdam delectus saepe quia accusamus maiores nam est\\ncum et ducimus et vero voluptates excepturi deleniti ratione",
//         date: "2022-04-24"
//     },
//     {
//         id: 6,
//         name: "Courtney",
//         description: "Gaynor",
//         date: "2022-04-24"
//     },
//     {
//         id: 7,
//         name: "Dorelia",
//         description: "quia molestiae reprehenderit quasi aspernatur\\naut expedita occaecati aliquam eveniet laudantium\\nomnis quibusdam delectus saepe quia accusamus maiores nam est\\ncum et ducimus et vero voluptates excepturi deleniti ratione",
//         date: "2022-04-21"
//     },
//     {
//         id: 8,
//         name: "Wylma",
//         description: "Lidgerton",
//         date: "2022-04-27"
//     },
//     {
//         id: 9,
//         name: "Lind",
//         description: "quia molestiae reprehenderit quasi aspernatur\\naut expedita occaecati aliquam eveniet laudantium\\nomnis quibusdam delectus saepe quia accusamus maiores nam est\\ncum et ducimus et vero voluptates excepturi deleniti ratione",
//         date: "2022-04-27"
//     },
//     {
//         id: 10,
//         name: "Palm",
//         description: "quia molestiae reprehenderit quasi aspernatur\\naut expedita occaecati aliquam eveniet laudantium\\nomnis quibusdam delectus saepe quia accusamus maiores nam est\\ncum et ducimus et vero voluptates excepturi deleniti ratione",
//         date: "2022-04-27"
//     },
//     {
//         id: 11,
//         name: "Beale",
//         description: "Brittles",
//         date: "2022-04-27"
//     },
//     {
//         id: 12,
//         name: "Holt",
//         description: "Meineking",
//         date: "2022-04-27"
//     },
//     {
//         id: 13,
//         name: "Haroun",
//         description: "Gauge",
//         date: "2022-05-04"
//     },
//     {
//         id: 14,
//         name: "Maury",
//         description: "Wanek",
//         date: "2022-05-04"
//     },
//     {
//         id: 15,
//         name: "Ted",
//         description: "quia molestiae reprehenderit quasi aspernatur\\naut expedita occaecati aliquam eveniet laudantium\\nomnis quibusdam delectus saepe quia accusamus maiores nam est\\ncum et ducimus et vero voluptates excepturi deleniti ratione",
//         date: "2022-05-05"
//     },
//     {
//         id: 16,
//         name: "Hillyer",
//         description: "Wistance",
//         date: "2022-05-06"
//     },
//     {
//         id: 17,
//         name: "Adora",
//         description: "Rastall",
//         date: "2022-04-06"
//     },
//     {
//         id: 18,
//         name: "Charil",
//         description: "O' Liddy",
//         date: "2022-05-06"
//     },
//     {
//         id: 19,
//         name: "Ardelle",
//         description: "Hasney",
//         date: "2022-05-08"
//     },
//     {
//         id: 20,
//         name: "Denny",
//         description: "Vida",
//         date: "2022-05-08"
//     },
//     {
//         id: 21,
//         name: "Aline",
//         description: "Fuentez",
//         date: "2022-05-08"
//     },
//     {
//         id: 22,
//         name: "Claresta",
//         description: "Snedden",
//         date: "2022-05-08"
//     },
//     {
//         id: 23,
//         name: "Karina",
//         description: "Volante",
//         date: "2022-06-09"
//     },
//     {
//         id: 24,
//         name: "Rochell",
//         description: "Sheriff",
//         date: "2022-05-09"
//     },
//     {
//         id: 25,
//         name: "Ara",
//         description: "D'Alwis",
//         date: "2022-04-09"
//     },
//     {
//         id: 26,
//         name: "Cherlyn",
//         description: "Wandrich",
//         date: "2022-05-11"
//     },
//     {
//         id: 27,
//         name: "Rosabel",
//         description: "Muggleston",
//         date: "2022-05-11"
//     },
//     {
//         id: 28,
//         name: "Maressa",
//         description: "Colleymore",
//         date: "2022-05-12"
//     },
//     {
//         id: 29,
//         name: "Phillip",
//         description: "Kelshaw",
//         date: "2022-05-13"
//     },
//     {
//         id: 30,
//         name: "Ferrell",
//         description: "Barber",
//         date: "2022-05-15"
//     },
//     {
//         id: 31,
//         name: "Callida",
//         description: "Kimbly",
//         date: "2022-05-16"
//     },
//     {
//         id: 32,
//         name: "Francesca",
//         description: "Wardel",
//         date: "2022-05-19"
//     },
//     {
//         id: 33,
//         name: "Timmie",
//         description: "Meaden",
//         date: "2022-05-23"
//     },
//     {
//         id: 34,
//         name: "Brandie",
//         description: "Fursland",
//         date: "2022-05-15"
//     },
//     {
//         id: 35,
//         name: "Tirrell",
//         description: "Knibley",
//         date: "2022-05-11"
//     },
//     {
//         id: 36,
//         name: "Juanita",
//         description: "Mayfield",
//         date: "2022-05-11"
//     },
//     {
//         id: 37,
//         name: "Luelle",
//         description: "Dibdale",
//         date: "2022-05-16"
//     },
//     {
//         id: 38,
//         name: "Ralina",
//         description: "De Maine",
//         date: "2022-05-16"
//     },
//     {
//         id: 39,
//         name: "Oren",
//         description: "Urch",
//         date: "2022-05-18"
//     },
//     {
//         id: 40,
//         name: "Fiann",
//         description: "Menhenitt",
//         date: "2022-05-29"
//     }
// ];

class DataTable extends React.Component {

    state = {

    }

    constructor() {
        super();

        this.state = {
            isOpen5: false,
            // For displaying data
            columns: [
                {
                    dataField: "id",
                    text: "ID",
                    sort: true
                },
                {
                    dataField: "name",
                    text: "Наименование",
                    sort: true,
                    filter: textFilter(),
                },
                {
                    dataField: "date",
                    text: "Дата эксперимента",
                    sort: true
                },
                {
                    dataField: "description",
                    text: "Описание эксперимента",
                    sort: true,
                    filter: textFilter(),
                },
                {
                    dataField: "delete",
                    text: "",
                    formatter: this.linkDelete
                },
                {
                    dataField: "open",
                    text: "",
                    formatter: this.linkOpen,
                }
            ],
            isDelete: true,
            data: [],
        };

        

        this.onDeleteChanged.bind(this);
        this.onOpenChanged.bind(this);
    }


    async componentDidMount() {
        let newdata = (await axios.get('http://localhost:8000/experiments')).data
        let dataForTable = []
        for(let i = 0; i < newdata.length; ++i) {
            dataForTable[i] = {}
            dataForTable[i].id = newdata[i].Experiment_ID
            dataForTable[i].name = newdata[i].Experiment_Name
            dataForTable[i].date = newdata[i].Experiment_Date
            dataForTable[i].description = newdata[i].Experiment_Description
        }
        this.setState({data: dataForTable})
    }

    onDeleteChanged() {
        this.setState({ isDelete: !this.state.isDelete });
        console.log(this.state.isDelete);
        console.log("УДАЛЕНО");
    }

    linkDelete = (cell, row, rowIndex, formatExtraData) => {
        return (
                <Button
                    className="delete-btn"
                    onClick={() => {
                        this.onDeleteChanged(row);
                    }}
                >
                    Удалить
                </Button>
        );
    };

    onOpenChanged() {
        this.setState({ isDelete: !this.state.isDelete });
        console.log(this.state.isDelete);
        console.log("ОТКРЫТО");
    }

    linkOpen = (cell, row, rowIndex, formatExtraData) => {
        return (
            <Button
                className="open-btn"
                onClick={() => {
                    this.onOpenChanged(row);
                }}
            >
                Открыть
            </Button>
        );
    };

    render() {
        return (
            // <div style={{ padding: "20px" }}>
            <div>
                <BootstrapTable
                    keyField="id"
                    striped
                    hover
                    condensed
                    data={this.state.data}
                    columns={this.state.columns}
                    filter={filterFactory()}
                />
            </div>
        );
    }
}

export default DataTable;

// import { MouseEventHandler, useCallback, useState } from "react";
// import data from "./data.json";
// import Button from "./Button";
// import _Delete_btn from "../modalswin/_Delete";
//
// type Data = typeof data;
// const SortKeys = data.keys();
// // type SortKeys = keyof Data[0];
//
// type SortOrder = "ascn" | "desc";
//
// function sortData({
//                       tableData,
//                       sortKey,
//                       reverse,
//                   }: {
//     tableData: Data;
//     sortKey: SortKeys;
//     reverse: boolean;
// }) {
//     if (!sortKey) return tableData;
//
//     const sortedData = data.sort((a, b) => {
//         return a[sortKey] > b[sortKey] ? 1 : -1;
//     });
//
//     if (reverse) {
//         return sortedData.reverse();
//     }
//
//     return sortedData;
// }
//
// function SortButton({
//                         sortOrder,
//                         columnKey,
//                         sortKey,
//                         onClick,
//                     }: {
//     sortOrder: SortOrder;
//     columnKey: SortKeys;
//     sortKey: SortKeys;
//     onClick: MouseEventHandler<HTMLButtonElement>;
// }) {
//     return (
//         <button
//             onClick={onClick}
//             className={`${
//                 sortKey === columnKey && sortOrder === "desc"
//                     ? "sort-button sort-reverse"
//                     : "sort-button"
//             }`}
//         >
//             ▲
//         </button>
//     );
// }
// const state = {
//     isOpen5: false,
// }
// const openModal5 = () => {this.setState({ isOpen5: true });}
// const handleSubmit5 = () => {
//     console.log('Submit function!');
//     this.setState({ isOpen5: false });
// }
// const handleCancel5 = () => {
//     console.log('Cancel function!');
//     this.setState({ isOpen5: false });
// }
//
// function SortableTable({ data }: { data: Data }) {
//     const [sortKey, setSortKey] = useState<SortKeys>("last_name");
//     const [sortOrder, setSortOrder] = useState<SortOrder>("ascn");
//
//     const headers: { key: SortKeys; label: string }[] = [
//         { key: "id", label: "ID" },
//         { key: "name", label: "Наименование" },
//         { key: "description", label: "Описание" },
//         { key: "date", label: "Дата" },
//         {},
//         {},
//     ];
//
//
//     const sortedData = useCallback(
//         () => sortData({ tableData: data, sortKey, reverse: sortOrder === "desc" }),
//         [data, sortKey, sortOrder]
//     );
//
//     function changeSort(key: SortKeys) {
//         setSortOrder(sortOrder === "ascn" ? "desc" : "ascn");
//
//         setSortKey(key);
//     }
//
//     return (
//         <table>
//             <thead>
//             <tr>
//                 {headers.map((row) => {
//                     return (
//                         <td key={row.key}>
//                             {row.label}{" "}
//                             <SortButton
//                                 columnKey={row.key}
//                                 onClick={() => changeSort(row.key)}
//                                 {...{
//                                     sortOrder,
//                                     sortKey,
//                                 }}
//                             />
//                         </td>
//                     );
//                 })}
//             </tr>
//             </thead>
//
//             <tbody>
//             {sortedData().map((experiment) => {
//                 return (
//                     <tr key={experiment.id}>
//                         <td>{experiment.id}</td>
//                         <td>{experiment.name}</td>
//                         <td>{experiment.description}</td>
//                         <td>{experiment.date}</td>
//                         <td>
//                             <Button className="delete-btn" onClick={openModal5}></Button>
//                             <_Delete_btn isOpen5={state.isOpen5}
//                                     onCancel5={handleCancel5}
//                                     onSubmit5={handleSubmit5}
//                             />
//                         </td>
//                         <td><Button className="open-btn" onClick={handleSubmit5}></Button></td>
//                     </tr>
//                 );
//             })}
//             </tbody>
//         </table>
//     );
// }
//
// export default SortableTable;