
# 🛩 LIIMA - Aerodrome METAR Finder

**Version 1.0.0**

**How to use**

You type in a four letter ICAO code (eg. ELAX for LAX International Airport or EGLL for Heathrow International Airport) in the search bar. An airport ICAO code is a unique identifier, used in aviation, for every airport in the world. You can find airport ICAO codes [here](https://airportcodes.io/en/). 

**What it does**

The purpose for this project is to find METARs (Meteorological Terminal Air Report) for the corresponding aerodrome/airport and return a quick breakdown of the weather conditions for that said aerodrome.

**Who is this made for**
This application is intended to be used by people in aviation.

**Why I made this** 

The most frustrating part when I was in flight training was, arriving at the aerodrome only to find the conditions were not suitable to fly in at my training level. So in order to avoid this, I would have to use my local meteorological information site only to find it really laborious to use and on top of that, it didn't provide me with one piece of information I truly needed which was the flight category. 

The flight category is what decided whether I was allowed to fly or not on that day that's why it was essential that I had that piece of information. So I decided to solve that problem and streamline it to give you the essential info found commonly on METARs with this application I made. 




## Tech Stack

**Client:** React, Axios, TailwindCSS



## Acknowledgements

 - [React Icons](https://react-icons.github.io/react-icons)
 - [Tailwind CSS](https://tailwindcss.com/)
 - [React Fast Marquee](https://www.npmjs.com/package/react-fast-marquee)
 - [Pexel Images](https://www.pexels.com/)
 - [Google Fonts](https://fonts.google.com/)


## Authors

- [@samukelolukhele](https://www.github.com/samukelolukhele)


## Requirements
 - [NodeJS](https://nodejs.org/en/download/)
## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm i axios react-icons react-fast-marquee 
```
Install tailwind

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

Start the server

```bash
  npm run dev
```


## API Reference


#### Get item

```http
  GET https://api.checkwx.com/metar/${icao}/decoded?x-api-key=${api_key}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `icao`      | `string` | **Required**. Id of item to fetch |
| `api_key` | `string` | **Required**. Your API key |




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_API_KEY`


## License

[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)
 

