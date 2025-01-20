import { Routes, Route } from "react-router-dom";
// import ProtectedRoute from "./routes/ProtectedRoute";
// import { useAuth } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
// import Loading from "./components/Common/Loading";

const App = () => {
  // const { loading } = useAuth();

  // if (loading) {
  //   return <Loading message="Authenticating..." />;
  // }

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </>
  );
};

export default App;
