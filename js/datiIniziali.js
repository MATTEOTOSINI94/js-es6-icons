const iconeGriglia = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

const coloreIcone ={
	"animal":"blue",
    "vegetable":"yellow",
    "user":"purple",
}


const cardContainer = document.querySelector(".card-container")
const selectType = document.getElementById("type-select")

function cardPrint(cards) {
	
cardContainer.innerHTML = ""

for (let x = 0; x < cards.length; x++) {
	const icona = cards[x];


	const {family,prefix,name,type} = icona
	const colore = coloreIcone[type]


cardContainer.innerHTML += `
<div class="col">
<div class="card h-100 shadow-sm">
  <div class="card-img-top">
  <i class="${family} ${prefix + name }" style="color:${colore}"></i>
  </div>
  <div class="card-body">
	<div class="card-title text-center">${name}</div>
  </div>
</div>
</div>`;	
}
}

cardPrint(iconeGriglia)

selectType.addEventListener("change", function(){
 
 const typeSelection = iconeGriglia.filter(item => {
	 if (this.value === item.type || this.value === "")
	  return true
	})
 cardPrint(typeSelection)


 console.log(typeSelection)
 console.log(this.value)
})






