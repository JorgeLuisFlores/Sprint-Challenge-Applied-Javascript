// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const header = document.createElement('div')
    const date = header.appendChild(document.createElement('span'))
    const title = header.appendChild(document.createElement('h1'))
    const temperature = header.appendChild(document.createElement('span'))

    header.classList.add('header')
    date.classList.add('date')
    temperature.classList.add('temp')

    header.appendChild(date)
    header.appendChild(title)
    header.appendChild(temperature)

    title.textContent = "Lambda Times"
    date.textContent = "MARCH 28, 2019"
    temperature.textContent = "98°"

    return header

}


const headerContainer = document.querySelector('.header-container')
headerContainer.appendChild(Header())