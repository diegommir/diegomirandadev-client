import '../css/SideBar.css'
import profileImg from '../images/profile.jpeg'

export default function SideBar() {
    return (
        <div id="sidebar" className="d-flex flex-column text-light">
            <a href="/"><img id="profile-img" src={profileImg} alt="Profile"></img></a>

            <h3>Contact</h3>
            <div className="sidebar-item">
                <i className="bi bi-envelope"></i>
                &nbsp;<a href="mailto:diegommir@gmail.com">diegommir@gmail.com</a>
            </div>
            <div className="sidebar-item">
                <i className="bi bi-phone"></i>
                &nbsp;<a href="phoneto:+55 62 98474-9074">+55 62 98474-9074</a>
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

            <h3>Projects Portifolio</h3>
            <div className="sidebar-item">
                <i className="bi bi-file-bar-graph"></i>
                &nbsp;<a href="/kaggle/spaceship_titanic">Kaggle - Spaceship Titanic Competition</a>
            </div>
            <div className="sidebar-item">
                <i className="bi bi-file-bar-graph"></i>
                &nbsp;<a href="/kaggle/titanic">Kaggle - Titanic Competition</a>
            </div>
            <br />
        </div>
    )
}