const axios = require('axios');

const buscaInfoPokemon = async (pokeId) =>{
    try{
        const url = process.env.POKE_API + pokeId;
        const resultado =  await axios.get(url);


        const data = resultado.data;

        const id = data.id;
        const nome = data.name;
        const altura = data.height;
        const peso = data.weight;
        const imagem = data.sprites.other['official-artwork'].front_default;
        const ataques = data.abilities.map(a => a.ability.name).join(", ");
        const jogos = []

        data.game_indices.forEach((j) => {
            jogos.push(j.version.name)
        })

        const estatisticas = {};

        data.stats.forEach((estatistica) => {
            estatisticas[estatistica.stat.name] = estatistica.base_stat;
        });

        return({
            id,
            nome,
            altura,
            peso,
            imagem,
            ataques,
            estatisticas,
            jogos,
        })
    } catch (e) {
        console.log('erro: ' + e);
    }
};
module.exports = buscaInfoPokemon;