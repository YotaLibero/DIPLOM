import React from "react";
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {connect} from 'react-redux';

class CreateLineChart_3 extends React.Component {

    render() {
        return (
            <LineChart width={546} height={145} data={this.props.data}
                       margin={{ top: 5, right: 20, left: -25, bottom: 1 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                {/*<Legend />*/}
                <Line type="monotone" dataKey="Y_4" stroke="#8D0101" strokeWidth={2} dot={false} />
                {/*<Line type="monotone" dataKey="Procuct B" stroke="#FF0000" />*/}
            </LineChart>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        data: state.createExperiment.dataForGraphs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateLineChart_3);