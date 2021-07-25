export const API = 'https://api.openbrewerydb.org/breweries'

export const fetcher = async (url) => {
  try {
    const res = await fetch(url);
    const data =  await res.json();
    return data
  } catch (error) {
    console.log(`${error} in Fetcher`);
    return error
  }
}