import './attributes/style.css';

export function contact() {
  const content = document.querySelector('#content')
  content.innerHTML = ""

  const name = document.createElement('h1');
  name.innerHTML = "SOUL"
  name.setAttribute('id', 'name')
  content.appendChild(name);
}
