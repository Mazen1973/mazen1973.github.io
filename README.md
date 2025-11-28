# Personal Portfolio

A modern, responsive portfolio website built with HTML, CSS, and JavaScript.

## Setup Instructions

### 1. Configure EmailJS

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Create a service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{reply_to}}` - Sender's email
   - `{{message}}` - Message content
4. Get your Public Key, Service ID, and Template ID from the EmailJS dashboard

### 2. Update EmailJS Configuration

Open `index.html` and replace:
- `REPLACE_WITH_EMAILJS_PUBLIC_KEY` with your EmailJS public key (around line 39)

Open `assets/js/script.js` and replace:
- `REPLACE_WITH_EMAILJS_SERVICE_ID` with your EmailJS service ID (around line 177)
- `REPLACE_WITH_EMAILJS_TEMPLATE_ID` with your EmailJS template ID (around line 178)

### 3. Personalize Your Portfolio

Update the following in `index.html`:
- **Name**: Replace "Your Name" with your actual name
- **Title**: Replace "Your Title" with your job title
- **Email**: Replace "your.email@example.com" with your email
- **Phone**: Replace "+1 (234) 567-890" with your phone number
- **Location**: Replace "Your City, Your State/Province, Your Country" with your location
- **Social Links**: Update GitHub and LinkedIn URLs
- **About Section**: Customize the about text to reflect your background

### 4. Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g., `my-portfolio`)
2. Push your code:
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```
3. Enable GitHub Pages:
   - Go to your repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: main, / (root)
   - Save
4. Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Features

- Responsive design
- Contact form with EmailJS integration
- Portfolio showcase
- Blog section
- Resume/Experience section
- Modern UI with smooth animations

## Notes

- Keep all pages (Blog, Experience, etc.) even if empty - add "Coming soon" placeholders
- The contact form requires EmailJS configuration to work
- All personal information should be updated before deploying
