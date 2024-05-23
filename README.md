# Coca Cola 3D App

## Project Overview
This project is a 3D web application showcasing Coca Cola branded products using X3D (X3DOM). Users can interact with different 3D models (Coke, Fanta, Sprite) and view additional information about each product. The app is built using HTML5, CSS3, JavaScript (with jQuery and Bootstrap), AJAX, JSON, and PHP, following the MVC design pattern.

## Features
- **3D Model Interaction:** Switch between different Coca Cola product models (Coke, Fanta, Sprite) using buttons.
- **Dynamic Content Loading:** Fetch and display product information from a SQLite database using AJAX and JSON.
- **Camera and Lighting Controls:** Toggle wireframe mode and switch between different camera views.
- **Responsive Design:** Ensure compatibility across various devices using Bootstrap.

## File Structure
- `view/index.html`: Main HTML file for the application.
- `css/style.css`: Custom CSS styles.
- `controller/main.js`: JavaScript file for handling model loading and interactions.
- `model/database.php`: PHP script for fetching model data from the SQLite database.
- `model/database.db`: SQLite database containing product information.
- `assets/`: Directory containing X3D model files for Coke, Fanta, and Sprite.

## Setup Instructions
1. **Clone the Repository:**
   ```git clone https://github.com/id252/Ikenna.git```
   ```cd coca-cola-3d-app```
2. **Set Up the Server:**
 - Ensure you have a web server with PHP support (e.g., Apache) and SQLite installed.
 - Place the project files in the web server's root directory (e.g., htdocs for XAMPP).
3. **Database Setup:** The database file database.db is pre-configured with the necessary tables and data. Ensure it is located in the model directory.
4. **Create db sqlite3 file from sql file:** ```sqlite3 database.db ".read database.sql"```
5. **Check the sqlite:** ```sqlite3 database.db```
6. **Verify the contents:**
   ```.tables```
   ```SELECT * FROM models;```
7. **Access the App:** Open your web browser and navigate to `http://localhost/Ikenna/3dapp/view/index.html`.
8. **GitHub:** `https://github.com/id252/Ikenna/tree/main`

## Usage
- **Loading Models:** Click the buttons labeled "Coke", "Fanta", or "Sprite" to load the respective 3D models and display their information.
- **Camera and Lighting Controls:** Use the control panel buttons to toggle wireframe mode and switch between front, side, and top camera views.

## Development Notes
- **MVC Pattern:** The project follows the MVC design pattern. The HTML files represent the View, the JavaScript handles the Controller logic, and PHP scripts interact with the Model (SQLite database).
- **AJAX and JSON:** The application uses AJAX calls to fetch JSON data from the backend (PHP scripts), ensuring a smooth and dynamic user experience.

## License
This project is licensed under the MIT License.

## Acknowledgements
- Bootstrap `https://getbootstrap.com/`
- jQuery `https://jquery.com/`
- X3DOM `https://www.x3dom.org/`
- SQLite `https://www.sqlite.org/`

## Contact
For any inquiries or issues, please contact `id252@sussex.ac.uk`.
