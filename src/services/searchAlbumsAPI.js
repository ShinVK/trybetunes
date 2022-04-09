const searchAlbumsAPI = async (artist) => {
  const artistNoNumber = artist.replace(/[0-9]/g, '').toLowerCase();
  const artistNameURL = encodeURI(artistNoNumber).replaceAll('%20', '+');

  const getAlbumsAPI = `https://itunes.apple.com/search?entity=album&term=${artistNameURL}&attribute=allArtistTerm`;
  console.log(getAlbumsAPI);
  const APIResponse = await fetch(getAlbumsAPI);
  const { results } = await APIResponse.json();
  console.log(results);

  const response = results.map(
    ({
      artistId,
      artistName,
      collectionId,
      collectionName,
      collectionPrice,
      artworkUrl100,
      releaseDate,
      trackCount,
    }) => ({
      artistId,
      artistName,
      collectionId,
      collectionName,
      collectionPrice,
      artworkUrl100,
      releaseDate,
      trackCount,
    }),
  );
  return response;
};

export default searchAlbumsAPI;
