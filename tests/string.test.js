const { describe } = require("node:test");
const { hasUncaughtExceptionCaptureCallback } = require("process");

describe("String Operation", () => {
    
    test("There should be no I in team", () => {
        let string = 'teami'

        expect(string).not.toMatch(/I/)
    })
    test("There is 'stop' in Christopher", () => {
        let string = 'Christopher'

        expect(string).toMatch(/stop/)
        // expect(string).not.toMatch(/stop/)
    }) 

    const shoppingList = ["Milk", "Trash bags", "Paper towels", "IPhones",]

    test("The Shopping list doesn't have PS4", () => {
        expect(shoppingList).not.toContain('PS4')
        expect(shoppingList).toContain('Milk')
    }) 
})

// testing primitive and reference type equality
describe("Testing reference equality", () => {
    const user = {
        name: "Clement",
        // age: 45
    }
    user['age'] = 45

    test("Should return a user object with age as a 45", () => {
        expect(user).toEqual({
            name: "Clement",
            age: 45
        })
    })

    test("Should return a user with a name and age key", () => {
        expect(user).toEqual(
            expect.objectContaining({
                name: expect.any(String),
                age: expect.any(Number)
            })
        )
    })

    // testing array equality
    test("Array equality", () => {

        const users = [
            "Clement",
            "Sarah",
            "July"
        ]

        users.push("Jacob")

        expect(users).toEqual(["Clement", "Sarah", "July", "Jacob"]) 
        expect(users).toEqual(expect.arrayContaining([expect.any(String)]))

        const userObjectInArray = [
            {
                user: "Clement",
                age: 12
            },
            {
                user: "Sarah",
                age: 14
            },
            {
                user: "July",
                age: 25
            },
        ]

        userObjectInArray.push({
            user: "Phil",
            age: 57
        })

        expect(userObjectInArray).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    user: expect.any(String),
                    age: expect.any(Number)
                })
            ])
        )
    })
})