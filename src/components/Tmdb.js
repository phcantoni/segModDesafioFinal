const API_KEY = "5b481d7af8306d27b48eede041e4328c";
const BASE_URL = "https://api.themoviedb.org/3";


// Ultimos lançamentos
//Em alta


const categories = [
    {
        slug: "news",
        title: "Últimos Lançamentos",
        path: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=pt-BR`
        // O path ta com os filmes Originais da Netflix porque não achei a url de Últimos Lançamentos
    }    
]

const categoriesTwo = [
    {
        slug : "trending",
        title: "Em Alta",
        path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`
    }
]



        export const getMovies = async (path) => {
            try {
                let url = `${BASE_URL}${path}`;
                const response = await fetch(url);
                const json = await response.json();
                return json;
            } catch (error) {
                console.log("Error getMovies: ", error);           
            } 
        }
        


export {categories, categoriesTwo, API_KEY};
        