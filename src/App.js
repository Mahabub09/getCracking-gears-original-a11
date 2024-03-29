import { Route, Routes } from 'react-router-dom';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import ItemInfo from './Pages/ItemInfo/ItemInfo';
import Items from './Components/Items/Items';
import MyItems from './Pages/MyItems/MyItems';
import AddItems from './Pages/AddItems/AddItems';
import AboutMe from './Pages/AboutMe/AboutMe';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Blogs from './Pages/Blogs/Blogs';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import ManageItems from './Components/ManageItems/ManageItems';
import Footer from './Pages/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/item/:itemId' element={<RequireAuth><ItemInfo></ItemInfo></RequireAuth>}></Route>
        <Route path='/items' element={<RequireAuth><Items></Items></RequireAuth>}></Route>
        <Route path='/myItems' element={<RequireAuth><MyItems></MyItems></RequireAuth>}></Route>
        <Route path='/manageItems' element={<RequireAuth><ManageItems></ManageItems></RequireAuth>}></Route>
        <Route path='/addItems' element={<RequireAuth><AddItems></AddItems></RequireAuth>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/aboutMe' element={<AboutMe></AboutMe>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
