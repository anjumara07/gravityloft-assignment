import {Routes , Route} from 'react-router-dom';
import {Navbar} from '../Navbar/Navbar';
import {HomePage} from '../Home/Homepage';
import {Footer} from '../Footer/Footer'

export const AllRoutes = () =>{
    return (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage/>} />
          </Routes>
          <Footer />
        </>
    )
}