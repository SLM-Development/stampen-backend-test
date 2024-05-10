# Stampen Backend Test

## The Case

Assume we're building a Star Wars themed frontend application meant to show data from the [Star Wars API](https://swapi.dev/api/).
However, we've encountered that the API itself is pretty cumbersome to work with, and we usually end up having to write a bunch of extra logic on the client to save network calls.
Your job is to write a **RESTFUL wrapper API** to make the life of our frontend developers a bit brighter.

**IMPORTANT**
Do not work directly towards Stampen's git repository. Deliver a link to your own, open repository that can be run locally.

---

## Feature Requirements

1. There should be an endpoint that when called returns a list of the Star Wars movies available
   - It should include at least the movie's title, release year and episode number.
   - It should take a query parameter "sort" that can be **"release"** to sort the movies by release date, or **"episode"** to sort the movies by episode.
   - It should take a query parameter "order" that can either be **"ascending"** or **"descending"**
2. This endpoint should also have a child endpoint that can take in a movie's episode id (for example /moviesendpoint/3) that returns details about the specified movie
   - Characters present (the names will suffice)
   - Planets that appear
   - Starships that appear
3. There should be a characters endpoint that when called retuns a list of characters (name and homeworld will suffice)
   - It should **only** return characters from **movies that have been previously queried** through the /moviesendpoint/movieId endpoint
   - It should take a query parameter "movie" containing a movie ID, and when present only return characters that appear in that movie
4. Similar to the the case with the movies, this endpoint should also have a child endpoint that receives a character's ID and returns details about the specified character.
   - Height
   - Mass
   - Gender
   - Titles of the movies the character appears in, in chronological order

### Bonus Features

- Implement unit tests using Jest
- Implement the above requirements on a "per user" basis
  - Finding a way to query the API as different users
  - Finding a way to identify these users, keeping track of which user has queried which data, etc.

---

## Tech Requirements

- Use Typescript
- Use an in-memory cache or DB to store state and data
- Aside from the Start Wars API, avoid external dependencies on API's or Database services. Everything should be contained within this application and able to run locally with no setup.

---

## Key Considerations

- Keep an eye on performance
- Minimize the amount of network requests, both from the client to you, and from you to SWAPI
