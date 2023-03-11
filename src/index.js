import './less/index.less'

// Your code goes here!


window.onload = function (evt) {
    console.log(`event ${evt.type}fired! Ready to go!`)
    const heading = document.querySelector('h1')
    heading.textContent = 'Ready to go!'

    //copy text and replace the existing text on the display
    window.addEventListener('copy', () =>{
        navigator.clipboard.readText().then (text => {heading.textContent += text})
    })

    //  upon the click action, the element clicked will mirror the original by 180degs
    document.body.addEventListener('click', evt =>{
        evt.target.classList.toggle('mirror')
    })

    // doubleclicking takes the element and replaces it with a empty string
    document.body.addEventListener('dblclick', evt => {evt.target.outerHTML = ''})


    // pressing of a key can execute a override on the page
    window.addEventListener('keydown', evt =>{
        if (evt.key == 6){
            document.body.innerHTML = '<h1> lets shut it down</h1>'
        }
    })

    // collecting and doing something with mouse-movement.  
    document.body.addEventListener('mousemove', evt => {
        const {clientX, clientY} = evt

    })
    // how to manage the rate of capture to help performance
    const destinations = document.querySelectorAll('.destination')
    for( let destination of destinations){
        destination.addEventListener('mouseenter', () => {
            destination.style.fontWeight = 'bold'
        })
        destination.addEventListener('mouseleave', () => {
            destination.style.fontWeight = 'initial'
        })
    }

}