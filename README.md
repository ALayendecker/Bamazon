# Bamazon

<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** github_username, repo, twitter_handle, email
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">Bamazon</h3>
    <a href="https://github.com/Alayendecker/Bamazon"><strong>Documentation and Repo Link</strong></a>
    <br />
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
  - [Organization](#Organization)
- [Getting Started](#getting-started)
  - [Installation](#installation)
- [Usage](#usage)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

This app will let a user query multiple sets of data from different APIs.

- This app could be used as one stop shop for specific searches regarding the most recent upcoming concert for an artist. See - [Band In Town](#concert-this)

- A spotify search based off song name. See - [Spotify](#spotify-this-song)

* A movie search based off movie title. See - [OMDB](#movie-this)

### Built With

- [Node](https://nodejs.org/en/)
- [Node Package - DotEnv](https://www.npmjs.com/package/dotenv)
- [Node Package - mysql](https://www.npmjs.com/package/mysql)
- [Node Package - Inquirer](https://www.npmjs.com/package/inquirer)
- [othneildrew - Best README Template](https://github.com/othneildrew/Best-README-Template)

<!-- Organization -->

## Organization

Requires are located at the top of the liri.js file along with an instanciated spotify and user input global variable.

All functions are called through a switch case wrapped into a function for logging. Each of the four commands used in this app have their own functions.

`concert-this`

`spotify-this-song`

`movie-this`

`do-what-it-says`

The functions themselves are created in the bottom half of the liri.js file.

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

1. Clone the repo

```sh
git clone https:://github.com/Alayendecker/Bamazon.git
```

2. Install NPM packages

```sh
npm install
```

3. Create an `.env` to hide your own API keys you will need to run this app.

```sh
# Spotify API keys
SPOTIFY_ID= (ID here)
SPOTIFY_SECRET= (Secret here)
```

<!-- USAGE EXAMPLES -->

## Usage

To use Bamazon Customer with node run `node bamazonCustomer.js`

### Commands

| App Command  | Short Description                                       |
| ------------ | ------------------------------------------------------- |
| `Numbers`    | Use Numbers as inputs for item Id's and product amounts |
| `Arrow Keys` | Use Arrow Keys to navigate inquirer                     |

#### `concert-this (artistName)`

This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

- Name of the venue
- Venue location
- Date of the Event (use moment to format this as "MM/DD/YYYY")

<img src="https://github.com/ALayendecker/LIRI-Bot/blob/master/assets/images/concert-this.PNG"/>

#### `BamazonCustomer`

Running BamazonCustomer.js will display a list of items in a table complete with ID product name and prices.

The app will use Inquirer to prompt the user to select an item ID of the item they would like to purchase. The user will then select the amount of the item they would like to purchase.

If there is an adequate quantity in stock the purchase will process and deduct the stock number from the mysql Database where the item information is housed. It will then return a Line Item Transaction console log that will display how many of an item was purchased and the total price.+

- Artist(s):
- The song's name:
- A preview link of the song from Spotify:
- The album that the song is from:

<img src="https://github.com/ALayendecker/LIRI-Bot/blob/master/assets/images/Spotify-this-song.PNG"/>

<!-- CONTACT -->

## Contact

Role Lead Developer for LIRI Bot ALayendecker

Project Link: [https://github.com/Alayendecker/LIRI-Bot](https://github.com/Alayendecker/LIRI-Bot)

Special Thanks to - [jtsai972 - For assistance with README's Thanks!](https://github.com/jtsai972)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/Alayendecker/LIRI-Bot.svg?style=flat-square
[contributors-url]: https://github.com/Alayendecker/LIRI-Bot/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Alayendecker/LIRI-Bot.svg?style=flat-square
[forks-url]: https://github.com/Alayendecker/LIRI-Bot/network/members
[stars-shield]: https://img.shields.io/github/stars/Alayendecker/LIRI-Bot.svg?style=flat-square
[stars-url]: https://github.com/Alayendecker/LIRI-Bot/stargazers
[issues-shield]: https://img.shields.io/github/issues/Alayendecker/LIRI-Bot.svg?style=flat-square
[issues-url]: https://github.com/Alayendecker/LIRI-Bot/issues
