import {useState} from "react";
import CharacterGallery from "./CharacterGallery.tsx";
import {Character} from "../types/RickAndMortyCharacter.ts";

export default function CharacterSearch ({characters}:{characters: Character[]}) {
    const [searchText, setSearchText] = useState("");

    const filteredCharacters = characters
        .filter((character) => character.name.toLowerCase().includes(searchText.toLowerCase()));

    return (
        <>
            <input type="text" onChange={(e) => setSearchText(e.target.value)} placeholder="Search for a character"/>
            {
                filteredCharacters.length > 0
                    ? <CharacterGallery characters={filteredCharacters}/>
                    : <p>No characters found</p>
            }
        </>
    );
}