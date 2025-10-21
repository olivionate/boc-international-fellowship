# Deployment Guide

This guide helps you deploy the BCIF website to various hosting platforms and resolve 404 errors on page refresh.

## The Problem

Single Page Applications (SPAs) like this React app use client-side routing. When you refresh a page like `/about` or `/ministries/global-ministers-assembly`, the server looks for a physical file at that path. If it doesn't find one, it returns a 404 error.

## Solutions by Hosting Platform

### Apache Servers (Most Common)

The `.htaccess` file in the `public` folder handles this automatically. Ensure:

1. Your Apache server has `mod_rewrite` enabled
2. The `.htaccess` file is uploaded to your server's public directory
3. Your Apache configuration allows `.htaccess` overrides (`AllowOverride All`)

**If .htaccess doesn't work**, add this to your Apache virtual host configuration:

```apache
<VirtualHost *:80>
    ServerName yourdomain.com
    DocumentRoot /path/to/your/site
    
    <Directory /path/to/your/site>
        RewriteEngine On
        RewriteBase /
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
    </Directory>
</VirtualHost>
```

### Nginx Servers

Add this to your nginx server block configuration:

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/your/site;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### IIS (Windows Servers)

The `web.config` file in the `public` folder handles this automatically. Ensure:

1. URL Rewrite module is installed on your IIS server
2. The `web.config` file is in your site's root directory

### Netlify

The `_redirects` file in the `public` folder handles this automatically.

Alternatively, you can use `netlify.toml`:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Vercel

The `vercel.json` file in the root handles this automatically.

### cPanel / Shared Hosting

Most shared hosting uses Apache, so the `.htaccess` file should work. Steps:

1. Build your app: `npm run build`
2. Upload all files from the `dist` folder to your `public_html` directory
3. Ensure `.htaccess` is uploaded (it may be hidden by default)
4. Test all routes

### Custom Domain on Other Platforms

#### GitHub Pages

```json
// Add to package.json
{
  "homepage": "https://yourdomain.com"
}
```

Then create a `404.html` file that redirects to `index.html`.

#### Firebase Hosting

```json
// firebase.json
{
  "hosting": {
    "public": "dist",
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

## Testing

After deploying, test these URLs directly in your browser:

- `https://yourdomain.com/about`
- `https://yourdomain.com/ministries`
- `https://yourdomain.com/ministries/global-ministers-assembly`
- `https://yourdomain.com/sermons`

Each should load correctly without 404 errors.

## Still Having Issues?

1. **Check server logs** - They'll show what's actually happening
2. **Verify file upload** - Ensure `.htaccess` or `web.config` was uploaded
3. **Check permissions** - Server files need proper read permissions
4. **Contact your host** - Ask them to enable URL rewriting/mod_rewrite
5. **Test locally** - Run `npm run build && npm run preview` to test the production build

## Need More Help?

Contact your hosting provider and mention you need:
- "URL rewriting enabled for a React SPA"
- "All routes to serve index.html"
- "mod_rewrite enabled" (for Apache)

They should know how to configure this for your specific server setup.
