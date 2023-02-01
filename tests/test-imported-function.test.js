const{ sum, deleteUserById, findById } = require("../utils/helper")

describe("Testing imported functions", () => {
    
    test("Sum function should add 2 number", () => {
        expect(sum(5, 3)).toBe(8)
    })

    test("Delete  by id function should delete a user by their id", () => {
        let users = [
            {
                user: "Clem",
                age: 12, 
                id: 1
            },
            {
                user: "Justin",
                age: 15,
                id: 2
            },
            {
                user: "Sarah",
                age: 84,
                id: 3
            },
        ]

        expect(deleteUserById(users, 3)).toEqual([
            {
                user: "Clem",
                age: 12, 
                id: 1
            },
            {
                user: "Justin",
                age: 15,
                id: 2
            },
        ])

    })

// done by Test Driven Development (TDD) 
    test("Finds a user by ID from a list of users", () => {
        let users = [
            {
                user: "Clem",
                age: 12, 
                id: 1
            },
            {
                user: "Justin",
                age: 15,
                id: 2
            },
            {
                user: "Sarah",
                age: 84,
                id: 3
            },
        ]

        expect(findById(users, 2)).toEqual(
            {
                user: "Justin",
                age: 15,
                id: 2
            }
        )

        expect(findById(users, 10)).toBeUndefined()
    })
})