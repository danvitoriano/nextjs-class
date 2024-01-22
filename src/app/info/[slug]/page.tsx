// importando o componente image
import Image from 'next/image';

// função para gerar os parâmetros estáticos
export async function generateStaticParams() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon');
  const { results: pokemons } = await response.json();

  return pokemons.map((pokemon: any) => ({ slug: pokemon.name }));
}

// transforma a função em async para usar o await
// a função receberá a string de slug como parâmetro
export default async function InfoDetails({ params, }: { params: { slug: string };}) {
  // chama a API com o fetch, passando o slu como parâmetro no formato de API REST
  // e salva o resultado na constante response
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.slug}`);
  const pokemon = await response.json(); // salva os dados do pokemon

  return (
    <div className="flex items-center">
      <Image
        // busca a imagem do pokemon na API
        src={pokemon.sprites.front_shiny}
        width={80}
        height={80}
        alt={pokemon.name}
      />
      {/* mostra o nome do pokemon vindo da API */}
      <h2 className="text-2xl mb-4 font-bold">{pokemon.name}</h2>
    </div>
  );
}
