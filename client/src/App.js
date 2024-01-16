import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import ForgotPasssword from "./pages/Auth/ForgotPassword";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateCars from "./pages/Admin/CreateCars";
import Users from "./pages/Admin/Users";
import Booking from "./pages/user/Booking";
import Profile from "./pages/user/Profile";
import Cars from "./pages/Admin/Cars";
import UpdateCar from "./pages/Admin/UpdateCar";
import Search from "./pages/Search";
import CarDetails from "./pages/CarDetails";
import Categories from "./pages/Categories";
import CategoryCar from "./pages/CategoryCar";
import CartPage from "./pages/CartPage";
import AdminOrders from "./pages/Admin/AdminOrders";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/car/:slug" element={<CarDetails />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/category/:slug" element={<CategoryCar />} />

      <Route path="/search" element={<Search />} />
      <Route path="/dashboard" element={<PrivateRoute />}>
        <Route path="user" element={<Dashboard />} />
        <Route path="user/booking" element={<Booking />} />
        <Route path="user/profile" element={<Profile />} />
      </Route>
      <Route path="/dashboard" element={<AdminRoute />}>
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="admin/create-category" element={<CreateCategory />} />
        <Route path="admin/create-cars" element={<CreateCars />} />
        <Route path="admin/cars/:slug" element={<UpdateCar />} />
        <Route path="admin/cars" element={<Cars />} />
        <Route path="admin/users" element={<Users />} />
        <Route path="admin/orders" element={<AdminOrders />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPasssword />} />

      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="*" element={<Pagenotfound />} />
    </Routes>
  );
}

export default App;
