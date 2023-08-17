import { useState, useEffect } from "react"
import { select, csv, timeParse } from "d3"
import TimeLinePlot from "../../utils/plots/TimeLinePlot"
import csvFile from '../../data/covid.csv'

const Covid = () => {
    const [data, setData] = useState()
    const [countryCode, setCountryCode] = useState('AU')
    
    const width = 800
    const height = 300
    
    const margin = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 50
    }

    useEffect(() => {
        csv(csvFile, row => {
            //Parsing to datetime
            row.Date_reported = timeParse('%Y-%m-%d')(row.Date_reported)
            //Parsing to number
            row.New_cases = +row.New_cases
            row.New_deaths = +row.New_deaths
            return row
        }).then(data => {
            setData(data)
        })
    }, [])

    if (data) {
        const filteredData = data.filter(d => d['Country_code'] === countryCode)

        const plot = TimeLinePlot()
            .width(width)
            .height(height)
            .margin(margin)
            .data(filteredData)
            .xValue(d => d['Date_reported'])
            .yValue(d => d['New_deaths'])

            const svg = select('svg')
            svg.call(plot)
    }
    
    return (
        <div id="content">
            <h1>Deaths by Covid (Monthly)</h1>
            <h2>Dynamic Javascript Line Chart Example</h2>
            <p>
                This is a example of a transition animated chart, developed in Javascript using <a href="https://d3js.org/" target="d3">D3.js</a>. 
                The code reads the data directly from the CSV file, filters it and then plots the chart.
            </p>
            <p>
                The code for this page can be seen on its <a href="https://github.com/diegommir/diegomirandadev-client/blob/master/src/pages/visualization/Covid.js" target="github-covid">Github Repository.</a>
            </p>
            <div>
                <label className="form-label" htmlFor="selCountry">Country:&nbsp;</label>
                <select id="selCountry" className="form-control" onChange={(e) => setCountryCode(e.target.value)}>
                    <option value="AU">Australia</option>
                    <option value="BR">Brazil</option>
                    <option value="US">United States</option>
                </select>
            </div>
            <br />

            <svg width={width} height={height} />
            <br />
            <span>Source:&nbsp;</span><a href="https://covid19.who.int/data" target="source">World Health Organization [WHO]</a>
        </div>
    )
}

export default Covid
