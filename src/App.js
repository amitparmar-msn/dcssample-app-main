import Header from "./components/UI/Header/Header";
import { BrowserRouter } from "react-router-dom";
import PageRouter from "./components/router/router";

function App() {
    return (
        <>
            <Header />
            <BrowserRouter>
                <PageRouter />
            </BrowserRouter>
        </>
    );
}

export default App;
