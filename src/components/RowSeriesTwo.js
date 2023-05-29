import styled from "styled-components";


const ConteinerRow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const MainDiv = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 160vh;
    
`

const CategTitle = styled.h2`
    display: flex;
    align-items: flex-end;
    width: 83vw;
    height: 10vh;
`

const DivCards = styled.div`
    
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 141vh;
    overflow: hidden;
    
        section {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 17vw;
            height: 70vh;
            padding-top: 1em;
        }

        img {
            max-width: 100%;
            width: 15vw;
            height: 50vh;
            margin-bottom: 0.7em;

            :hover {
                cursor: pointer;
                transform: scale(1.03);
                transition: 0.4s;
            }
        }

        h2 {
            width: 15vw;
            font-size: 12px;
            paddin-top: 1em;
        }
`

const DateFilm = styled.h3`
    width: 2.3em;
    font-size: 12px;
    font-weight: 100;
    white-space: nowrap;
    overflow: hidden;
`

const DivPages = styled.div`

        ul {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            width: 28vw;
        }

        li {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 3em;
            height: 3em;
            list-style: none;
            border-radius: 50%;
            border: white solid 1px;

            :last-of-type {
                width: 6vw;
                border-radius: 5px;
            }

            :nth-of-type(5) {
                display: flex;
                align-items: flex-end;
                width: 1.2em;
                height: 2px;
                border-radius: 0px;
                border: none;
            }

            :hover {
                cursor: pointer;
                background-color: rgba(211, 211, 211, 0.3);
                transition: 0.3s;
            }

    }
`


const baseUrlImage = "https://image.tmdb.org/t/p/original/";

function RowTwo({title, path}) {

    const [itemsPerpage, setItemsPerpage] = useState(10);
    const [currentPage, setCurrentPage] = useState(0);

    const pages = Math.ceil(path.results.length / itemsPerpage);
    const startIndex = currentPage * itemsPerpage;
    const endIndex = startIndex + itemsPerpage;
    const currentItems = path.results.slice(startIndex, endIndex);

  return (
    <ConteinerRow className="RowBox">
        <CategTitle className="rowTitle">{title}</CategTitle>
        <MainDiv className="rowCards">
            <DivCards>
                {path.length === 0 && <p>Carregando...</p>}
                {currentItems.map((movie) => {
                    return (
                        <section>
                            <img key={movie.id} src={`${baseUrlImage}${movie.poster_path}`} alt={movie.name}></img>
                            <div>
                                <h2>{movie.title || movie.name || movie.original_name}</h2>
                                <DateFilm>{movie.first_air_date || movie.release_date}</DateFilm>
                            </div>
                        </section>
                    );
                })}
            </DivCards>
            <DivPages>
                <ul>
                    {Array.from(Array(pages), (item, index) => {
                        return <button value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}>{index + 1}</button>
                    })}
                    <li>3</li>
                    <li>4</li>
                    <li>...</li>
                    <li>322</li>
                    <li>Último</li>
                </ul>
            </DivPages>
        </MainDiv>
    </ConteinerRow>
  );
}

export default RowTwo