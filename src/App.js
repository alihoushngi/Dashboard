import Template from "./components/layouts/Template";
import NewsContextProvider from "./context/NewsContextProvider";
import UserContextProvider from "./context/UserContextProvider";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <UserContextProvider>
      <NewsContextProvider>
        <Template>
          <AppRoutes />
        </Template>
      </NewsContextProvider>
    </UserContextProvider>
  );
}

export default App;
