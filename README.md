# Three.js Solar System Visualization

This project is an interactive 3D solar system visualization built using Three.js. It features a realistic representation of our solar system with planets, stars, and interactive controls.

[Live Demo](https://solar-system-threejs-beta.vercel.app)

## Features

- Interactive 3D solar system visualization
- Realistic planet textures and orbits
- Star background
- Camera controls for exploring the solar system
- Responsive design

## Prerequisites

Before running this project, make sure you have the following installed:
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A local development server (you can use any of the following):
  - Python's built-in HTTP server
  - Node.js with `http-server`
  - VS Code's Live Server extension

## Installation

1. Clone this repository:
```bash
git clone https://github.com/tirth12345/Solar-System-Threejs.git
cd Solar-System-Threejs
```

2. If you're using Node.js, you can install a simple HTTP server:
```bash
npm install -g http-server
```

## Running the Project

### Method 1: Using Node.js http-server
```bash
http-server
```

### Method 2: Using VS Code Live Server
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

After starting the server, open your web browser and navigate to:
- `http://localhost:8000` (for Python or http-server)
- The URL provided by Live Server (usually `http://127.0.0.1:5500`)

## Project Structure

```
├── index.html          # Main HTML file
├── index.js           # Main JavaScript file with Three.js implementation
├── solar.html         # Solar system specific HTML
├── StarBackground.js  # Star background implementation
├── styles.css         # CSS styles {for homepage Only}
├── Images/           # Image assets
└── textures/         # 3D textures for planets
```

## Controls

- **Left Mouse Button + Drag**: Rotate the camera
- **Right Mouse Button + Drag**: Pan the camera
- **Mouse Wheel**: Zoom in/out
- **Space**: Toggle auto-rotation

## Technologies Used

- Three.js
- HTML5
- CSS3
- JavaScript

## Contributing

Feel free to submit issues and enhancement requests! You can contribute by:
1. Forking the repository
2. Creating your feature branch (`git checkout -b feature/AmazingFeature`)
3. Committing your changes (`git commit -m 'Add some AmazingFeature'`)
4. Pushing to the branch (`git push origin feature/AmazingFeature`)
5. Opening a Pull Request

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Three.js community for the amazing 3D library
- NASA for planet textures and data
- [Vercel](https://vercel.com) for hosting the live demo

## Author

- Tirth Chokshi - [GitHub](https://github.com/tirth12345)