const searchActive = (direction: string, activeClass: string): string => {
    if (activeClass === "" && direction === "All") {
        return "All"
    } else if (activeClass === direction) {
        return activeClass
    }
}

export default searchActive;