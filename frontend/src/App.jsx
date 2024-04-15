// React stuff
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Styles
import "./styles/main.css";
import "./styles/colors.css";
import "./styles/utilities.css";

// Redux
import { Provider } from "react-redux";
import { store } from "./core/Redux/store";

// taostify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Layouts
import Auth from "./pages/Auth";
import Home from "./pages/Home";

// components
import Login from "./pages/Auth/components/Login";
import Signup from "./pages/Auth/components/Signup";
import Board from "./pages/Home/Board";
import MyBoards from "./pages/Home/MyBoards";

const App = () => {
  return (
    
    <Provider store={store}>
      <BrowserRouter>
      <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      <Routes>
        <Route path="/" element={<Auth/>}>
          <Route index element={<Login/>}/>
          <Route path="signup" element={<Signup/>}/>
        </Route>

        <Route path="/home" element={<Home/>}>
          <Route index element={<MyBoards/>}/>
          <Route path="board/:id" element={<Board/>}/>
        </Route>

      </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
