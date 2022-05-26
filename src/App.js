import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Login from './components/Common/AuthAdmin/Login';
import RequireAdmin from './components/Common/AuthAdmin/RequireAdmin';
import RequireAuth from './components/Common/AuthAdmin/RequireAuth';
import SignUp from './components/Common/AuthAdmin/SignUp';
import Footer from './components/Common/Footer/Footer';
import PrivacyPolicy from './components/Common/Footer/PrivacyPolicy';
import Header from './components/Common/Header/Header';
import ToolPurchase from './components/Common/Order/ToolPurchase';
import AddProduct from './components/Dashboard/AddProduct';
import AddReview from './components/Dashboard/AddReview';
import Dashboard from './components/Dashboard/Dashboard';
import ManageAllOrders from './components/Dashboard/ManageAllOrders';
import ManageProducts from './components/Dashboard/ManageProducts';
import MyOrders from './components/Dashboard/MyOrders';
import MyProfile from './components/Dashboard/MyProfile';
import MyProfilePortfolio from './components/Dashboard/MyProfilePortfolio';
import Payment from './components/Dashboard/Payment';
import Users from './components/Dashboard/Users';
import AllTools from './components/Home/AllTools';
import Home from './components/Home/Home';
import NotFound from './components/NotFound';
import Reviews from './components/Reviews';

function App() {
  return (
    <div>
      <Header>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/MyPortfolio" element={<MyProfilePortfolio />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/AllTools" element={<AllTools />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />


          <Route path="/purchase/:id" element={
            <RequireAuth>
              <ToolPurchase />
            </RequireAuth>
          } />


          {/* Dash board Route start */}
          <Route path='/dashboard' element={
            <RequireAuth>
              <Dashboard></Dashboard>
              </RequireAuth>}>
                <Route index element={<MyProfile />} />
                <Route path="UserOrder" element={<MyOrders />} />
                <Route path="AddReview" element={<AddReview />} />
                <Route path="Payment/:id" element={<Payment />} />

                <Route path="users" element={<RequireAdmin><Users /></RequireAdmin>} />
                <Route path="AddProduct" element={<RequireAdmin><AddProduct /></RequireAdmin>} />
                
                <Route path="ManageAllOrders" element={<RequireAdmin><ManageAllOrders /></RequireAdmin>} />
                <Route path="ManageProducts" element={<RequireAdmin><ManageProducts /></RequireAdmin>} />
          </Route>
          {/* Dash board Route end */}

          
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer></Footer>
      </Header>

    </div>
  );
}

export default App;
