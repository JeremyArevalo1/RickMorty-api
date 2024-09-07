import { useState } from "react"
import { Pagination } from "@mui/material"
import { useCharacters } from "../hooks/useCharacters"
import { CharactersRickmorty } from "./CharactersRickmorty"
import { BuscarRickmorty } from "./BuscarPersonaje"

export const RickmortyApp = ({ selectedSpecies }) => {
    const [page, setPage] = useState(1);
    const [searchRickmorty, setSearchRickMorty] = useState('')
    const { characters, pag } = useCharacters(searchRickmorty, page, selectedSpecies)

    const handlePageChange = (event, value) => {
        setPage(value)
    }

    const handleSearch = (term) => {
        setSearchRickMorty(term)
        setPage(1)
    }

    return (
        <>
            <BuscarRickmorty handleRickmorty={handleSearch} />
            <CharactersRickmorty characters={characters} />
            <Pagination 
                className="d-flex justify-content-center mt-4"
                count={pag}
                page={page}
                onChange={handlePageChange}
            />
        </>
    )
}
