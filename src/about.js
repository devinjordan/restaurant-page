function loadAbout () {

  const contentDiv = document.getElementById('content');

  function createComponent (tag, content, src) {
    const newComponent = document.createElement(tag);
    newComponent.textContent = content;
    newComponent.src = src;
    contentDiv.appendChild(newComponent);
  }

  function composeContent () {
    createComponent('h1', 'About Us', null);
    createComponent('img', null, '../img/noodles-one.jpg');
    createComponent('p', "Founded in 2009 by Chef Ryan Dahl, we've been serving up the greatest noodles experienced in this part of the world.", null);
    createComponent('p', "Chef Dahl discovered a way to bundle an enormous and borderline unnecessary amount of noodles into our flagship plate: The nood_modules platter. Everything else on the menu is great, but nothing competes with the sheer size of our house special.", null);
    createComponent('p', "Come visit us at 123 Lorem Ipsum Drive.", null);
  }

  composeContent();
};

export { loadAbout };