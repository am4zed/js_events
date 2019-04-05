document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const formInput = document.querySelector('#new-item-form');

  const handleInputs = function(evt){
    evt.preventDefault();
    // Title
    const newDiv = document.createElement('div');
    const readingList = document.querySelector('#reading-list');
    readingList.appendChild(newDiv);
    const titleHeading = document.createElement('h1');
    newDiv.appendChild(titleHeading);
    titleHeading.textContent = `Title: ${evt.target.title.value}`;
    // Author
    const authorHeading = document.createElement('h3');
    titleHeading.appendChild(authorHeading);
    authorHeading.textContent = `Author: ${evt.target.author.value}`;

    // Category
    const categoryInfo = document.createElement('p');
    authorHeading.appendChild(categoryInfo);
    categoryInfo.textContent = `Category: ${evt.target.category.value}`;

  };

  formInput.addEventListener('submit', handleInputs);

});
