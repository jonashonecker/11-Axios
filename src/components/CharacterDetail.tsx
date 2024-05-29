import {useParams} from "react-router-dom";
import {Character} from "../types/RickAndMortyCharacter.ts";

export default function CharacterDetail({characters}:{characters: Character[]}) {
    const {id} = useParams()
    const character = characters.find((char) => char.id === Number(id))

    if(character === undefined) {
        return (
            <p>Sorry, the character does not exist...</p>
        )
    }

    return (
        <div>
            <h2>{character.name}</h2>
            <p>{character.location.name}</p>
            <img src={character.image}/>
        </div>
    )
}