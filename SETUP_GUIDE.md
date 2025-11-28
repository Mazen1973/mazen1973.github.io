# Portfolio Setup Guide

## ✅ Completed Steps

1. ✅ Cloned Ammar's portfolio repository
2. ✅ Copied all files to your workspace (excluding .git)
3. ✅ Personalized content with placeholders:
   - Name, title, email, phone, location
   - Social media links (GitHub, LinkedIn)
   - About section
4. ✅ Configured EmailJS integration with placeholders
5. ✅ Initialized git repository
6. ✅ Created initial commit

## 🔧 Next Steps

### 1. Personalize Your Information

Open `index.html` and search for these placeholders to replace:

- **"Your Name"** → Your actual name
- **"Your Title"** → Your job title (e.g., "Software Engineer", "Web Developer")
- **"your.email@example.com"** → Your email address
- **"+1 (234) 567-890"** → Your phone number
- **"Your City, Your State/Province, Your Country"** → Your location
- **"https://github.com/your-username"** → Your GitHub profile URL
- **"https://www.linkedin.com/in/your-profile/"** → Your LinkedIn profile URL
- **About section text** → Customize to reflect your background

### 2. Set Up EmailJS

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Create an Email Service (Gmail, Outlook, etc.)
3. Create an Email Template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{reply_to}}` - Sender's email  
   - `{{message}}` - Message content
4. Get your credentials from the dashboard:
   - Public Key
   - Service ID
   - Template ID

5. Update the code:
   - In `index.html` (around line 39): Replace `REPLACE_WITH_EMAILJS_PUBLIC_KEY`
   - In `assets/js/script.js` (around line 177): Replace `REPLACE_WITH_EMAILJS_SERVICE_ID`
   - In `assets/js/script.js` (around line 178): Replace `REPLACE_WITH_EMAILJS_TEMPLATE_ID`

### 3. Create GitHub Repository

1. Go to GitHub and create a new repository (e.g., `my-portfolio`)
2. **Do NOT** initialize with README or .gitignore (we already have these)

### 4. Connect and Push to GitHub

Run these commands in your terminal (from the Portfolio directory):

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

### 5. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - **Deploy from a branch**
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. Click **Save**
5. Wait 1-3 minutes for GitHub to build your site

Your site will be live at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

### 6. Test Your Site

- ✅ Open your live URL
- ✅ Check all navigation links work
- ✅ Test the contact form (send yourself a test email)
- ✅ Verify you received the email (check spam folder too)

## 📝 Notes

- All pages (Blog, Resume/Experience, Portfolio) are kept with content
- The contact form requires EmailJS to be configured before it will work
- Make sure to replace all placeholder text before deploying
- Your profile image is at `assets/images/profile.jpg` - replace it with your own photo

## 🎉 You're Done!

Once you've completed these steps, your portfolio will be live on the internet!

