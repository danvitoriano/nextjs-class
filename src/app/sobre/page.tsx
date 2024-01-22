// transforma a função em async para usar o await 
export default async function AboutPage() {

  // chama a API com o fetch e salvo o resultado na constante response
  const response = await fetch('https://pokeapi.co/api/v2/pokemon');
  // transforma o resultado de response em json e salva na constante results
  // precisa usar o await para esperar o resultado da promise de response
  const {results: pokemons} = await response.json(); // desestruturação de objeto
  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Página Lista</h1>
      <ul>
        {/* mapeia o array de pokemons e retorna um li para cada pokemon */}
        {/* a lista de pokemons é retornada dentro de um array chamado results */}
        {pokemons.map((pokemon: any) => ( // map simplificado
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}
