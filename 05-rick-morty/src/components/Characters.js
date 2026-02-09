export default function Characters(props) {
  const { characters,setCharacters } = props;

  const reset = ()=>{
    setCharacters(null)
  }

  return (
    <div className="characters">
      <h1>Personajes</h1>
      <span className="back-home" onClick={reset}>Volver al inicio</span>
      <div className="container-characters">
        {characters.map((character, index) => (
          <div className="character-container" key={index}>
            <div>
              <img src={character.image} alt={character.name} />
            </div>
            <div>
              <h3>{character.name}</h3>
              <h6>
                {character.status === "Alive" ? (
                  <>
                    <span className="Alive" />
                    Vivito
                  </>
                ) : (
                  <>
                    <span className="dead" />
                    Morido
                  </>
                )}
              </h6>
              <p ><span className="text-gray">Episodios: </span>
                <span>{character.episode.length}</span>
              </p>
              <p ><span className="text-gray">Especie: </span>
                <span>{character.species}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="back-home" onClick={reset}>Volver al inicio</div>
    </div>
  );
}
