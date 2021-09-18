import CoffeeContext from "../../contexts/CoffeeContext";




const ContextWrapper = ({children}) => {
    return (
        <CoffeeContext>{children}</CoffeeContext>
    )
};

export default ContextWrapper;

