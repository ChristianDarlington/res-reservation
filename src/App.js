import {Routes, Route} from "react-router-dom"
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Pages/Home';
import BookaTable from './Pages/BookaTable';
import Confirmation from './Pages/Confirmation';
import ReservationView from './Pages/ReservationView';
import MenuPage from './Pages/MenuPage';
import Error from './Pages/Error';








function App() {
  return (
    <>
    
   <Routes>
   <Route path='/' element={<Login />}></Route>
   <Route path='/signup' element={<Signup />}></Route>
   <Route path='/home' element={<Home />}></Route>
   <Route path='/booking' element={<BookaTable />}></Route>
   <Route path='/confirmation' element={<Confirmation />}></Route>
   <Route path='/menu' element={<MenuPage />}></Route>
   <Route path='/reservation' element={<ReservationView />}></Route>
   <Route path="/*" element={<Error />}></Route>
   </Routes>
   </>
   
  );
}

export default App;
