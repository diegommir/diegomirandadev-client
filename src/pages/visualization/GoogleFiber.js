import Jupyter from "../Jupyter"

const GoogleFiber = () => {
    return (
        <div id="content">
            <h1>Google Fiber Case Study</h1>
            <p>
                This a dashboard built in the context of the fictional Google Fiber company as 
                a final project for the Business Intelligence Professional Certificate. The case 
                study background is as follows:
            </p>
            <p>
                "The team needs to understand how often customers phone again customer support after their first inquiry; this will help leaders understand whether the team is able to answer customer questions the first time. Further, leaders want to explore trends in repeat calls to identify why customers are having to call more than once, as well as how to improve the overall customer experience. Create a dashboard to reveal insights about repeat callers."
            </p>
            <p>
                In this scenario, the stakeholders asked for a dashboard that allow them to keep track of:
            </p>
            <ul>
                <li>
                    Understand how often customers are calling customer support after their first inquiry; 
                    this will help leaders understand how effectively the team is able to answer customer questions the first time.
                </li>
                <li>Provide insights into the types of customer issues that seem to generate more repeat calls.</li>
                <li>Explore repeat caller trends in the three different market cities.</li>
                <li>Design charts so that stakeholders can view trends by week, month, quarter, and year.</li>
            </ul>
            <p>
                Three datasets with anonymized data were made available to this project, each representing on city or market (as it is called on the datasets).
                The process of data transformation and data cleaning was done using Python and can be seen on the notebook below. After that, a new clean dataset
                was generated and used to create the Dashboard on Tableau. Unfortunately, the amount of data was very limited.
            </p>

            <Jupyter notebook_name="google-fiber-case-study-viz" />

            <Jupyter notebook_name="google-fiber-case-study" />
        </div>
    )
}

export default GoogleFiber
