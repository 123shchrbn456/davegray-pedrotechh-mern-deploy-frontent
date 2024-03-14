import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
            </Routes>
        </Router>
    );
};

export default App;
