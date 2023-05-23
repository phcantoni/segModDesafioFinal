import { categories, categoriesTwo } from "./Tmdb";
import Row from "./Row";
import Row2 from "./RowTwo";
import Navbar from "./Navbar";


function Lists() {

  return (
    <div>
        <Navbar />
        {categories.map((category) => {
            return (
                <Row key={category.name} title={category.title} path={category.path} />
            );
        })}
        {categoriesTwo.map((categoryTwo) => {
            return (
                <Row2 key={categoryTwo.name} title={categoryTwo.title} path={categoryTwo.path} />
            );
        })}
    </div>
  )
}

export default Lists