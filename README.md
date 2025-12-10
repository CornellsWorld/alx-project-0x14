 ## API Overview
 A comprehensive database of information on movies, TV shows, and actors. It includes YouTube trailer links, awards, full biographies, and many other useful details. This API delivers complete and up-to-date data for over 9 million titles (movies, series, and episodes) and more than 11 million actors, crew, and cast members.


## Available Endpoints

This API provides multiple endpoints for accessing movies, TV shows, episodes, and actor data. All endpoints return an object with a results key. Endpoints that support pagination also include page, next, and entries.
All query parameters are optional unless stated otherwise.

Titles

Multiple Titles (/titles): Returns a list of titles filtered or sorted by optional query parameters. Supports a special list parameter for selecting predefined collections.

Titles by IDs (/x/titles-by-ids): Returns titles matching an array of IMDb IDs.

Single Title (/titles/{id}): Returns detailed information for a specific title.

Title Ratings (/titles/{id}/ratings): Returns rating and vote count for a title.

Series, Seasons & Episodes

All Episodes (Light) (/titles/series/{id}): Returns basic info (episode ID, episode number, season number) for all episodes in a series.

Season Count (/titles/seasons/{id}): Returns the number of seasons in a series.

Episodes by Season (/titles/series/{id}/{season}): Returns basic episode info for a specific season.

Single Episode (/titles/episode/{id}): Returns full episode details.

Upcoming Titles

Upcoming Releases (/titles/x/upcoming): Returns upcoming movies and shows with optional filters.

Search

Search by Keyword (/titles/search/keyword/{keyword}): Returns titles matching a keyword.

Search by Title (/titles/search/title/{title}): Returns titles matching a title or partial title, with optional exact match.

Search by AKA (/titles/search/akas/{aka}): Returns titles matching an exact alternate title (AKA), case-sensitive.

Actors

All Actors (/actors): Returns actors with optional pagination.

Actor by ID (/actors/{id}): Returns detailed information for a specific actor.

Utilities

Title Types (/title/utils/titleType): Returns available title types.

Genres (/title/utils/genres): Returns a list of genres.

Title Lists (/title/utils/lists): Returns collections available for the list query parameter.

## Version

Version 1

## Request and Response Format

## Authentication

## Error Handling 

## Usage Limits and Best Practices
