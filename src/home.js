function loadHome () {

  const contentDiv = document.getElementById('content');

  function createComponent (tag, content, src) {
    const newComponent = document.createElement(tag);
    newComponent.textContent = content;
    newComponent.src = src;
    contentDiv.appendChild(newComponent);
  }

  function composeContent () {
    createComponent('h1', 'Welcome to the premiere noodle house!', null);
    createComponent('img', null, '../img/noodles-one.jpg');
    createComponent('p', 'Come in, take a seat, and bask in the ambience. Enjoy some java while you work on your Javascript. Take in the sheer size of our world-famous nood_modules platter--complimentary with each visit. We hope you enjoy!', null);
  }

  composeContent();
};

export { loadHome };