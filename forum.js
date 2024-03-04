function handlerCard() {

    fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
        .then(response => response.json())
        .then(data => Showdetails(data))

}

function Showdetails(CardInfo) {
    const CardDetailsShow = document.getElementById('CardDetailsShow')
    CardInfo.forEach(result => {
        const CardDetail = document.createElement('section')
        CardDetail.innerHTML = `<div class="card w-96 shadow-xl">
       <figure><img src="${result.cover_image}" alt="Shoes" /></figure>
       <div class="card-body">
         <h2 class="card-title">${result.author.posted}</h2>
         <p class="font-bold">${result.title}</p>
         <p class="">${result.description}</p>
         <div class="flex space-x-8">
         <img src="${result.profile_image}" class="w-24 h-24 rounded-4xl " alt="">
         <div>
         <p class="font-bold">${result.author.name}</p>  
         <p>${result.author.designation}</p>
         </div>
         </div>
       </div> 
     </div>`

        CardDetailsShow.appendChild(CardDetail)
    })
}

handlerCard()