import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Blogs from './components/Blogs/Blogs';
import Login from './components/Common/AuthAdmin/Login';
import RequireAuth from './components/Common/AuthAdmin/RequireAuth';
import SignUp from './components/Common/AuthAdmin/SignUp';
import Footer from './components/Common/Footer/Footer';
import PrivacyPolicy from './components/Common/Footer/PrivacyPolicy';
import Header from './components/Common/Header/Header';
import ToolPurchase from './components/Common/Order/ToolPurchase';
import AddReview from './components/Dashboard/AddReview';
import Dashboard from './components/Dashboard/Dashboard';
import MyOrders from './components/Dashboard/MyOrders';
import MyProfile from './components/Dashboard/MyProfile';
import Home from './components/Home/Home';

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
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />



          {/* <Route path="/blogs" element={<Blogs />} /> */}

          <Route path="/blogs" element={
            <RequireAuth>
              <Blogs />
            </RequireAuth>
          } />

          <Route path="/purchase/:id" element={
            <RequireAuth>
              <ToolPurchase />
            </RequireAuth>
          } />

          {/* Dash board Route start */}
          <Route path='/dashboard' element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }>
            {/* <Route path="MyOrders" element={<MyOrders />} /> */}
            <Route index element={<MyOrders />} />
            <Route path="MyProfile" element={<MyProfile />} />
            <Route path="AddReview" element={<AddReview />} />
          </Route>
          {/* Dash board Route end */}

        </Routes>
        <Footer></Footer>
      </Header>
    </div>
  );
}

export default App;
