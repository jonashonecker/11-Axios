import './App.css'
import {Route, Routes} from "react-router-dom";
import CharacterSearch from "./components/CharacterSearch.tsx";
import Header from "./components/Header.tsx";
import CharacterDetail from "./components/CharacterDetail.tsx";

export default function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<p>Hello Visitor!</p>}/>
                <Route path="/characters" element={<CharacterSearch/>}/>
                <Route path="/characters/:id" element={<CharacterDetail/>}/>
            </Routes>
        </>
    )
}
