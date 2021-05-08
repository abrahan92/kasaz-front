# Instructions for KASAZ Code Challenge

## Abrahan Mendoza

The purpose of this document is to describe how to run the React front app based in the requirements located in the README.md file.

### Instructions 📄

#### Requirements ⚙️

1. ```Unix based OS```

#### Steps 🌀

1. Run ```git clone https://github.com/abrahan92/kasaz-front.git``` to get the project locally.

2. Run ```cd kasaz-front``` to go on the project root.

3. Check your ip on your terminal with `ifconfig` and add http url to the `src/config.js` file on API_URL.

For my case the example is `export const API_URL = 'http://192.168.1.143:3030/api/v1';`

#### Run with DOCKER 🐳

1. Run ```docker-compose up``` to create the image and run the container.
