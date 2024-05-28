const rapidAPIKey = process.env.REACT_APP_RAPIDAPI_KEY;
const rapidAPIHost = process.env.REACT_APP_RAPIDAPI_HOST;

export const fetchCharacters = async (page) => {
  try {
    const response = await fetch(`https://${rapidAPIHost}/Characters?page=${page}&pageSize=6`, {
      headers: {
        'x-rapidapi-key': rapidAPIKey,
        'x-rapidapi-host': rapidAPIHost,
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching characters: ' + error.message);
  }
};