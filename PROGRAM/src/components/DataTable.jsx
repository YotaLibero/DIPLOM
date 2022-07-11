import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
// import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
// import "./styles.css";
import Button from "./Button";
import _Delete_btn from "../modalswin/_Delete";
import filterFactory, {textFilter} from 'react-bootstrap-table2-filter';
import {connect} from 'react-redux';

import axios from 'axios';
import { data } from "jquery";
import { changeListOfExperiments } from "../reducers/OpenExperimentReducer";

const getList = (listFromBD) => {
    let dataForTable = []
    for(let i = 0; i < listFromBD.length; ++i) {
        dataForTable[i] = {}
        dataForTable[i].id = listFromBD[i].Experiment_ID
        dataForTable[i].number = i+1
        dataForTable[i].name = listFromBD[i].Experiment_Name
        dataForTable[i].date = listFromBD[i].Experiment_Date
        dataForTable[i].description = listFromBD[i].Experiment_Description
    }
    return dataForTable
}

const DeleteRow = (row) => {
    console.log(typeof row.id)
    return (dispatch, getState) => {
        axios.delete('http://localhost:8000/experiments', {
            data: {id: row.id}
        }).then(res => {
            if(res.data == 1) {
                axios.get('http://localhost:8000/experiments').then(res => {
                    dispatch(changeListOfExperiments( getList(res.data) ))
                })
            }
        })
    }
    
}


class DataTable extends React.Component {

    constructor() {
        super();

        this.state = {
            isOpen5: false,
            // For displaying data
            columns: [
                {
                    dataField: "id",
                    text: "ID",
                    sort: false,
                    hidden: true
                },
                {
                    dataField: "number",
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
            isDelete: true
        };

        

        this.onOpenChanged.bind(this);
    }


    componentDidMount() {
        const {changeListOfExperiments} = this.props;

        axios.get('http://localhost:8000/experiments').then(res => {
            changeListOfExperiments(getList(res.data));
        })
        
    }

    linkDelete = (cell, row, rowIndex, formatExtraData) => {
        return (
                <Button
                    className="delete-btn"
                    onClick={() => {
                        this.props.deleteRow(row);
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
                    data={this.props.data}
                    columns={this.state.columns}
                    filter={filterFactory()}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.openExperiment.listOfExperiments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeListOfExperiments: (e) => dispatch(changeListOfExperiments(e)),
        deleteRow: (e) => dispatch(DeleteRow(e))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataTable);

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