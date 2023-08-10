import { HashRouter as Router, Routes, Route} from 'react-router-dom'

import SideBar from '../components/SideBar'
import Profile from './Profile'
import Jupyter from './Jupyter'
import NotFound from './NotFound'
import Covid from './visualization/Covid'
import DashboardExcel from './visualization/DashboardExcel'

function App() {
    return (
        <Router>
            <main>
                <SideBar />

                <Routes>
                    <Route path='/' element={<Profile />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/jupyter/:competition' element={<Jupyter />} />
                    <Route path='/visualization/covid' element={<Covid />} />
                    <Route path='/visualization/dashboard-excel' element={<DashboardExcel />} />
                    <Route path='*' element={<NotFound />}/>
                </Routes>
            </main>
        </Router>
    )
}

export default App
