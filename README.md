<p align="center">
  <img src="assets/sky-pulse-banner.png" alt="Sky Pulse Banner" width="900"/>
</p>


# 🌤️ Sky Pulse — Modern Weather Forecast Web App

Sky Pulse is a stylish and intuitive weather application built using **Node.js**, **Express**, **Axios**, and **EJS**.  
It allows users to search real-time weather conditions for any city worldwide with a beautiful UI and smooth animations.

---

## ✨ Features

- 🔍 Search weather for any city worldwide  
- 🌡️ Live temperature, humidity, and condition updates  
- 🎨 Clean and modern UI design
- 🌙 Light / Dark theme toggle  
- ☁️ Animated background visuals  
- 🚀 Fast & lightweight performance  
- 🔐 Secure environment variables using `.env`

---

## 🛠️ Tech Stack

| Technology | Usage |
|-----------|--------|
| **Node.js** | Backend runtime |
| **Express.js** | Web server framework |
| **Axios** | API requests to weather server |
| **EJS** | Template rendering for UI |
| **CSS** | Styling (fully custom, no framework) |
| **dotenv** | Environment variable management |

---
## 🖼️ Preview

| Light Mode | Dark Mode |
|-----------|-----------|
| ![Light UI](images/screenshot-light.png) | ![Dark UI](images/screenshot-dark.png) |

---
## 📦 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Get WeatherAPI Key
Go to: https://www.weatherapi.com/  
Create an account → Get your API key → Replace `YOUR_API_KEY` in your `app.js`.

### 4. Run the App
```bash
node app.js
```
Visit: **http://localhost:3000**

---

## 🗂️ Project Structure

```
project-folder/
│
├─ public/ (optional assets)
├─ views/
│  ├─ index.ejs
│  └─ result.ejs
│
├─ app.js
└─ package.json
```

---

## 📝 License
This project is open-source and free to use.

---

## 💙 Made With Love
If you like this project, give it a ⭐ on GitHub 😄