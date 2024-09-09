# Log Analysis Tool

## Description
This Log Analysis Tool is a web-based application designed to parse and visualize log file data. It provides a quick and intuitive way to understand log patterns, error distributions, and identify the most frequent issues in your system logs.

## Features
- Parses log files and categorizes entries into ERROR, WARNING, and INFO levels
- Displays a summary of total lines analyzed and counts for each log level
- Visualizes log level distribution using a doughnut chart
- Shows top 5 most frequent errors using a bar chart
- Responsive web design for easy viewing on different devices

## Technologies Used
- Node.js
- Express.js
- EJS (Embedded JavaScript templating)
- Chart.js
- HTML/CSS

## Installation

1. Clone the repository:

```git clone https://github.com/azizhmdn/LogAnalysisTool```

2. Navigate to the project directory:
```cd LogAnalysisTool```

4. Install dependencies:
```npm install express ejs```

6. Create a `logs` directory in the project root and add your log file named `sample.log`.

## Usage

1. Start the server:
node app.js

3. Open a web browser and go to `http://localhost:3000`

4. The application will analyze the `sample.log` file in the `logs` directory and display the results.

## Project Structure
- `app.js`: Main application file (Express server setup)
- `logParser.js`: Contains the log parsing logic
- `views/index.ejs`: EJS template for the web interface
- `logs/sample.log`: Sample log file (you should replace this with your actual log file)

## Customization
- To analyze a different log file, replace `sample.log` in the `logs` directory.
- Modify `logParser.js` to accommodate different log formats if needed.
