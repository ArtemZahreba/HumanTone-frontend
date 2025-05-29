# Huntly Frontend

Huntly is a lightweight web interface built to interact with the HumanTone backend API. It allows users to submit text for rewriting in a more natural, human-like style. This frontend is a key part of the HumanTone project.

## 🔗 Live Demo

🌐 [https://huntly.infy.uk](https://huntly.infy.uk)

## 🚀 Tech Stack

- **HTML5** & **JavaScript**
- **Tailwind CSS** for styling
- **Remix Icons** for iconography
- Hosted on: **InfinityFree**

## 🎯 Features

- Textarea with 500-character limit
- Live character counter
- Humanize button to process input via backend
- Copy button to return rewritten result to input
- Result display area for user feedback
- Responsive and clean UI

## 🔌 Backend Integration

The app sends a POST request to backend:

```

[https://github.com/ArtemZahreba/HumanTone-backend](https://github.com/ArtemZahreba/HumanTone-backend)

```

Make sure CORS is correctly set up on the backend to allow communication from the frontend domain.

## 📁 Project Structure

```

/assets
/js
└── main.js         # Handles input, button actions, and API calls
index.html              # Main HTML structure and layout
tailwind.config         # Configured inline in HTML via CDN

```

## ⚠️ Notes

- The site may experience instability due to free-tier hosting on InfinityFree.
- Always test integration after deploying updates.

