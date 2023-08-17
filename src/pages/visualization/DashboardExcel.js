import dashboardImage from '../../images/Sales 5kk Analysis.png'

const DashboardExcel = () => {
    return (
        <div id="content">
            <h1>Responsive Sales Dashboard</h1>
            <h2>Responsive Sales Dashboard With Microsoft Excel</h2>
            <p>
                This is a screenshot of a dynamic dashboard built entirely in Microsoft Excel. 
                The data source is a mock of a sales dataset, has 5 million observations, 
                14 variables and can be found <a href="https://www.kaggle.com/datasets/weitat/sample-sales" target='5kk-sales'>here</a>. 
                The Excel file can be found <a href="https://docs.google.com/spreadsheets/d/1WBiTgRfmKiaqlaUVWLRm7oO61L9zVL1X/edit?usp=sharing&ouid=105322382759105872800&rtpof=true&sd=true" target='excel-5kk-sales'>here</a>.
                Be aware that to properly see the Excel Dashboard file, the one should download it locally and open it with a Microsoft Office 2019 or later version.
            </p>
            <p>
                Was analysed the last 5 years of sales, which includes the incomplete year of 2024. 
                The dataset presents a clear seasonal pattern, with a slightly lower profit and revenue on the first two quarters and higher on the 3rd and 4th quarters. 
                The forecast for the rest of 2024 and for 2025 still consistent, with a slightly growing trend.
            </p>
            <p>
                Sub-Saharan Africa and Europe are the most important regions for the company. 
                They alone represented 51.90% from the total profit and 51.91% from the total revenue in 2023. 
                This pattern still observed during the year of 2024.
            </p>
            <p>
                Although Household is the main source of revenue for the company, it is not the most profitable item. 
                With 20.96% of the revenue in 2023, Household was responsible for 17.61% of the profit, which put it 2nd on the profit list. 
                Cosmetics on the other hand was responsible for 18.43% of the profit on the same period, but only 13.68% of the revenue. 
                Office Supplies comes 3rd on the list with 13.40% of the profit. Together this three represents almost 50% of the company's profits.
            </p>

            <img src={dashboardImage} alt='Dashboard Excel'></img>
        </div>
    )
}

export default DashboardExcel