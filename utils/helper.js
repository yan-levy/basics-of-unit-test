exports.sum = (a, b) => {
    return a + b 
}

exports.deleteUserById = (array, id) => {
    return array.filter(user => user.id !== id)
}

exports.findById = (array = [], id = "") => {
    return array.find(x => x.id === id)
}