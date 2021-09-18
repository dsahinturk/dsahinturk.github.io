import coffees from "../@db/coffee.json"

const CoffeeService = {

    getCoffees () {
        return new Promise((resolve, reject) => {
            return resolve(coffees)
        })
    }
}

export default CoffeeService