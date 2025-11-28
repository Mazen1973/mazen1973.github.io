# Deploy Your Portfolio to GitHub Pages

## Step 1: Create GitHub Repository
1. Go to https://github.com
2. Click "+" → "New repository"
3. Name: `portfolio` (or any name you want)
4. Make it **Public**
5. **Don't** check "Add a README"
6. Click "Create repository"

## Step 2: Push Your Code

After creating the repository, run these commands in your terminal:

```bash
# Make sure you're in the Portfolio directory
cd C:\Users\mazen\OneDrive\Documents\Code\Portfolio

# Rename branch to main (if needed)
git branch -M main

# Add your GitHub repository (replace YOUR_USERNAME and YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push your code
git push -u origin main
```

**Example:**
If your username is `mazen` and repo name is `portfolio`:
```bash
git remote add origin https://github.com/mazen/portfolio.git
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - **Deploy from a branch**
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Click **Save**
6. Wait 1-3 minutes

## Step 4: Access Your Live Site

Your portfolio will be live at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

**Example:**
If your username is `mazen` and repo is `portfolio`:
```
https://mazen.github.io/portfolio/
```

## Troubleshooting

- If you get authentication errors, you may need to set up a Personal Access Token
- If the site doesn't load, wait a few more minutes and check the Pages settings
- Make sure your repository is set to **Public** (not Private)

