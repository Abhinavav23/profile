# My Resume Portfolio

A personal portfolio website hosted on GitHub Pages with a functional contact form.

## Features

- ✅ Pure static site (HTML/CSS/JS)
- ✅ Responsive design
- ✅ Contact form with EmailJS integration
- ✅ GitHub Pages ready

## Security

The EmailJS credentials are visible in the code, which is **normal and expected** for EmailJS. Security is provided through:

1. **Domain Restrictions** - Configure in EmailJS dashboard to only allow requests from your GitHub Pages domain
2. **Rate Limiting** - EmailJS automatically limits requests
3. **Email Validation** - Built-in validation prevents spam

### How to Enable Domain Restrictions:

1. Go to https://dashboard.emailjs.com/
2. Navigate to **Account** → **Security**
3. Under "Allowed Domains", add:
   - `yourusername.github.io`
   - `www.yourusername.github.io` (if using custom domain)
4. Save changes

This ensures only your GitHub Pages site can use the form.

## Deployment

1. Push code to GitHub
2. Go to Repository Settings → Pages
3. Select your branch (usually `main` or `gh-pages`)
4. Your site will be live at `https://yourusername.github.io/MyResume/`

## Contact Form Setup

The contact form uses EmailJS. Make sure your EmailJS template uses these variables:
- `{{name}}` - Sender's name
- `{{email}}` - Sender's email  
- `{{message}}` - Message content

## Notes

- This is a **pure static site** - no backend required
- Works perfectly on GitHub Pages
- EmailJS handles all email sending server-side
- Credentials being visible is standard for EmailJS (protected by domain restrictions)
