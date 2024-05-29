import {useNavigate} from "react-router-dom";
import './Header.css'
import React from "react";

export default function Header({page, setPage}: {
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>
}) {
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
            <button onClick={() => {
                setPage(page + 1)
            }}>next
            </button>
        </nav>
    )
}