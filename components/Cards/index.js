// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.



const cardsContainer = document.querySelector('.cards-container')


//get request 
axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response);
        response.data.articles.javascript.forEach(article => {
            cardsContainer.appendChild(createCards(article))
        });
        response.data.articles.bootstrap.forEach(article => {
            cardsContainer.appendChild(createCards(article))
        });
        response.data.articles.technology.forEach(article => {
            cardsContainer.appendChild(createCards(article))
        });
        response.data.articles.jquery.forEach(article => {
            cardsContainer.appendChild(createCards(article))
        });
        response.data.articles.node.forEach(article => {
            cardsContainer.appendChild(createCards(article))
        });
    })



function createCards(object) {
    const card = document.createElement('div');
    const headLine = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imgDiv = document.createElement('div');
    const img = document.createElement('img');
    const author = document.createElement('span');


    card.appendChild(headLine);
    card.appendChild(authorDiv);
    authorDiv.appendChild(imgDiv);
    authorDiv.appendChild(author);
    imgDiv.appendChild(img);


    card.classList.add('card');
    headLine.classList.add('headline');
    authorDiv.classList.add('author');
    imgDiv.classList.add('img-container')


    headLine.textContent = object.headline;
    img.src = object.authorPhoto;
    author.textContent = object.authorName;

    return card;

}