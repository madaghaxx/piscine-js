let reverse = (slice) => {
    let res = ""
    let ress = []
    for (let i = slice.length - 1; i >= 0; i--) {
        typeof slice === "string" ? res += slice[i] : ress.push(slice[i])

    }
    let ros = ""
    typeof slice === "string" ? ros = res : ros = ress
    return ros
}