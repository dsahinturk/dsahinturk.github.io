import CoffeeService from "../services/CoffeeService";
import { createContext, useContext, useState } from "react"


const coffeeContext = createContext({})

const CoffeeContext = ({children}) => {
    const [coffees, setCoffees] = useState([]);
    const [categories, setCategories] = useState([]);

    const getAllCoffees = (category) => {
        CoffeeService.getCoffees().then(response => {
            getUniqueCategories(response)
            setCoffees(category ? response.filter(coffee => coffee.category === category) : response)
        })
    }

    const getUniqueCategories = (coffeeList) => {
        const uniques = [];
        coffeeList.forEach(coffee => {
            if (uniques.indexOf(coffee.category) < 0) {
                uniques.push(coffee.category)
            }
        })
        setCategories(uniques)
    }

    const filterCoffees = (searchString) => {
        const filteredCoffees = coffees.filter(coffee => textfilterFunction(searchString, coffee))
        console.log(filteredCoffees)
        setCoffees(filteredCoffees)
    }

    const textfilterFunction = (searchString, coffee) => {
        return (
            coffee.title.includes(searchString) ||
            coffee.title.toLowerCase().includes(searchString) ||
            coffee.title.toUpperCase().includes(searchString) ||
            coffee.description.includes(searchString) ||
            coffee.description.toLowerCase().includes(searchString) ||
            coffee.description.toUpperCase().includes(searchString) ||
            coffee.ingredients.includes(searchString)
        )
    }

    return (
        <coffeeContext.Provider value={{
            coffees,
            filterCoffees,
            getAllCoffees,
            categories
        }}>
            {children}
        </coffeeContext.Provider>
    )
}

export const useCoffee = () => {
    return useContext(coffeeContext)
}

coffeeContext.displayName = "CoffeeContext";

export default CoffeeContext