import { useEffect, useState } from 'react'
import { select } from 'd3'
import TimeLinePlot from '../../utils/plots/TimeLinePlot'
import '../../css/visualization.css'

const Dashboard = () => {
    const [data, setData] = useState()
    const [selCountry, setSelCountry] = useState('Australia')
    const [selProduct, setSelProduct] = useState('')
    
    const width = 800
    const height = 300
    
    const margin = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 50
    }

    useEffect(() => {
        setData(getSalesData())
    }, [])

    if (data) {
        let filteredData = data
            .filter(d => d['country'] === selCountry)
        if (selProduct)
            filteredData = filteredData.filter(d => d['product_name'] === selProduct)
        
        filteredData.sort((a, b) => {
            if (a['date'] < b['date'])
                return -1
            else if (a['date'] > b['date'])
                return 1
            else
                return 0
        })

        const plot = TimeLinePlot()
            .width(width)
            .height(height)
            .margin(margin)
            .data(filteredData)
            .xValue(d => d['date'])
            .yValue(d => d['revenue'])
            .seriesColumn('product_name')

            const svg = select('#sales')
            svg.call(plot)
    }

    return (
        <div id="viz">
            <h2>Real-Time Dashboard Example</h2>
            <p>
                This is a work in progress....
            </p>
            <div>
                <label className="form-label" htmlFor="selCountry">Country:&nbsp;</label>
                <select id="selCountry" className="form-control" onChange={(e) => setSelCountry(e.target.value)}>
                    <option value="Australia">Australia</option>
                    <option value="Brazil">Brazil</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="USA">United States</option>
                </select>
            </div>
            <div>
                <label className="form-label" htmlFor="selCountry">Product:&nbsp;</label>
                <select id="selCountry" className="form-control" onChange={(e) => setSelProduct(e.target.value)}>
                    <option value="">All</option>
                    <option value="Bar Soap">Bar Soap</option>
                    <option value="Hair Conditioner">Hair Conditioner</option>
                    <option value="Shampoo">Shampoo</option>
                    <option value="Toothpaste">Toothpaste</option>
                </select>
            </div>
            <br />

            <svg id="sales" width={width} height={height} />
        </div>
    )
}

const getSalesData = () => {
    const sales = []
    const dateArray = getDaysArray('2023-06-01', '2023-06-30')
    const countries = ['Australia', 'USA', 'New Zealand', 'Brazil']
    const products = [
        ['Shampoo', 5], 
        ['Hair Conditioner', 7], 
        ['Toothpaste', 2.5], 
        ['Bar Soap', .8]
    ]

    for (const date of dateArray) {
        for (const country of countries) {
            for (const product of products) {
                sales.push(getEntry(date, country, product))
            }
        }
    }

    return sales
}

const getEntry = (date, country, product) => {
    const salesAmount = getRandomNumber(5000, 10000, true)
    const margin = getRandomNumber(0.02, 0.06)
    const revenue = salesAmount * product[1]
    const profit = revenue * margin

    const entry = []
    entry['date'] = date
    entry['country'] = country
    entry['product_name'] = product[0]
    entry['product_price'] = product[1]
    entry['sales_amount'] = salesAmount
    entry['revenue'] = revenue
    entry['profit'] = profit

    return entry
}

const getRandomNumber = (min, max, isInt = false) => {
    const val = Math.random() * (max - min) + min
    return isInt ? Math.floor(val) : val
}

const getDaysArray = function(start, end) {
    let arr = []
    for (let dt = new Date(start); dt <= new Date(end); dt.setDate(dt.getDate() + 1)) {
        arr.push(new Date(dt))
    }
    return arr
}

export default Dashboard
