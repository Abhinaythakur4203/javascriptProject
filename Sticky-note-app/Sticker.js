let sticker = document.getElementsByClassName('sticker');
// const sticker=document.getElementById("sticker");
let button = document.getElementById('btn')


function createSticker(event) {
    const color = document.getElementById('color').value
    let container = document.getElementById("container")


    event.preventDefault();

    const html = ` <div class="stic">
            <textarea class="sticker" style="border-top: 20px solid ${color};" placeholder="Type somthing here..."></textarea>
             
            </div>
             `

    container.innerHTML = container.innerHTML + html;

}


let cursor = { x: null,y: null };
let note = { dom: null, x: null, y: null }




document.addEventListener('mousedown', (event) => {

    if (event.target.classList.contains("sticker")) {

        cursor = {
            x: event.clientX,
            y: event.clientY

        };
        note = {
            dom: event.target,
            x: event.target.getBoundingClientRect().left,
            y: event.target.getBoundingClientRect().top

        }

    }
    // console.log(cursor)

})

document.addEventListener('mousemove', (event) => {

    if (note.dom == null) return;
    let currentCurser = {
        x: event.clientX,
        y: event.clientY
    }

    let distance = {
        x: currentCurser.x - cursor.x,
        y: currentCurser.y - cursor.y
    }

    note.dom.style.left = (note.x + distance.x) + 'px';
    note.dom.style.top = (note.y + distance.y) + 'px';
    note.dom.style.cursor = "grab";
})

document.addEventListener('mouseup', () => {
    note.dom.style.cursor = "auto";

    note.dom = null

})

