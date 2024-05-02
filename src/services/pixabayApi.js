import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const FetchImages = async (searchQuery, page) => {
  const params = new URLSearchParams({
    key: '34617221-40fb3a679d52688cd42ce20c8',
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    page: page,
    per_page: 12,
  });

  const response = await axios.get(`?${params}`);

  const images = response.data.hits.map(
    ({ id, webformatURL, largeImageURL, tags }) => {
      return {
        id,
        webformatURL,
        largeImageURL,
        tags,
      };
    }
  );
  return { images, totalImages: response.data.totalHits };
};

export default FetchImages;