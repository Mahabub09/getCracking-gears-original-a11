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

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/item/:itemId' element={<ItemInfo></ItemInfo>}></Route>
        <Route path='/items' element={<Items></Items>}></Route>
        <Route path='/myItems' element={<MyItems></MyItems>}></Route>
        <Route path='/adItems' element={<AddItems></AddItems>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/aboutMe' element={<AboutMe></AboutMe>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>

    </div>
  );
}

export default App;
