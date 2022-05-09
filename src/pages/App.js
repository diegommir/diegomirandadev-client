import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import SideBar from '../components/SideBar'
import Profile from './Profile'
import NotFound from './NotFound'

function App() {
    return (
        <Router>
            <main>
                <SideBar />

                <Routes>
                    <Route path='/' element={<Profile />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='*' element={<NotFound />}/>
                </Routes>
            </main>
        </Router>
    )
}

export default App
