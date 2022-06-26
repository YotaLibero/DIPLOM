import React from "react";
import { LineChart, Line, YAxis, XAxis, ReferenceArea, CartesianGrid, Tooltip, Legend } from 'recharts';
import * as XLSX from "xlsx";
import {useState} from "react";


const data0 = [
    {
        "name": 0,
        "Y_1": -0.0334863,
        "Y_2": -3.57923,
        "Y_3": 0.228131,
        "Y_4": -0.241621
    },
    {
        "name": 1,
        "Y_1": 0.212905,
        "Y_2": -3.33229,
        "Y_3": 0.507002,
        "Y_4": -0.650644
    },
    {
        "name": 2,
        "Y_1": 1.02969,
        "Y_2": -3.41564,
        "Y_3": 0.134715,
        "Y_4": -0.467041
    },
    {
        "name": 3,
        "Y_1": 0.174487,
        "Y_2": -3.18043,
        "Y_3": -0.478875,
        "Y_4": -1.30522
    },
    {
        "name": 4,
        "Y_1": 0.376159,
        "Y_2": -3.45495,
        "Y_3": 0.518484,
        "Y_4": -1.68793
    },
    {
        "name": 5,
        "Y_1": 0.998997,
        "Y_2": -3.27595,
        "Y_3": -0.156728,
        "Y_4": -1.13724
    },
    {
        "name": 6,
        "Y_1": -0.456869,
        "Y_2": -3.22316,
        "Y_3": 1.23924,
        "Y_4": -1.71388
    },
    {
        "name": 7,
        "Y_1": 0.458021,
        "Y_2": -3.02036,
        "Y_3": -0.706216,
        "Y_4": -1.32478
    },
    {
        "name": 8,
        "Y_1": -0.321589,
        "Y_2": -1.83018,
        "Y_3": 0.822986,
        "Y_4": -1.37832
    },
    {
        "name": 9,
        "Y_1": 0.0803153,
        "Y_2": -1.76208,
        "Y_3": 2.16553,
        "Y_4": -2.89152
    },
    {
        "name": 10,
        "Y_1": -0.51187,
        "Y_2": -1.92269,
        "Y_3": 0.808806,
        "Y_4": -3.39363
    },
    {
        "name": 11,
        "Y_1": -0.907104,
        "Y_2": -1.22224,
        "Y_3": -0.15196,
        "Y_4": -2.77851
    },
    {
        "name": 12,
        "Y_1": -0.230372,
        "Y_2": -0.362321,
        "Y_3": 0.368472,
        "Y_4": -2.49149
    },
    {
        "name": 13,
        "Y_1": -1.12036,
        "Y_2": -1.17057,
        "Y_3": 0.384992,
        "Y_4": -2.41312
    },
    {
        "name": 14,
        "Y_1": -0.624292,
        "Y_2": -0.37229,
        "Y_3": 0.185017,
        "Y_4": -1.96924
    },
    {
        "name": 15,
        "Y_1": -0.0948854,
        "Y_2": -1.00969,
        "Y_3": -2.04598,
        "Y_4": -1.47888
    },
    {
        "name": 16,
        "Y_1": 0.721447,
        "Y_2": -1.74154,
        "Y_3": -0.574583,
        "Y_4": -1.69886
    },
    {
        "name": 17,
        "Y_1": -0.2845,
        "Y_2": -1.92955,
        "Y_3": -0.403108,
        "Y_4": -2.0869
    },
    {
        "name": 18,
        "Y_1": -0.343767,
        "Y_2": -1.91556,
        "Y_3": 0.370442,
        "Y_4": -1.43234
    },
    {
        "name": 19,
        "Y_1": 0.0782663,
        "Y_2": -1.43851,
        "Y_3": -1.31058,
        "Y_4": -0.468778
    },
    {
        "name": 20,
        "Y_1": 0.136731,
        "Y_2": -1.47013,
        "Y_3": -1.1547,
        "Y_4": -0.809376
    },
    {
        "name": 21,
        "Y_1": 0.171075,
        "Y_2": -2.27373,
        "Y_3": -0.606837,
        "Y_4": -0.155431
    },
    {
        "name": 22,
        "Y_1": 0.358495,
        "Y_2": -2.15137,
        "Y_3": -0.503367,
        "Y_4": -0.0749302
    },
    {
        "name": 23,
        "Y_1": 0.610633,
        "Y_2": -1.81547,
        "Y_3": 0.600905,
        "Y_4": -0.667826
    },
    {
        "name": 24,
        "Y_1": 0.793394,
        "Y_2": -1.26573,
        "Y_3": -0.716734,
        "Y_4": -0.940819
    },
    {
        "name": 25,
        "Y_1": 0.866672,
        "Y_2": -0.275846,
        "Y_3": -0.285039,
        "Y_4": -0.269917
    },
    {
        "name": 26,
        "Y_1": 0.569081,
        "Y_2": -0.604499,
        "Y_3": -1.40448,
        "Y_4": 0.509819
    },
    {
        "name": 27,
        "Y_1": -0.0796243,
        "Y_2": -0.490226,
        "Y_3": 0.0892159,
        "Y_4": 0.92679
    },
    {
        "name": 28,
        "Y_1": 0.204478,
        "Y_2": -1.13433,
        "Y_3": 0.492514,
        "Y_4": 0.681321
    },
    {
        "name": 29,
        "Y_1": 0.023009,
        "Y_2": -2.53557,
        "Y_3": 1.36307,
        "Y_4": 0.348667
    },
    {
        "name": 30,
        "Y_1": -0.441308,
        "Y_2": -1.52905,
        "Y_3": 1.50381,
        "Y_4": 0.0653328
    },
    {
        "name": 31,
        "Y_1": 0.888817,
        "Y_2": -1.69518,
        "Y_3": 1.29384,
        "Y_4": -0.15436
    },
    {
        "name": 32,
        "Y_1": -0.204658,
        "Y_2": -2.61422,
        "Y_3": 0.0650315,
        "Y_4": -0.573018
    },
    {
        "name": 33,
        "Y_1": -0.990671,
        "Y_2": -3.38461,
        "Y_3": 0.158313,
        "Y_4": 0.683526
    },
    {
        "name": 34,
        "Y_1": -0.291809,
        "Y_2": -3.05445,
        "Y_3": 0.520226,
        "Y_4": 0.30239
    },
    {
        "name": 35,
        "Y_1": -0.895195,
        "Y_2": -2.58076,
        "Y_3": 0.332316,
        "Y_4": -0.047907
    },
    {
        "name": 36,
        "Y_1": -0.662394,
        "Y_2": -2.94467,
        "Y_3": 1.04093,
        "Y_4": -1.00783
    },
    {
        "name": 37,
        "Y_1": 0.127905,
        "Y_2": -1.84155,
        "Y_3": 1.31916,
        "Y_4": -0.689873
    },
    {
        "name": 38,
        "Y_1": -0.234587,
        "Y_2": -1.3952,
        "Y_3": -0.114886,
        "Y_4": -1.29588
    },
    {
        "name": 39,
        "Y_1": -0.594287,
        "Y_2": -0.578507,
        "Y_3": -0.0530172,
        "Y_4": -0.951888
    },
    {
        "name": 40,
        "Y_1": -0.751832,
        "Y_2": -0.270515,
        "Y_3": 0.406717,
        "Y_4": 0.431
    },
    {
        "name": 41,
        "Y_1": 0.200166,
        "Y_2": -0.97191,
        "Y_3": -0.231115,
        "Y_4": 0.710026
    },
    {
        "name": 42,
        "Y_1": -0.436646,
        "Y_2": -0.352291,
        "Y_3": -0.416977,
        "Y_4": 0.756773
    },
    {
        "name": 43,
        "Y_1": -0.874506,
        "Y_2": -0.99347,
        "Y_3": -0.857619,
        "Y_4": 1.31375
    },
    {
        "name": 44,
        "Y_1": -0.108856,
        "Y_2": -0.950334,
        "Y_3": -1.72807,
        "Y_4": 2.54479
    },
    {
        "name": 45,
        "Y_1": -0.441331,
        "Y_2": -1.07724,
        "Y_3": -0.951301,
        "Y_4": 2.64892
    },
    {
        "name": 46,
        "Y_1": 0.0634303,
        "Y_2": -1.55888,
        "Y_3": -0.426669,
        "Y_4": 2.59126
    },
    {
        "name": 47,
        "Y_1": 0.380048,
        "Y_2": -2.4226,
        "Y_3": -0.438223,
        "Y_4": 2.52298
    },
    {
        "name": 48,
        "Y_1": 0.462273,
        "Y_2": -2.08128,
        "Y_3": 0.0898386,
        "Y_4": 2.17479
    },
    {
        "name": 49,
        "Y_1": 0.307306,
        "Y_2": -1.59329,
        "Y_3": 0.456905,
        "Y_4": 1.61579
    },
    {
        "name": 50,
        "Y_1": 0.126544,
        "Y_2": -1.62067,
        "Y_3": 1.15017,
        "Y_4": 2.08831
    },
    {
        "name": 51,
        "Y_1": 0.22891,
        "Y_2": -1.00149,
        "Y_3": -0.860516,
        "Y_4": 1.70472
    },
    {
        "name": 52,
        "Y_1": 0.2448,
        "Y_2": -0.971154,
        "Y_3": 1.494,
        "Y_4": 1.881
    },
    {
        "name": 53,
        "Y_1": 0.0327255,
        "Y_2": -1.12259,
        "Y_3": 1.44366,
        "Y_4": 2.30079
    },
    {
        "name": 54,
        "Y_1": -0.221028,
        "Y_2": -2.18305,
        "Y_3": 0.599374,
        "Y_4": 1.78926
    },
    {
        "name": 55,
        "Y_1": 0.0437282,
        "Y_2": -2.59163,
        "Y_3": -0.0642016,
        "Y_4": 1.71337
    },
    {
        "name": 56,
        "Y_1": 0.100901,
        "Y_2": -1.82581,
        "Y_3": 0.201222,
        "Y_4": 1.40512
    },
    {
        "name": 57,
        "Y_1": -0.439631,
        "Y_2": -1.8146,
        "Y_3": -1.14858,
        "Y_4": 1.50353
    },
    {
        "name": 58,
        "Y_1": 0.196267,
        "Y_2": -1.86583,
        "Y_3": 0.0364244,
        "Y_4": 1.22859
    },
    {
        "name": 59,
        "Y_1": 0.47373,
        "Y_2": -1.12062,
        "Y_3": 0.00864954,
        "Y_4": 0.937495
    },
    {
        "name": 60,
        "Y_1": 0.784002,
        "Y_2": -0.923453,
        "Y_3": -0.621901,
        "Y_4": 0.436444
    },
    {
        "name": 61,
        "Y_1": 0.816813,
        "Y_2": -0.849822,
        "Y_3": -0.650078,
        "Y_4": 0.646858
    },
    {
        "name": 62,
        "Y_1": 0.731377,
        "Y_2": -1.1151,
        "Y_3": -1.16171,
        "Y_4": 1.18225
    },
    {
        "name": 63,
        "Y_1": 0.236522,
        "Y_2": -0.815466,
        "Y_3": -0.904405,
        "Y_4": 1.1069
    },
    {
        "name": 64,
        "Y_1": 0.0730846,
        "Y_2": -1.14659,
        "Y_3": 0.475624,
        "Y_4": 0.127885
    },
    {
        "name": 65,
        "Y_1": 0.395706,
        "Y_2": -1.6271,
        "Y_3": 0.104146,
        "Y_4": 0.0970843
    },
    {
        "name": 66,
        "Y_1": 0.612535,
        "Y_2": -1.11303,
        "Y_3": 0.73536,
        "Y_4": 0.200493
    },
    {
        "name": 67,
        "Y_1": 0.493446,
        "Y_2": -1.95663,
        "Y_3": 1.00615,
        "Y_4": 0.268885
    },
    {
        "name": 68,
        "Y_1": 0.135467,
        "Y_2": -2.09636,
        "Y_3": 0.0602759,
        "Y_4": 0.28733
    },
    {
        "name": 69,
        "Y_1": -0.0139491,
        "Y_2": -2.30124,
        "Y_3": -1.01667,
        "Y_4": -0.40262
    },
    {
        "name": 70,
        "Y_1": 0.064357,
        "Y_2": -2.32559,
        "Y_3": -1.29266,
        "Y_4": -0.153561
    },
    {
        "name": 71,
        "Y_1": 0.485317,
        "Y_2": -1.82356,
        "Y_3": -0.261876,
        "Y_4": -0.548173
    },
    {
        "name": 72,
        "Y_1": 1.26954,
        "Y_2": -1.33781,
        "Y_3": -0.934168,
        "Y_4": 0.00120909
    },
    {
        "name": 73,
        "Y_1": 0.669853,
        "Y_2": -1.71686,
        "Y_3": -0.653088,
        "Y_4": 0.0947492
    },
    {
        "name": 74,
        "Y_1": 0.630552,
        "Y_2": -2.30015,
        "Y_3": -0.922573,
        "Y_4": 0.207181
    },
    {
        "name": 75,
        "Y_1": 0.607034,
        "Y_2": -2.5143,
        "Y_3": -1.06304,
        "Y_4": 0.958175
    },
    {
        "name": 76,
        "Y_1": 1.29502,
        "Y_2": -2.98229,
        "Y_3": -0.407387,
        "Y_4": 0.398729
    },
    {
        "name": 77,
        "Y_1": 1.42216,
        "Y_2": -2.40625,
        "Y_3": 0.052584,
        "Y_4": 0.813702
    },
    {
        "name": 78,
        "Y_1": -0.493463,
        "Y_2": -2.21869,
        "Y_3": -0.336935,
        "Y_4": 0.517171
    },
    {
        "name": 79,
        "Y_1": 0.101086,
        "Y_2": -1.79461,
        "Y_3": 0.810751,
        "Y_4": 0.337036
    },
    {
        "name": 80,
        "Y_1": -0.180706,
        "Y_2": -1.08325,
        "Y_3": -0.214668,
        "Y_4": -0.200073
    },
    {
        "name": 81,
        "Y_1": -0.338717,
        "Y_2": -1.04014,
        "Y_3": 0.848045,
        "Y_4": 0.480174
    },
    {
        "name": 82,
        "Y_1": -0.12245,
        "Y_2": -0.664889,
        "Y_3": 0.0804905,
        "Y_4": 0.0302872
    },
    {
        "name": 83,
        "Y_1": -0.427674,
        "Y_2": 0.236588,
        "Y_3": -0.619404,
        "Y_4": -0.66399
    },
    {
        "name": 84,
        "Y_1": -0.0313429,
        "Y_2": -0.709782,
        "Y_3": -0.625529,
        "Y_4": -0.42035
    },
    {
        "name": 85,
        "Y_1": -0.474621,
        "Y_2": -0.937184,
        "Y_3": 0.120108,
        "Y_4": -0.655688
    },
    {
        "name": 86,
        "Y_1": 0.759782,
        "Y_2": -0.757441,
        "Y_3": 0.0283695,
        "Y_4": -0.611267
    },
    {
        "name": 87,
        "Y_1": -1.05062,
        "Y_2": -0.849376,
        "Y_3": 0.294486,
        "Y_4": -0.24767
    },
    {
        "name": 88,
        "Y_1": -0.0679857,
        "Y_2": -0.682394,
        "Y_3": 0.668634,
        "Y_4": 0.0287496
    },
    {
        "name": 89,
        "Y_1": 1.10913,
        "Y_2": -0.260302,
        "Y_3": 0.6817,
        "Y_4": 0.786419
    },
    {
        "name": 90,
        "Y_1": 1.12277,
        "Y_2": -0.114039,
        "Y_3": 0.638557,
        "Y_4": 0.0198549
    },
    {
        "name": 91,
        "Y_1": 1.17719,
        "Y_2": -0.351577,
        "Y_3": 1.07776,
        "Y_4": -0.629255
    },
    {
        "name": 92,
        "Y_1": 0.0781027,
        "Y_2": -0.562412,
        "Y_3": -0.127067,
        "Y_4": -0.135807
    },
    {
        "name": 93,
        "Y_1": -0.78765,
        "Y_2": 0.240925,
        "Y_3": -0.0337212,
        "Y_4": 0.581049
    },
    {
        "name": 94,
        "Y_1": -0.149798,
        "Y_2": -0.330303,
        "Y_3": -0.575411,
        "Y_4": 1.28954
    },
    {
        "name": 95,
        "Y_1": 0.698655,
        "Y_2": -0.521532,
        "Y_3": -0.840615,
        "Y_4": 0.84615
    },
    {
        "name": 96,
        "Y_1": 0.9601,
        "Y_2": -1.18234,
        "Y_3": -0.874993,
        "Y_4": 1.0141
    },
    {
        "name": 97,
        "Y_1": 0.0787863,
        "Y_2": -1.33773,
        "Y_3": -0.838253,
        "Y_4": 0.355171
    },
    {
        "name": 98,
        "Y_1": 0.306557,
        "Y_2": -2.41467,
        "Y_3": -2.2531,
        "Y_4": 0.689508
    },
    {
        "name": 99,
        "Y_1": 0.413227,
        "Y_2": -1.5803,
        "Y_3": -0.853098,
        "Y_4": 0.0195676
    }
]

const getAxisYDomain = (from, to, ref, offset) => {
    const refData = data0.slice(from - 1, to);
    let [bottom, top] = [refData[0][ref], refData[0][ref]];
    refData.forEach(d => {
        if (d[ref] > top) top = d[ref];
        if (d[ref] < bottom) bottom = d[ref];
    });

    return [(bottom | 0) - offset, (top | 0) + offset];
};

const initialState = {
    data0,
    left: "dataMin",
    right: "dataMax",
    refAreaLeft: "",
    refAreaRight: "",
    top: "dataMax+1",
    bottom: "dataMin-1",
    top2: "dataMax+20",
    bottom2: "dataMin-20",
    animation: true
};

class Chart3 extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    zoom() {
        let { refAreaLeft, refAreaRight, data0 } = this.state;

        if (refAreaLeft === refAreaRight || refAreaRight === "") {
            this.setState(() => ({
                refAreaLeft: "",
                refAreaRight: ""
            }));
            return;
        }

        // xAxis domain
        if (refAreaLeft > refAreaRight)
            [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];

        // yAxis domain
        const [bottom, top] = getAxisYDomain(refAreaLeft, refAreaRight, "cost", 2);
        const [bottom2, top2] = getAxisYDomain(
            refAreaLeft,
            refAreaRight,
            "impression",
            50
        );

        this.setState(() => ({
            refAreaLeft: "",
            refAreaRight: "",
            data: data0.slice(),
            left: refAreaLeft,
            right: refAreaRight,
            bottom,
            top,
            bottom2,
            top2
        }));
    }

    zoomOut() {
        this.setState(({ data0 }) => ({
            data: data0.slice(),
            refAreaLeft: "",
            refAreaRight: "",
            left: "dataMin",
            right: "dataMax",
            top: "dataMax+1",
            top2: "dataMax+50",
            bottom: "dataMin-1"
        }));
    }


    render() {
        // const file = document.getElementById('excel_file').files[0];
        const {
            data0,
            left,
            right,
            refAreaLeft,
            refAreaRight,
            top,
            bottom,
            top2,
            bottom2
        } = this.state;

        return (
            <div className="highlight-bar-charts">
                <button className="btn update" onClick={this.zoomOut.bind(this)}>
                    Вернуться
                </button>
                <LineChart
                    width={670}
                    height={360}
                    data={data0}
                    margin={{ top: 5, right: 20, left: -5, bottom: 15 }}
                    onMouseDown={e => this.setState({ refAreaLeft: e.activeLabel })}
                    onMouseMove={e =>
                        this.state.refAreaLeft &&
                        this.setState({ refAreaRight: e.activeLabel })
                    }
                    onMouseUp={this.zoom.bind(this)} >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        allowDataOverflow={true}
                        dataKey="name"
                        domain={[left, right]}
                        type="number"
                    />
                    <YAxis
                        allowDataOverflow={true}
                        domain={[bottom, top]}
                        type="number"
                        yAxisId="1"
                    />
                    <YAxis
                        orientation="right"
                        allowDataOverflow={true}
                        domain={[bottom2, top2]}
                        type="number"
                        yAxisId="4"
                    />
                    <Tooltip />
                    {/*<Legend />*/}
                    <Line yAxisId="1" type="natural" dataKey="Y_1" stroke="#8D0101" strokeWidth={2} dot={false} animationDuration={300} />
                    <Line yAxisId="1" type="natural" dataKey="Y_2" stroke="#006149" strokeWidth={2} dot={false} animationDuration={300} />
                    <Line yAxisId="1" type="natural" dataKey="Y_3" stroke="#027ED9" strokeWidth={2} dot={false} animationDuration={300} />
                    <Line yAxisId="1" type="natural" dataKey="Y_4" stroke="#D99D02" strokeWidth={2} dot={false} animationDuration={300} />
                    {refAreaLeft && refAreaRight ? (
                        <ReferenceArea
                            yAxisId="1"
                            x1={refAreaLeft}
                            x2={refAreaRight}
                            strokeOpacity={0.3}
                        />
                    ) : null}
                </LineChart>
            </div>
        )
    };
}

export default Chart3;
