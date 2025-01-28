import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes/index";

const App = () => {
  return (
    <>
      <ToastContainer />
      <AppRoutes />
    </>
  );
};

export default App;
