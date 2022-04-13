const API_KEY = 'aogk3esTQWLX_zrqNfuoERWjuvtUfk9Jz-0-5oWm9u0';
const imagesPerPage = 10;

export default async function getImages(page = 1) {
  const res = await fetch(`https://api.unsplash.com/photos?page=${page}&per_page=${imagesPerPage}&client_id=${API_KEY}`);
  const data = await res.json();

  return data;
}
