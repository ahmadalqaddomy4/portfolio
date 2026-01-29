# Ahmad Al-Qaddomy - Portfolio Website

A modern, premium portfolio website for Ahmad Al-Qaddomy, content creator, marketer, and entrepreneur from Jordan.

🔗 **Live Site**: [Add your Render URL here after deployment]

## 🎨 Features

- **Modern Design**: Premium UI with orange (#F57C1F) brand color
- **Instagram Integration**: Live Instagram reel embeds
- **Brand Showcase**: 14+ brand logos with interactive hover effects
- **Fully Responsive**: Works on all devices
- **Fast & Lightweight**: Pure HTML/CSS/JavaScript

## 🚀 Quick Start

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/portfolio-static.git
   cd portfolio-static
   ```

2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the server:**
   ```bash
   python server.py
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5000`

## 📦 Project Structure

```
portfolio-static/
├── index.html          # Main HTML file
├── server.py           # Flask server
├── requirements.txt    # Python dependencies
├── css/
│   └── styles.css     # Stylesheet
├── js/
│   ├── content.js     # Portfolio content data
│   └── main.js        # Main JavaScript logic
└── assets/
    ├── Profile.jpg    # Profile image
    └── brands/        # Brand logos (14 images)
```

## 🌐 Deploy to Render

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-static.git
   git push -u origin main
   ```

2. **Deploy on Render:**
   - Go to [render.com](https://render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Configure settings:
     - **Build Command:** `pip install -r requirements.txt`
     - **Start Command:** `gunicorn server:app`
     - **Environment:** Python 3
   - Click "Create Web Service"

3. **Done!** Your site will be live at `https://your-app-name.onrender.com`

## 🎯 Sections

- **Hero**: Introduction with profile image
- **About**: Personal background and highlights
- **Services**: Content creation, marketing, event organizing, entrepreneurship
- **Featured Work**: Instagram reel embeds
- **Brands**: Companies worked with (interactive logo grid)
- **Experience**: Career timeline
- **Skills**: Technical and soft skills
- **References**: Professional recommendations
- **Contact**: Email and social media links

## 🔧 Customization

### Update Instagram Reels

Edit `js/content.js` and update the `reels.items` array:

```javascript
"reels": {
  "items": [
    { "url": "https://www.instagram.com/reel/YOUR_REEL_ID/" },
    // Add more reels...
  ]
}
```

### Update Brand Logos

1. Add logo images to `assets/brands/`
2. Update `js/main.js` to adjust the logo count

### Change Colors

Edit CSS variables in `css/styles.css`:

```css
:root {
  --primary: #F57C1F;  /* Your brand color */
  /* ... */
}
```

## 📧 Contact

- **Email**: ahmadalqaddomy4@gmail.com
- **Instagram**: [@qaddomz](https://www.instagram.com/qaddomz)
- **LinkedIn**: [Ahmad Al-Qaddomy](https://www.linkedin.com/in/ahmad-al-qaddomy-a73a75338/)

## 📄 License

© 2025 Ahmad Al-Qaddomy. All rights reserved.
