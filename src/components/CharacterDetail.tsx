import {useParams} from "react-router-dom";
import {characters} from "../Characters.ts";

export default function CharacterDetail() {
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