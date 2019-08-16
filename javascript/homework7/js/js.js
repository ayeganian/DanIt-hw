let array = ['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv'];

function arrayOutput(array) {
  let list = document.createElement('ul');

  const arrayListItems = array.map(item => {
    let listItem = `<li> ${item} </li>`;
    return listItem;
  });
  list.innerHTML = arrayListItems.join(' ');

  return list
}

document.querySelector('script').before(arrayOutput(array));