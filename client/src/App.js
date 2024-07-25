import {Routes , Route, Navigate, BrowserRouter} from 'react-router-dom';
import './index.css'
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext.jsx';
import LoginSignup from './pages/LoginSignup.jsx';
import Admin from './pages/Admin.jsx';
import AddBook from './components/AddBook/AddBook.jsx';
import ListBooks from './components/ListBooks/ListBooks.jsx';
import UpdateBook from './components/UpdateBook/UpdateBook.jsx';





function App() {
 
  const {authUser} = useAuthContext();
  return (
    
    <div >
     <BrowserRouter>
      <Routes>
      <Route path='/' element={authUser ? <Admin/> : <Navigate to={"/loginSignup"}/>}/>
      <Route path='/loginSignup' element={authUser ? <Navigate to='/' /> : <LoginSignup/>}/>
        
        <Route path='/addbook' element={<AddBook/>} />
        <Route path='/listbooks' element={<ListBooks/>}/>
        <Route path='/updatebooks' element={<UpdateBook/>}/>
      
      </Routes>
      <Toaster/>
      </BrowserRouter>
    </div>
  );
}

export default App
