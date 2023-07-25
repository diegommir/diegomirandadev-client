import { scaleTime, scaleLinear, extent, axisBottom, axisLeft, line } from "d3"
// eslint-disable-next-line
import { Selection } from "d3"

const TimeLinePlot = () => {
    let width
    let height
    let margin
    let data
    let xValue
    let yValue

    /**
     * @param {Selection} selection 
     */
    const main = selection => {
        const xScale = scaleTime()
            .domain(extent(data, xValue))
            .range([margin.left, width - margin.right])

        const yScale = scaleLinear()
            .domain(extent(data, yValue))
            .range([height - margin.bottom, margin.top])
        
        const marks = data.map(d => {
            return ({
                x: xScale(xValue(d)),
                y: yScale(yValue(d))
            })
        })
        
        //Add series
        selection
            .selectAll('#series-0')
            .data([null])
            .join('path')
            .attr('id', 'series-0')
            .datum(marks)
            .transition()
            .attr('d', line()
                .x(d => d.x)
                .y(d => d.y)
            )
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
        
        //Add X axis
        selection
            .selectAll('#x-axis')
            .data([null])
            .join('g')
            .attr('id', 'x-axis')
            .call(axisBottom(xScale).tickSize(-height))
            .attr('transform', `translate(0, ${height - margin.bottom})`)

        //Add Y axis
        selection
            .selectAll('#y-axis')
            .data([null])
            .join('g')
            .transition()
            .attr('id', 'y-axis')
            .call(axisLeft(yScale).tickSize(-width))
            .attr('transform', `translate(${margin.left}, 0)`)
        
        //Delete domain lines from X and Y
        selection.selectAll('.domain')
            .attr('stroke-width', 0)
        
        //Create a "dotted" grid
        selection
            .selectAll('.tick line')
            .attr('stroke-dasharray', '5,5')
            .attr('opacity', .08)
    }

    main.width = value => {
        width = value
        return main
    }

    main.height = value => {
        height = value
        return main
    }

    main.margin = value => {
        margin = value
        return main
    }

    main.data = value => {
        data = value
        return main
    }

    main.xValue = value => {
        xValue = value
        return main
    }

    main.yValue = value => {
        yValue = value
        return main
    }

    return main
}

export default TimeLinePlot
