
export const options = (actor) => {
  return (
    {
      method: 'GET',
      url: 'https://celebrity-by-api-ninjas.p.rapidapi.com/v1/celebrity',
      params: {name: actor},
      headers: {
        'X-RapidAPI-Key': '4739bd97cbmsh4d6ed5faf3af021p1a0003jsn23f53f704b62',
        'X-RapidAPI-Host': 'celebrity-by-api-ninjas.p.rapidapi.com'
      }
    }
  )
 
};