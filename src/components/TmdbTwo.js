const API_KEY = "5b481d7af8306d27b48eede041e4328c";
const BASE_URL = "https://api.themoviedb.org/3";

export const basicFetch = async (endpoint) => {
    const req = await fetch(`${BASE_URL}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: "news",
                title: "Últimos Lançamentos",
                path: await basicFetch(`/discover/tv?api_key=${API_KEY}&with_networks=213&language=pt-BR`)
                // O path ta com os filmes Originais da Netflix porque não achei a url de Últimos Lançamentos
            },
            {
                slug: "trending",
                title: "Em Alta",
                path: await basicFetch(`/trending/all/week?api_key=${API_KEY}&language=pt-BR`)
            },
        ];
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};
    
            if(movieId) {
                switch (type) {
                    case "movie":
                        
                        info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
    
                        break;
                    case "tv":
    
                        info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
    
                        break;                    
                    default:
    
                        info = null;
    
                        break;
                }
            }
    
        return info;
    }
}




