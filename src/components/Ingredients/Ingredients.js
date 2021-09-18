import {} from "./Ingredients.scss"

const Ingredients = ({ ingredients, className }) => {
    return (
        <div className="coffee-detail-ingredients">
            {ingredients ? <>Ingredients: {ingredients.join(", ")}</> : ""}
        </div>
    )
};

export default Ingredients;
