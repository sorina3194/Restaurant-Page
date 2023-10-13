import './attributes/style.css'
import './attributes/home.css';

export function initializePage() {
  const content = document.querySelector('#content')
  content.innerHTML = ""

  const name = document.createElement('h1');
  name.innerHTML = "SOUL"
  name.setAttribute('id', 'name')
  content.appendChild(name);

  const header = document.createElement('h3');
  header.innerHTML = "Where every flavor tells a story"
  header.setAttribute('id','header');
  content.appendChild(header);

  const description = document.createElement('div');

  const description1 = document.createElement('p');
  description1.innerHTML = "For the past twenty years, SOUL has been a restaurant ever curious to learn and grow—to be the best that we can be!"

  const description2 = document.createElement('p');
  description2.innerHTML = "Our origin is rooted in an exploration of the natural world, which began with a simple desire to rediscover wild local ingredients by foraging and to follow the seasons."

  const description3 = document.createElement('p');
  description3.innerHTML = "Since the early years, we have added many layers to what we do; we have teams dedicated only to innovation, another team is specialized in fermentation, we have fulltime foragers, gardeners, and researchers."

  const description4 = document.createElement('p');
  description4.innerHTML = "We’ve traveled the world in search of inspiration, technique, friendship, and new ingredients. Over the years we’ve grown our staff from a mere twelve, to now more than one hundred."

  const description5 = document.createElement('p');
  description5.innerHTML = "Pursuit of knowledge, devout creativity, relentless teamwork, and surprising our guests are essential to who we are."

  description.setAttribute('id','description');
  description.appendChild(description1)
  description.appendChild(description2)
  description.appendChild(description3)
  description.appendChild(description4)
  description.appendChild(description5)

  content.appendChild(description);


  const hours = document.createElement('div');
  hours.innerHTML = " OPEN "
  hours.setAttribute('id','hours');

  const Sunday = document.createElement('p');
  const Monday = document.createElement('p');
  const Tuesday = document.createElement('p');
  const Wednesday = document.createElement('p');
  const Thursday = document.createElement('p');
  const Friday = document.createElement('p');
  const Saturday = document.createElement('p');

  Sunday.innerHTML = "Sunday: 8pm - 12am"

  Monday.innerHTML = "Monday: 8pm - 12am"

  Tuesday.innerHTML= "Tuesday: 8pm - 12am"

  Wednesday.innerHTML = "Wednesday: 8pm - 12am"

  Thursday.innerHTML = "Thursday: 8pm - 12am"

  Friday.innerHTML = "Friday: 8pm - 12am"

  Saturday.innerHTML = "Saturday: 8pm - 12am"

  hours.appendChild(Sunday);
  hours.appendChild(Monday);
  hours.appendChild(Tuesday);
  hours.appendChild(Wednesday);
  hours.appendChild(Thursday);
  hours.appendChild(Friday);
  hours.appendChild(Saturday);
  content.appendChild(hours);

  const location = document.createElement('div')
  location.innerHTML = "LOCATION : Cluj-Napoca —Strada Napoca 8A"
  location.setAttribute('id','location');

  content.appendChild(location)
}
