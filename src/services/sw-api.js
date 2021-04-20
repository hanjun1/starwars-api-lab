export async function getAllStarships() {
  let starships = [];
  let fetchedStarships = await fetch(
    "https://swapi.dev/api/starships/"
  ).then((res) => res.json());
  starships = starships.concat(fetchedStarships.results);
  while (fetchedStarships.next) {
    fetchedStarships = await fetch(fetchedStarships.next).then((res) =>
      res.json()
    );
    starships = starships.concat(fetchedStarships.results);
  }
  return starships;
}
