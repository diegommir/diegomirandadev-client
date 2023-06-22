import '../css/Profile.css'

export default function Profile() {
    return (
        <div id="profile">
            <h1>Diego Miranda</h1>
            <hr />
            <h2>Software Engineer</h2>
            <h3>Personal Statement</h3>
            <p>
                I am a software engineer with more than 15 years of experience, who have been working in all 
                sorts of projects and teams, most of the time in software development and data analytics roles. 
                I am a fast learner and always eager to grow. I do have plenty experience with techs like Python, 
                JavaScript, Java, SQL, VBA/Excel and others.
            </p>
            <br />

            <h2>Work Experience</h2>
            <h3>System Analyst</h3>
            <h4>Estado de Goiás &mdash; Nov 2010 - Present</h4>
            <ul>
                <li>
                    Data processing and analysis to support revenue auditor's decisions on identifying possible frauds. 
                    Use of techs like Python, Power BI, MongoDB, PostgreSQL, MS Excel/VBA, MS Access, SAP BusinessObjects.
                </li>
                <li>
                    Lead engineer of the new Assets Control System. Tech stack NodeJS, React, JavaScript and PostgreSQL.
                </li>
                <li>
                    Lead engineer of a new Workflow System. Tech stack JavaScript, Java, Spring, JPA, Postgress and MySQL.
                </li>
                <li>
                    Team leader on the support and maintenance of legacy systems.
                </li>
            </ul>

            <h3>Senior Engineer</h3>
            <h4>Politec Global I.T. Services &mdash; Nov 2009 - Oct 2010</h4>
            <ul>
                <li>
                    Part of the software engineering team of the first project for our most important client: the 
                    Brazilian National Agency of Petroleum.
                </li>
                <li>
                    Full stack development of a distributed system: desktop part using JSE and MySQL; web part using 
                    JEE, JBoss, JSF, JPA and MySQL.
                </li>
            </ul>

            <h3>Software Architect</h3>
            <h4>Vivo Informatica &mdash; August 2007 - October 2009</h4>
            <ul>
                <li>
                    I was responsible for the software architecture of the new version of our Medical ERP software.
                </li>
                <li>
                    Designed and implemented a biometric fingerprint identification module for the system.
                </li>
                <li>
                    Led our engineering team on implementing and maintaining legacy system functionalities.
                </li>
                <li>
                    Full stack development using JEE, Jboss, JSF, JPA and Postgres.
                </li>
            </ul>
            <br />

            <h2>Education</h2>
            <h3>USP/Esalq &mdash; Escola Superior de Agricultura Luiz de Queiroz</h3>
            <h4>MBA Data Science and Analytics &mdash; Sep 2021 - Jul 2023</h4>
            <p>
                A professional Master's degree, with a major in Machine Learning. Conducted a project 
                to train a Convolutional Neural Network to identify and classify cancerous breast 
                lesions on mammographic images.
            </p>
            
            <br />
            <h3>Centro Educacional Alves Faria - ALFA</h3>
            <h4>Bachelor's degree in Computer Information Systems &mdash; 2003 - 2007</h4>
            <p>
                A Bachelor's degree, with a major in Information System Engineering. Conducted a project on a new 
                method to store and index fingerprint data for faster search and comparison.
            </p>

            <h2>Recent Side Projects</h2>
            <h3>Goianésia City COVID Pandemic Response</h3>
            <h4>MBA Data Science and Analytics &mdash; February 2021 - October 2021</h4>
            <p>
                In association with the "Central COVID" response team of the Goianésia Municipal Health Department, 
                we developed a system to collect, treat, store, process and monitor data from population related to 
                the COVID pandemic. They use this data to generate daily bulletins about number of infected, 
                cured and deceased. We used Power BI, Python, Excel/VBA and CSV files on this project.
            </p>
        </div>
    )
}