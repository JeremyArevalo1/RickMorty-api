import { useEffect, useState } from "react"
import { reqCharacter } from "../service/characters"

export const useCharacters = (searchRickmorty, page, species) => {
    const [characters, setCharacters] = useState([])
    const [pag, setPag] = useState(1)

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const data = await reqCharacter(page, searchRickmorty, species)
                setCharacters(data.results || [])
                setPag(data.info.pages)
            } catch (error) {
                console.error("Error fetching characters:", error)
                setCharacters([])
                setPag(1)
            }
        }

        fetchCharacters()
    }, [searchRickmorty, page, species])

    return { characters, pag }
}