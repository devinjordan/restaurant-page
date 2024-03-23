function loadMenu () {

  const contentDiv = document.getElementById('content');

  function createComponent (tag, content, src) {
    const newComponent = document.createElement(tag);
    newComponent.textContent = content;
    newComponent.src = src;
    contentDiv.appendChild(newComponent);
  }

  function composeContent () {
    createComponent('h1', 'Menu', null);
    createComponent('img', null, '../img/noodles-one.jpg');
    createComponent('h3', "nood_modules", null);
    createComponent('p', "Just take them. It's why you're here.", null);
    createComponent('br', null, null);
    createComponent('h3', "Spaghetti", null);
    createComponent('p', "Since you opted out of the house favorite... we figure you're on the less adventurous side of the spectrum. No worries! We've got you covered with a classic plate of spaghetti with a robust tomato sauce. Fresh herbs from our backyard garden.", null);
    createComponent('br', null, null);
    createComponent('h3', 'Pho', null);
    createComponent('p', "Pronounce this one correctly and you're sure to impress the friends that know, and worry the ones that don't.", null);
  }

  composeContent();
};

export { loadMenu };