import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import { useCoffee } from "../../contexts/CoffeeContext";
import CoffeeDetail from "../CoffeeDetail/CoffeeDetail";

const CoffeeList = () => {
    const {coffees, getAllCoffees} = useCoffee();
    const {category} = useParams()

    useEffect(() => {
        getAllCoffees(category)
    }, [category])

    return (
        
        <Container>
            {!coffees.length > 0 ? <p>Kahve yok</p> : <></>}
            {coffees?.map(coffee => <CoffeeDetail key={`@coffeelist-${coffee.id}`} coffee={coffee}></CoffeeDetail>)}
        </Container>
    )
};

export default CoffeeList;
