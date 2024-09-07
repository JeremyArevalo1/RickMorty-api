export const reqCharacter = async (page, searchRickmorty, species = "") => {
    const baseUrl = `https://rickandmortyapi.com/api/character?page=${page}&name=${searchRickmorty}`
    const url = species ? `${baseUrl}&species=${species}` : baseUrl

    const response = await fetch(url)
    if (!response.ok) {
        throw new Error("Error fetching data")
    }
    const data = await response.json()
    return data
};