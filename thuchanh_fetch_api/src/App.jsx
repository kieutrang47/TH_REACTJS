import { UserProvider } from "./context/UserContext";
import UserList from "./components/UserList";

function App() {
  return (
    <UserProvider>
      <header className="header">
        <h1>
          <span className="header-logo">👤</span> Quản lý người dùng
        </h1>
      </header>
      <main>
        <div className="app-container">
          <h1 className="app-title">Danh sách người dùng</h1>
          <UserList />
        </div>
      </main>
      <footer className="footer">
        <p>© 2025 - Ứng dụng quản lý người dùng</p>
      </footer>
    </UserProvider>
  );
}

export default App;