import '../css/SideBar.css'
import profileImg from '../images/profile.jpeg'

export default function SideBar() {
    return (
        <div id="sidebar" className="d-flex flex-column text-light">
            <a href="/"><img id="profile-img" src={profileImg} alt="Profile"></img></a>

            <h3>Contact</h3>
            <div class="sidebar-item">
                <i class="bi bi-envelope"></i>
                &nbsp;<a href="mailto:diegommir@gmail.com">diegommir@gmail.com</a>
            </div>
            <div class="sidebar-item">
                <i class="bi bi-phone"></i>
                &nbsp;<a href="phoneto:+55 62 98474-9074">+55 62 98474-9074</a>
            </div>
            <div class="sidebar-item">
                <i class="bi bi-linkedin"></i>
                &nbsp;<a href="https://www.linkedin.com/in/diegommir/" target="linkedin">linkedin.com/in/diegommir</a>
            </div>
            <div class="sidebar-item">
                <i class="bi bi-github"></i>
                &nbsp;<a href="https://github.com/diegommir/" target="github">github.com/diegommir</a>
            </div>
            <br />

            <h3>Projects</h3>
        </div>
    )
}