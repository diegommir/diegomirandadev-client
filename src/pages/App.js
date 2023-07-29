import { HashRouter as Router, Routes, Route} from 'react-router-dom'

import SideBar from '../components/SideBar'
import Profile from './Profile'
import Kaggle from './Kaggle'
import NotFound from './NotFound'
import Covid from './visualization/Covid'
import Dashboard from './visualization/Dashboard'
import DashboardExcel from './visualization/DashboardExcel'

function App() {
    return (
        <Router>
            <main>
                <SideBar />

                <Routes>
                    <Route path='/' element={<Profile />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/kaggle/:competition' element={<Kaggle />} />
                    <Route path='/visualization/covid' element={<Covid />} />
                    <Route path='/visualization/dashboard' element={<Dashboard />} />
                    <Route path='/visualization/dashboard-excel' element={<DashboardExcel />} />
                    <Route path='*' element={<NotFound />}/>
                </Routes>
            </main>
        </Router>
    )
}

export default App
