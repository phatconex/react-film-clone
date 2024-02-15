import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DetailMovie from "./component/DetailMovie/DetailMovie";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import ListMovie from "./component/ListMovie/ListMovie";
import SearchMovie from "./component/ListMovie/SearchMovie";
function App() {
    return (
        <>
            <Header></Header>

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/list-movie" element={<ListMovie />}></Route>
                <Route path="/search/:slug" element={<SearchMovie />}></Route>
                <Route path="/detail-movie/:slug" element={<DetailMovie />}></Route>
            </Routes>

            <Footer></Footer>
        </>
    );
}

export default App;
