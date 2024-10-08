# Lichess Activity Reader

This service was developed in Node.js to read player activities on [Lichess](https://lichess.org/). It allows access to player data and their activities on the site.

## Features

- Reads recent activities of players on Lichess.
- Real-time data processing.
- Displays statistics and summaries of activities.

## Prerequisites

Make sure you have the following tools installed on your machine:

- Node.js v14.0.0 or higher
- npm v6.0.0 or higher

## Installation

1. Clone the repository:

   `git clone https://github.com/gmahota/ChessTraning.git`

2. Navigate to the `lichess` directory:

   `cd lichess`

3. Install the project dependencies:

   `npm install`

## Configuration

1. Create a folder named `content` at the root of the project, if it doesn’t already exist:

   `mkdir content`

2. Inside the `content` folder, create a `players.json` file with player data. The format should be as follows:

   ```json
   [
       {
           "user": "AAAA",
           "name": "BBB",
           "team": "Mozambique"
       },
       {
           "user": "CCC",
           "name": "IIII",
           "team": "Mozambique"
       }
   ]
    ```

## Running the Service

- To start the service, you can use one of the following commands:

- To start the service in development mode:

`npm run dev`

To start the service in production mode:

`npm start`

## Contribution

Contributions are welcome! If you find any errors or issues in the project:

1. Create an issue detailing the error you found.
2. If you know how to fix the problem, submit a pull request with your proposed solution.
3. If you need help, feel free to open an issue asking for support or suggesting improvements.

Please submit a pull request or open an issue to discuss any changes you would like to make.

## License

This project is licensed under the [MIT License](LICENSE).

## Funding

If you'd like to support the development of this project, consider contributing through the following options:

- [Buy me a coffee](https://ko-fi.com/mahotag)
- [Patreon](https://www.patreon.com/mahotag/creators)
- [Open Collective](https://opencollective.com/guimaraes-mahota)

Your support helps us continue to improve and maintain the project. Thank you!