import { useState, useEffect } from "react"
import { select, csv, timeParse } from "d3"
import TimeLinePlot from "../../utils/plots/TimeLinePlot"
import csvFile from '../../data/covid.csv'
import '../../css/visualization.css'

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
            row.Date_reported = timeParse('%Y-%m-%d')(row.Date_reported)
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
        <div id="viz">
            <h2>Deaths by Covid (Monthly)</h2>
            <label>Country:&nbsp;</label>
            <select onChange={(e) => setCountryCode(e.target.value)}>
                <option value="AU">Australia</option>
                <option value="BR">Brazil</option>
                <option value="US">United States</option>
            </select>
            <br />

            <svg width={width} height={height} />
        </div>
    )
}

export default Covid
