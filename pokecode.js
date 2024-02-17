
const pokemonName = document.querySelector("#pokemonName").value.toLowerCase();
const btnSprites=document.querySelector('.btn-sprites');
const btnAll=document.querySelector('.btn-all');

btnSprites.addEventListener("click",()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(data=>{
        return data.json()
    })
    .then(data=>{
        
            
       
        const insert=`<div class="pokemon-template">
        <h2 class="pokemon-template-title"></h2>
        <div class="pokemon-info">
            <p>pokemon type</p>
            <img src="" alt="Pokemon Sprite" id="pokemonSprite" style="display: none">
        </div>` 
       
    })
})

// fetch(`https://pokeapi.co/api/v2/pokemon/ditto`).then(data=>{
    
       
   
    // return data.json(); })
    // .then(res=>{
    //     test= res.species.name;
    //     console.log(test);
    // })


    btnAll.addEventListener("click",()=>{
       for(let i=1; i<=10; i++){
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(data=>{
            return data.json();
        })
        .then(num =>{
            
               const sprite1= num.sprites.front_default; 
               const test= num.species.name;
           
            const insert=`<div class="pokemon-template">
            <h2 class="pokemon-template-title">${test}</h2>
            <div class="pokemon-info">
                <p>pokemon type</p>
                <img src="${sprite1}" alt="Pokemon Sprite" id="pokemonSprite" >
            </div>` ;
           document.querySelector('.content').insertAdjacentHTML('beforeend',insert);
        })
        .catch(error=>{
                   console.error(error);
               });


       }
    })




































