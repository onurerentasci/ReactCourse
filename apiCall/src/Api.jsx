import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 8Eco5fGRzBf1uVplFPm2CBnXThm71AGlgIGyFEPDgk4",
    },
    params: { query: term },
  });
  return response.data.results;
};

export default searchImages;
