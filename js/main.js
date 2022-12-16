
function ClickEvent() {
    let IdClickEvent
        IdClickEvent = document.getElementById('home-btn');
        IdClickEvent.addEventListener('click', function (){
            console.log(444)
        });
}

function MouseoverEvent() {
    let IdMouseoverEvent
    IdMouseoverEvent = document.getElementById('home-btn');
    IdMouseoverEvent.addEventListener('mouseover', function (){
        console.log(444)
    });
}


function cycleFor() {
   let Elements = document.getElementsByClassName('all-btn');
    for (let index=0; index < Elements.length; index++){
        let item = Elements[index];
        item.addEventListener('click', function () {
            console.log(444)
        });
    }
}

function cycleForEach() {
    let ElementsForEach = document.getElementsByClassName('all-btn');
    let array = [1 , 4, 5, 8, 6]
    array.forEach((element) => {
        console.log(element)
    })
}

function cycleForStyle() {
    let ElementsColorSwitch = document.getElementsByClassName('all-btn');
    for (let index=0; index < ElementsColorSwitch.length; index++){
        let item = ElementsColorSwitch[index];
        item.addEventListener('click', function () {
            if (this.classList.contains('btn-switch')) {
                this.classList.remove('btn-switch');
            } else {
                this.classList.add('btn-switch');
            }
        });
    }
}
document.addEventListener('DOMContentLoaded', function () {
    cycleForStyle()
}, false);

