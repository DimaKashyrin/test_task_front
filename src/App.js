import './App.css';
import UsersList from "./components/users-list/UsersList";
import UserForm from "./components/user-form/UserForm";

function App() {
  return (
    <div className="App">
      <UsersList/>
      <UserForm/>
    </div>
  );
}

export default App;
