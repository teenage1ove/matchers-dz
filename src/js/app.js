export default function sort(arr) {
    return arr.sort((a, b) => {
        return b.health - a.health
    })
}