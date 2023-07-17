import { Link } from 'react-router-dom'
import '../css/SideBar.css'
import profileImg from '../images/profile.jpeg'

export default function SideBar() {
    return (
        <div id="sidebar" className="d-flex flex-column text-light">
            <a href="/"><img id="profile-img" src={profileImg} alt="Profile"></img></a>
            <div className="sidebar-item">
                <i className="bi bi-person-square"></i>
                &nbsp;<a href="/">Profile</a>
            </div>
            <br />

            <h3>Contact</h3>
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
            <div className="sidebar-item">
                <i className="bi bi-file-bar-graph"></i>
                &nbsp;<Link to="/visualization/covid">Data Visualization - COVID Evolution</Link>
            </div>
            <div className="sidebar-item">
                <i className="bi bi-file-bar-graph"></i>
                &nbsp;<Link to="/kaggle/titanic">Kaggle - Titanic Competition</Link>
            </div>
            <br />
        </div>
    )
}
