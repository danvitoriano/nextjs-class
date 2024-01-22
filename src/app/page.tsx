import Link from "next/link";

export default async function Home() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon", {
    next: { revalidate: 30 },
  });
  const { results: pokemons } = await response.json();

  return (
    <div>
      <h2 className="text-2xl mb-4 font-bold">Pokemons</h2>

      <div className="flex flex-wrap gap-3">
        {pokemons.map((pokemon: any) => (
          <Link href={`/write/${pokemon.name}`} key={pokemon.name}>
            {pokemon.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
