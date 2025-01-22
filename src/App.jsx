// import { useAuth } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes/index";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
// import Loading from "./components/Common/Loading";

const App = () => {
  // const { loading } = useAuth();

  // if (loading) {
  //   return <Loading message="Authenticating..." />;
  // }

  return (
    <>
      <ToastContainer />
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
};

export default App;
