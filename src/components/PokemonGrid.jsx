export const PokemonGrid = ({ pokemon, typeColors, error }) => {
  return (
    <div className="grid">
      {error ? (
        <p>{error}</p> // Mensaje de error
      ) : (
        pokemon.map((poke) => (
          <div className="card" key={poke.id}>
            <img src={poke.sprite} alt={poke.name} />
            <p>{poke.id}</p>
            <p>{poke.name}</p>
            <div className="card-type">
              <div className="type__pokemon">
                {poke.types.map((type, index) => (
                  <p
                    key={index}
                    style={{
                      backgroundColor: typeColors[type],
                      padding: "5px",
                      borderRadius: "5px",
                    }}
                  >
                    {type}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
