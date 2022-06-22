import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import '../pages/create.css';

// пока excel
// parameters: json_array, chosen_frame
const LineChart = () => {

    const d3Chart = useRef()

    const parseDate = d3.timeParse('%Y-%m-%d')

    function conversor(d) {
        d.Y_1 = +d.Y_1;
        d.Y_2 = +d.Y_2;
        d.Y_3 = +d.Y_3;
        d.Y_4 = +d.Y_4;

        return d;
    }

    useEffect(()=>{
        // json_array
        fetch('./data.json')
            .then(response => response.json())
            .then(data=>{

                // Transform data
                const permits = data.filter(event => {
                    return event.eventtype === 'Shooting Permit'
                })

                // Get all the dates in an array
                const dates = [...new Set(permits.map(each=>each.enteredon.slice(0,10)))]

                let CountsByDate = []

                // Get counts(number of times a permit entered) on each date
                dates.map(time=>{
                    let date = time
                    let count = 0

                    permits.map(each=>{
                        let timestamp = each.enteredon.slice(0,10)
                        if(timestamp === date) {count+=1}
                    })

                    const counts = {date:parseDate(date), count:count}

                    CountsByDate.push(counts)
                })

                console.log(CountsByDate)

                const margin = {top: 5, right: 10, bottom: 23, left: 25}
                // chosen_frame
                const width = parseInt(d3.select('#r-frame1').style('width')) - margin.left - margin.right
                const height = parseInt(d3.select('#r-frame1').style('height')) - margin.top - margin.bottom

                // Set up chart
                const svg = d3.select(d3Chart.current)
                    .attr('width', width + margin.left + margin.right)
                    .attr('height', height + margin.top + margin.bottom)
                    .append('g')
                    .attr('transform', 'translate('+ margin.left + ',' + margin.top + ')');

                // x axis scale
                const x = d3.scaleTime()
                    .domain(d3.extent(CountsByDate, function(d){return d.date}))
                    .range([0,width])

                svg.append('g')
                    .attr('transform', 'translate(0,' + height + ')')
                    .call(d3.axisBottom(x))

                // Get the max value of counts
                const max = d3.max(CountsByDate, function(d){return d.count})

                // y axis scale
                const y = d3.scaleLinear()
                    .domain([0, max])
                    .range([height,0])

                svg.append('g')
                    .call(d3.axisLeft(y))


                // Draw line
                svg.append('path')
                    .datum(CountsByDate)
                    .attr('fill', 'none')
                    .attr('stroke','black')
                    .attr('stroke-width', 3)
                    .attr('d', d3.line()
                        .x(function(d){return x(d.date)})
                        .y(function(d){return y(d.count)})
                    )

                // Add title
                svg.append('text')
                    .attr('x',(width/2))
                    .attr('y', (margin.top/5 - 10))
                    .attr('text-anchor', 'middle')
                    .attr('font-size', '16px')
                    .attr('fill','black')
                    // .text('New York City Film Permits entered in 2020 - Shooting Permit')
            })
    },[])

    return (
        <div id='d3demo'>
            <svg ref={d3Chart}></svg>
        </div>
    )
}

export default LineChart;
