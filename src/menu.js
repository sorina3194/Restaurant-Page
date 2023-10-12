import './attributes/style.css';
import './attributes/menu.css'

export function menu() {
  const content = document.querySelector('#content')
  content.innerHTML = ""

  const name = document.createElement('h1');
  name.innerHTML = "SOUL"
  name.setAttribute('id', 'name')
  content.appendChild(name);

  menuKoi()
  menuKolibri()
  menuVegan()
}

function menuKolibri() {
  const menuKolibri = document.createElement('div');
  menuKolibri.setAttribute('id', 'menuKolibri')

  const title = document.createElement('p')
  title.innerHTML = "KOLIBRI MENU"
  title.setAttribute('id', 'titleKolibri')

  const kolibri1 = document.createElement('p');
  kolibri1.innerHTML = "SPRATT cucumber | imperial caviar"

  const kolibri2 = document.createElement('p');
  kolibri2.innerHTML = "SANGOHACHI ZANDER sauerkraut | peruvian mint"

  const kolibri3 = document.createElement('p');
  kolibri3.innerHTML = "SHRIMP COCKTAIL KADEWE mandarin | lettuce"

  const kolibri4 = document.createElement('p');
  kolibri4.innerHTML = "KÖNIGSBERGER KLOPS beetroot | caper leaf"

  const kolibri5 = document.createElement('p');
  kolibri5.innerHTML = "CHICKEN FRICASSEE black truffle | pea"

  const kolibri6 = document.createElement('p');
  kolibri6.innerHTML = "WAGYU BEEF GOULASH red pepper | green paprika"

  const kolibri7 = document.createElement('p');
  kolibri7.innerHTML = "COLD LOVE raspberry I yogurt"

  const kolibri8 = document.createElement('p');
  kolibri8.innerHTML = " PRICE 268 euros including 7% VAT"


  menuKolibri.setAttribute('id','menuKolibri');
  menuKolibri.appendChild(title)
  menuKolibri.appendChild(kolibri1)
  menuKolibri.appendChild(kolibri2)
  menuKolibri.appendChild(kolibri3)
  menuKolibri.appendChild(kolibri4)
  menuKolibri.appendChild(kolibri5)
  menuKolibri.appendChild(kolibri6)
  menuKolibri.appendChild(kolibri7)
  menuKolibri.appendChild(kolibri8)

  content.appendChild(menuKolibri);
}

function menuKoi() {
  const menuKoi = document.createElement('div');
  menuKoi.setAttribute('id', 'menuKoi')

  const title = document.createElement('p')
  title.innerHTML = "KOI MENU"
  title.setAttribute('id', 'titleKoi')

  const koi1 = document.createElement('p');
  koi1.innerHTML = "KOHLRABI pea | green horseradish"

  const koi2 = document.createElement('p');
  koi2.innerHTML = "DIM SUM BAMBOO MUSHROOM scallop | parsley"

  const koi3 = document.createElement('p');
  koi3.innerHTML = "KAISERGRANAT lime | nuoc mam"

  const koi4 = document.createElement('p');
  koi4.innerHTML = "HAKE miso| tangerine"

  const koi5 = document.createElement('p');
  koi5.innerHTML = "SUCKING PIG PORK dashi | ginger"

  const koi6 = document.createElement('p');
  koi6.innerHTML = "HASE SICHUAN cabbage | currant"

  const koi7 = document.createElement('p');
  koi7.innerHTML = "NAM DOK MANGO lime | rice"

  const koi8 = document.createElement('p');
  koi8.innerHTML = " PRICE 268 euros including 7% VAT "


  menuKoi.setAttribute('id','menuKoi');
  menuKoi.appendChild(title)
  menuKoi.appendChild(koi1)
  menuKoi.appendChild(koi2)
  menuKoi.appendChild(koi3)
  menuKoi.appendChild(koi4)
  menuKoi.appendChild(koi5)
  menuKoi.appendChild(koi6)
  menuKoi.appendChild(koi7)
  menuKoi.appendChild(koi8)

  content.appendChild(menuKoi);
}

function menuVegan() {
  const menuVegan = document.createElement('div');
  menuVegan.setAttribute('id', 'menuVegan')

  const title = document.createElement('p');
  title.innerHTML = "VEGAN MENU"
  title.setAttribute('id', 'titleVegan')

  const vegan1 = document.createElement('p');
  vegan1.innerHTML = "KOHLRABI pea | green horseradish"

  const vegan2 = document.createElement('p');
  vegan2.innerHTML = "CELERY miso | tangerine"

  const vegan3 = document.createElement('p');
  vegan3.innerHTML = "WASABI CARROT wasabi | lime"

  const vegan4 = document.createElement('p');
  vegan4.innerHTML = "TOPINAMBUR black truffle | hazelnut"

  const vegan5 = document.createElement('p');
  vegan5.innerHTML = "SWEET POTATO red pepper | green paprika"

  const vegan6 = document.createElement('p');
  vegan6.innerHTML = "PLANTED CHICKEN BREAST cabbage | currant"

  const vegan7 = document.createElement('p');
  vegan7.innerHTML = "NAM DOK MANGO lime | rice"

  const vegan8 = document.createElement('p');
  vegan8.innerHTML = " PRICE 228 euros including 7% VAT "


  menuVegan.setAttribute('id','menuVegan');
  menuVegan.appendChild(title)
  menuVegan.appendChild(vegan1)
  menuVegan.appendChild(vegan2)
  menuVegan.appendChild(vegan3)
  menuVegan.appendChild(vegan4)
  menuVegan.appendChild(vegan5)
  menuVegan.appendChild(vegan6)
  menuVegan.appendChild(vegan7)
  menuVegan.appendChild(vegan8)

  content.appendChild(menuVegan);
}
