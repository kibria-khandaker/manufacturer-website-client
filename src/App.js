import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Blogs from './components/Blogs/Blogs';
import Login from './components/Common/AuthAdmin/Login';
import SignUp from './components/Common/AuthAdmin/SignUp';
import Footer from './components/Common/Footer/Footer';
import Header from './components/Common/Header/Header';
import Home from './components/Home/Home';
import RequireAuth from './components/Common/AuthAdmin/RequireAuth';
import RequireAdmin from './components/Common/AuthAdmin/RequireAdmin';
import Dashboard from './components/Dashboard/Dashboard';
import AddAdmin from './components/Dashboard/AddAdmin';
import AddProduct from './components/Dashboard/AddProduct';

function App() {
  return (
    <div>
      <Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/blogs" element={<Blogs />} /> */}

          <Route path="/blogs" element={
            <RequireAuth>
              <Blogs />
            </RequireAuth>
          } />

          
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="add-admin" element={<AddAdmin />} />
            <Route path="add-product" element={<AddProduct />} />
          </Route>



        </Routes>
        <Footer></Footer>
      </Header>
    </div>
  );
}

export default App;
