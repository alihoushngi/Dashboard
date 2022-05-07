import Template from "./components/layouts/Template";
import UserContextProvider from "./context/UserContextProvider";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <UserContextProvider>
      <Template>
        <AppRoutes />
      </Template>
    </UserContextProvider>
  );
}

export default App;
