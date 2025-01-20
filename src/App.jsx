// import { useAuth } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes/index";
// import Loading from "./components/Common/Loading";

const App = () => {
  // const { loading } = useAuth();

  // if (loading) {
  //   return <Loading message="Authenticating..." />;
  // }

  return (
    <>
      <ToastContainer />
      <AppRoutes />
    </>
  );
};

export default App;
