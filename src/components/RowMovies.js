import styled from "styled-components";
import Carousel from "react-elastic-carousel";

const ConteinerRow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CategTitle = styled.h2`
    display: flex;
    align-items: flex-end;
    width: 83vw;
    height: 10vh;
    // border: blue solid;
`

const DivCards = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    // overflow: hidden;
    
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

        .rec.rec-arrow {
            background: transparent;

            :disabled {
                visibility: hidden;
            }
        }

        .rec.rec-pagination {
            display: none;
            // border: blue solid;
        }

        .rec.rec-dot {
            // border green solid;
        }

        .rec.rec-carousel {
            // border: hotpink solid;
        }

        .lua {
            // border: yellow solid;
        }

        .lua1 {
            // border: red solid;

            .rec.rec-arrow {
                // display: none;
            }

            .rec.rec-carousel {
                // border: green solid;
            }

            .rec.rec-item-wrapper {
                // border: seagreen solid;
            }
        }
`

const DateFilm =styled.h3`
    width: 2.3em;
    font-size: 12px;
    font-weight: 100;
    white-space: nowrap;
    overflow: hidden;
`



const baseUrlImage = "https://image.tmdb.org/t/p/original/";

function Row({title, path, isLarge}) {


  return (
    <ConteinerRow className="RowBox">
        <CategTitle className="rowTitle">{title}</CategTitle>
        <DivCards className="rowCards">
            {path.length === 0 && <p>Carregando...</p>}
            
            <Carousel className={`lua ${isLarge && "lua1"}`}
                // infinite={true}
                itemsToScroll={3}
                itemsToShow={5}
                itemPadding={[30, 30]}
                style={{
                    width: "95vw",
            }}
                >
            {path.results.map((movie) => {
                return (
                    <div>
                        <><img key={movie.id} src={`${baseUrlImage}${movie.poster_path}`} alt={movie.name}></img>
                        <h2>{movie.title || movie.name || movie.original_name}</h2>
                        <DateFilm>{movie.first_air_date || movie.release_date}</DateFilm>
                        {/* <h3>{ firstDate.getFullYear() || firstDateTwo.getFullYear() }</h3> */}
                        </>
                    </div>
                );
            })}
            </Carousel>    
        </DivCards>
    </ConteinerRow>
  )
}

export default Row