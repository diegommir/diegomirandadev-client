import { Link } from 'react-router-dom'
import '../css/SideBar.css'
import profileImg from '../images/profile.jpeg'

export default function SideBar() {
    return (
        <div id="sidebar" className="d-flex flex-column text-light">
            <a href="/"><img id="profile-img" src={profileImg} alt="Profile"></img></a>

            <h3>Diego Miranda</h3>
            <p className="sidebar-item">
                Data Analyst
            </p>

            <div className="sidebar-item">
                <i className="bi bi-person-square"></i>
                &nbsp;<a href="/">Resume</a>
            </div>
            <div className="sidebar-item">
                <i className="bi bi-envelope"></i>
                &nbsp;<a href="mailto:diegommir@gmail.com">diegommir@gmail.com</a>
            </div>
            <div className="sidebar-item">
                <i className="bi bi-phone"></i>
                &nbsp;<a href="phoneto:+61 402 842 392">+61 402 842 392</a>
            </div>
            <div className="sidebar-item">
                <i className="bi bi-linkedin"></i>
                &nbsp;<a href="https://www.linkedin.com/in/diegommir/" target="linkedin">linkedin.com/in/diegommir</a>
            </div>
            <div className="sidebar-item">
                <i className="bi bi-github"></i>
                &nbsp;<a href="https://github.com/diegommir/" target="github">github.com/diegommir</a>
            </div>
            <br />

            <h3>Portifolio</h3>
            {/* 
            <div className="sidebar-item">
                <i className="bi bi-file-bar-graph"></i>
                &nbsp;<Link to="/visualization/dashboard">Data Visualization - Real-time Dashboard Example</Link>
            </div>
            */}
            <div className="sidebar-item">
                <i className="bi bi-file-bar-graph"></i>
                &nbsp;<Link to="/jupyter/bellabeat-case-study">Bellabeat Case Study</Link>
            </div>
            <div className="sidebar-item">
                <i className="bi bi-file-bar-graph"></i>
                &nbsp;<Link to="/visualization/dashboard-excel">Responsive Dashboard with Excel</Link>
            </div>
            <div className="sidebar-item">
                <i className="bi bi-file-bar-graph"></i>
                &nbsp;<Link to="/jupyter/titanic">Titanic Competition</Link>
            </div>
            <div className="sidebar-item">
                <i className="bi bi-file-bar-graph"></i>
                &nbsp;<Link to="/visualization/covid">D3.js Example - Deaths by COVID</Link>
            </div>
            <br />
        </div>
    )
}
