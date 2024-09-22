const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (like CSS)
app.use(express.static('public'));

// Middleware for parsing JSON
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Profile route
app.get('/profile', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Profile Page</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <h1>My Profile</h1>
            <h2>Name: Roji</h2>
            <p>About me: I am a second-year student studying Software Engineering at Deakin University. I am passionate about technology and eager to learn more.</p>
            <h3>Skills</h3>
            <ul>
                <li>JavaScript</li>
                <li>HTML/CSS</li>
                <li>Node.js</li>
                <li>Express</li>
            </ul>
            <h3>Education</h3>
            <p>Deakin University, expected graduation in 2026.</p>
            <h3>Contact</h3>
            <p>Email: <a href="mailto:roji.13804@gmail.com">roji.13804@gmail.com</a></p>
            <h3>Hobbies</h3>
            <p>I enjoy crocheting in my free time.</p>
        </body>
        </html>
    `);
});

// Export the app for testing
module.exports = app;

// Start the server only if the script is run directly
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}
