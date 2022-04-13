const API_KEY = 'aogk3esTQWLX_zrqNfuoERWjuvtUfk9Jz-0-5oWm9u0';

export default async function getImages() {
  const res = await fetch(`https://api.unsplash.com/photos?client_id=${API_KEY}`);
  const data = await res.json();

  return data;
}
