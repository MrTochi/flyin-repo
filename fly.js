let icons=document.querySelectorAll(`.icon`)
let flycards=document.querySelectorAll(`.flyin`)


let[card1,card2,card3,card4,card5,card6]=flycards
let [icon1,icon2,icon3,icon4,icon5,icon6]=icons

function hideAll(){
  flycards.forEach(function(cardHolder){
    cardHolder.classList.remove(`fly-in-menu-new`)
    cardHolder.classList.add(`fly-in-menu`)
  })
}


function toggleFunction(icon,card){

  icon.addEventListener(`click`,function(event){
    event.stopPropagation()
    if(card.classList.contains(`fly-in-menu`)){
      hideAll()
      card.classList.remove(`fly-in-menu`)
      card.classList.add(`fly-in-menu-new`)
    }
    else if(card.classList.contains(`fly-in-menu-new`)){
      card.classList.remove(`fly-in-menu-new`)
      card.classList.add(`fly-in-menu`)
    }
  })

}

function documentClickHandler() {
  hideAll();
}

toggleFunction(icon1,card1)
toggleFunction(icon2,card2)
toggleFunction(icon3,card3)
toggleFunction(icon4,card4)
toggleFunction(icon5,card5)
toggleFunction(icon6,card6)



  

  
