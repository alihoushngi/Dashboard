import { ToastContainer } from "react-toastify";
import Template from "./components/layouts/Template";
import NewsContextProvider from "./context/NewsContextProvider";
import UserContextProvider from "./context/UserContextProvider";
import AppRoutes from "./routes/AppRoutes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <UserContextProvider>
      <NewsContextProvider>
        <Template>
          <ToastContainer />
          <AppRoutes />
        </Template>
      </NewsContextProvider>
    </UserContextProvider>
  );
}

export default App;
