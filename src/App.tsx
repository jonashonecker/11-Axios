import './App.css'
import {Route, Routes} from "react-router-dom";
import CharacterSearch from "./components/CharacterSearch.tsx";
import Header from "./components/Header.tsx";
import CharacterDetail from "./components/CharacterDetail.tsx";
import axios from "axios";
import {useEffect, useState} from "react";
import {Character} from "./types/RickAndMortyCharacter.ts";

export default function App() {

    const [characters, setCharacter] = useState<Character[]>([])
    const [page, setPage] = useState<number>(1)

    const getAllCharacters = (page: number) => {
        axios.get("https://rickandmortyapi.com/api/character?page=" + page)
            .then((response) => setCharacter(response.data.results))
    }

    useEffect(() => {getAllCharacters(page)}, [page])

    return (
        <>
            <Header page={page} setPage={setPage}/>
            <Routes>
                <Route path="/" element={<p>Hello Visitor!</p>}/>
                <Route path="/characters" element={<CharacterSearch characters={characters}/>}/>
                <Route path="/characters/:id" element={<CharacterDetail characters={characters}/>}/>
            </Routes>
        </>
    )
}
