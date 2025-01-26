import { useEffect, useState } from "react";

const END_POINT_GET_POKEMON = "https://pokeapi.co/api/v2/pokemon/";

export const usePokemon = (search, page) => {
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const fetchPokemon = async () => {
        try {
          let pokemon_data = [];

          for (let i = page[0]; i <= page[1]; i++) {
            const res = await fetch(`${END_POINT_GET_POKEMON}${i}`);
            if (!res.ok) {
              throw new Error("Pokémon not found");
            }
            const data = await res.json();
            const { name, id, types, sprites } = data;
            pokemon_data.push({
              name,
              id,
              types: types.map((typeInfo) => typeInfo.type.name),
              sprite: sprites.front_default,
            });
          }

          setError(null);
          setPokemon(pokemon_data);
        } catch (err) {
          console.log(err);
          setPokemon([]);
          setError("Pokémon not found");
        }
      };

      const fetchSearchPokemon = async () => {
        try {
          let url = "";
          if (search.number) {
            url = `${END_POINT_GET_POKEMON}${search.number}`;
          } else if (search.name) {
            url = `${END_POINT_GET_POKEMON}${search.name.toLowerCase()}`;
          }

          const res = await fetch(url);
          if (!res.ok) {
            throw new Error("Pokémon not found");
          }

          const data = await res.json();
          const { name, id, types, sprites } = data;
          setError(null);
          setPokemon([
            {
              name,
              id,
              types: types.map((typeInfo) => typeInfo.type.name),
              sprite: sprites.front_default,
            },
          ]);
        } catch (err) {
          console.error(err);
          setPokemon([]);
          setError("Pokémon not found");
        }
      };

      if (!search.number && !search.name) {
        fetchPokemon();
      } else {
        fetchSearchPokemon();
      }
    }, 500); // Espera medio segundo antes de ejecutar la búsqueda.

    return () => clearTimeout(timeoutId); // Limpia el timeout para evitar llamadas innecesarias.
  }, [page, search]);

  return { pokemon, error };
};
