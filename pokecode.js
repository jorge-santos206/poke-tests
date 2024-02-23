
const pokemonName = document.querySelector("#pokemonName").value.toLowerCase();

const btnAll=document.querySelector('.btn-all');


    btnAll.addEventListener("click", () => {
        const pokemonPromises = [];
        for (let i = 1; i <= 300; i++) {
          pokemonPromises.push(
            fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
              .then(data => {
                return data.json();
              })
              .then(num => {
                const sprite1 = num.sprites.front_default;
                const test = num.species.name;
      
                const insert = `<div class="pokemon-template">
                  <h2 class="pokemon-template-title">${test}</h2>
                  <div class="pokemon-info">
                      <p>pokemon type</p>
                      <img src="${sprite1}" alt="Pokemon Sprite" id="pokemonSprite" >
                  </div>`;
                return insert;
              })
          );
        }
      
        Promise.all(pokemonPromises)
          .then(insertStrings => {
            insertStrings.forEach(insertString => {
              document.querySelector('.content').insertAdjacentHTML('beforeend', insertString);
            });
          })
          .catch(error => {
            console.error(error);
          });
      });



































