import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes/index";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";

const App = () => {
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
