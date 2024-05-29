import {useNavigate} from "react-router-dom";
import './Header.css'

export default function Header () {
    const navigate = useNavigate()
    return (
        <nav>
            <h1>Rick & Morty</h1>
            <button onClick={() => {
                navigate("/")
            }}>Home
            </button>
            <button onClick={() => {
                navigate("/characters")
            }}>Characters
            </button>
        </nav>
    )
}