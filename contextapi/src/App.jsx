
import './App.css';
import Login from "./components/login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider"; // ✅ ঠিক এইভাবে

function App() {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
