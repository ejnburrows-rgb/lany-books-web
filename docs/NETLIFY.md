# Netlify Deployment Guide for LANY Books

This guide walks you through moving the LANY Books website to Netlify's free tier. You do not need any coding experience to complete this.

## 1. Create a Netlify Account
1. Go to [netlify.com](https://www.netlify.com/).
2. Click **Sign up** in the top right corner.
3. Choose **Sign up with GitHub**.
4. Follow the prompts to authorize Netlify to connect to your GitHub account.

## 2. Deploy the Website
1. Once logged in to Netlify, you will be on your "Team overview" dashboard.
2. Click the **Add new site** button and select **Import an existing project**.
3. Under "Connect to Git provider", click **GitHub**. (You may need to authorize Netlify again).
4. A list of your GitHub repositories will appear. Search for and click on **lany-books-web**.
5. You will be taken to the "Site configuration" page. **Do not change any settings here.** The code we added already tells Netlify exactly what to do.
   - You should see "Build command" say `npm run build` and "Publish directory" say `dist`.
6. Scroll down and click the **Deploy lany-books-web** button.
7. Wait a couple of minutes. Netlify will show a status of "Building" and then "Published". Your site is now live on a temporary Netlify web address!

## 3. Connect Your Custom Domain (lanybooks.com)
To make your real web address point to Netlify instead of Vercel:

1. In your Netlify dashboard for this site, go to **Domain management**.
2. Click **Add custom domain**.
3. Type `lanybooks.com` and click **Verify**. Netlify will ask if you own it; confirm that you do.
4. The domain will be added, but it needs to be pointed to Netlify using DNS records at your domain registrar (where you bought the domain, e.g., GoDaddy, Namecheap).
5. Click on the domain in Netlify to see the instructions for DNS setup. You will need to add the specific CNAME and A records that Netlify provides to your domain registrar's DNS settings. (You will also need to remove the old records pointing to Vercel).
6. Netlify will automatically create a free SSL certificate (HTTPS) once the domain is successfully pointed. This may take up to 24 hours.

## 4. (Optional) Remove Vercel
Once you have confirmed that `lanybooks.com` is successfully loading from Netlify, you can log into your Vercel account and delete the old project.
