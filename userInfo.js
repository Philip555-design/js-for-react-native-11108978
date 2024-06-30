// userInfo.js

function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => {
        return {
            originalName: name,
            modifiedName: modifiedNames[index],
            id: index + 1 // Auto-incremented ID starting from 1
        };
    });
}

// Example usage:
// const names = ["Alice", "Bob", "Charlie"];
// const modifiedNames = ["ALICE", "bob", "CHARLIE"];
// console.log(createUserProfiles(names, modifiedNames)); 
// [
//     { originalName: "Alice", modifiedName: "ALICE", id: 1 },
//     { originalName: "Bob", modifiedName: "bob", id: 2 },
//     { originalName: "Charlie", modifiedName: "CHARLIE", id: 3 }
// ]

module.exports = { createUserProfiles };
