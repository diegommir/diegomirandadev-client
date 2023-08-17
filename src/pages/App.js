import { HashRouter as Router, Routes, Route} from 'react-router-dom'

import SideBar from '../components/SideBar'
import Profile from './Profile'
import Jupyter from './Jupyter'
import NotFound from './NotFound'
import Covid from './visualization/Covid'
import DashboardExcel from './visualization/DashboardExcel'
import GoogleFiber from './visualization/GoogleFiber'

function App() {
    return (
        <Router>
            <main>
                <SideBar />

                <Routes>
                    <Route path='/' element={<Profile />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/jupyter/:notebook_name' element={<Jupyter />} />
                    <Route path='/portifolio/google-fiber-case-study' element={<GoogleFiber />} />
                    <Route path='/portifolio/dashboard-excel' element={<DashboardExcel />} />
                    <Route path='/portifolio/covid' element={<Covid />} />
                    <Route path='*' element={<NotFound />}/>
                </Routes>
            </main>
        </Router>
    )
}

export default App
