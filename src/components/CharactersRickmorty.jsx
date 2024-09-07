import React from "react"

export const CharactersRickmorty = ({characters}) => {

    return (
        <>
            <div className="d-flex flex-row row row-cols-5">
            {
                characters && 
                characters.map((char) => (
                    <div key={char.id}>
                        <li>{char.name}, {char.species}</li>
                        <img style={{ width: '14rem' }} src={`${char.image}`}/>
                    </div>

                ))
            }
            </div>
        </>
    )
}