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
    let seriesColumn //Defines the column that represents the different categories of series
    let categories

    const palette = ['#023e8a', '#caf0f8', '#caf0f8', '#caf0f8', '#caf0f8', '#caf0f8', '#caf0f8', '#caf0f8', '#caf0f8', '#caf0f8']

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

        //If series column is not set, then create only one category
        if (!seriesColumn)
            categories = ['unique']

        //Create a series for each category
        categories.forEach((category, i) => {
            let filteredData = data
            //If it has more than one category....
            if (seriesColumn)
                filteredData = filteredData.filter(d => d[seriesColumn] === category)

            const marks = filteredData.map(d => {
                return ({
                    x: xScale(xValue(d)),
                    y: yScale(yValue(d))
                })
            })
            
            //Add series
            selection
                .selectAll(`#series-${i}`)
                .data([null])
                .join('path')
                .attr('id', `series-${i}`)
                .datum(marks)
                .transition()
                .attr('d', line()
                    .x(d => d.x)
                    .y(d => d.y)
                )
                .attr("fill", "none")
                .attr("stroke", palette[i])
                .attr("stroke-width", 1.5)
        })

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

    main.seriesColumn = value => {
        seriesColumn = value

        //Get the unique categories from the data
        const cat = new Set()
        data.map(d => cat.add(d[seriesColumn]))

        categories = Array.from(cat)

        return main
    }

    return main
}

export default TimeLinePlot
