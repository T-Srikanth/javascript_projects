const sketch = document.querySelector('.sketch');

for(let i=0; i<16*16 ; i++) {
    let block = document.createElement('div')
    // block.innerText = i
    block.classList.add('unit')
    sketch.appendChild(block)
}

const units = document.querySelectorAll('.unit')
console.log(units)
units.forEach(unit => unit.addEventListener('click',(event) => {
    let tempUnit = event.target
    tempUnit.classList.toggle('color')
}))