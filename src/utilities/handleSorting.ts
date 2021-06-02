export const handleNameSorting = (data: string) => {
    const peopleListName = data.split("\n", 11)
    const sortResult = handleSortName(peopleListName)
    return sortResult
}

export const handleSortName = (arr: string[]):string[] => {
    const sortArray = [...arr]
    sortArray.sort(compare)
    return sortArray
}

const compare = (a: string, b: string): number => {
    const lastNameOfA = a.split(" ").slice(-1)[0];
    const lastNameOfB = b.split(" ").slice(-1)[0];
    if (lastNameOfA > lastNameOfB) return 1
    if (lastNameOfA < lastNameOfB) return -1
    return 0
}
