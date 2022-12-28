import logo from "./logo.svg";
import "./App.css";
import ToDoList from "./components/ToDoList";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      {/* <ToDoList />*/}
      <div className="content-left">
        <div>
          <img
            src={logo}
            className="App-logo"
            width="50px"
            height="50px"
            alt="logo"
          />
        </div>
        <div>
          <ToDoList />
        </div>
      </div>
      <div className="content-right">
        <div>
          <img
            src={logo}
            className="App-logo"
            width="50px"
            height="50px"
            alt="logo"
          />
        </div>
        <form className="form">
          <div className="form-input">
            <label>Tên tài khoản</label>
            <input
              type="text"
              placeholder="Email hoặc số điện thoại"
            />
          </div>
          <div className="form-input">
            <label>Mật khẩu</label>
            <input
              type="text"
              placeholder="Mật khẩu"
            />
          </div>
          <button type="submit">Đăng nhập</button>
          <a href="" className="forgot" >Quên mật khẩu?</a>
        </form>
      </div>
    </div>
  );
}

export default App;
