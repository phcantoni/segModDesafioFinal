import { categories, categoriesTwo } from "./Tmdb";
import Row from "./Row";
import Row2 from "./RowTwo";
// import Carousel from "react-elastic-carousel";


function Lists() {

  return (
    <div>
        {/* <Carousel> */}
            {categories.map((category) => {
                return (
                    <Row key={category.name} title={category.title} path={category.path} />
                );
            })}
        {/* </Carousel> */}
        {categoriesTwo.map((categoryTwo) => {
            return (
                <Row2 key={categoryTwo.name} title={categoryTwo.title} path={categoryTwo.path} />
            );
        })}
    </div>
  )
}

export default Lists