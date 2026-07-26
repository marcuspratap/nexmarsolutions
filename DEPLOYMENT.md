# Deployment Guide for nexmarsolutions.com

## Quick Start: GitHub Pages + Cloudflare

Your domain is registered with **Cloudflare**, which makes deployment straightforward.

---

## Step 1: Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Under "Build and deployment":
   - **Source**: Select `Deploy from a branch`
   - **Branch**: Select `main` → `/root` folder
3. Click **Save**

Your site will be deployed to:
```
https://marcuspratap.github.io/nexmarsolutions/
```

---

## Step 2: Point Cloudflare to GitHub Pages

### In Cloudflare Dashboard:

1. **Log in** to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Select your domain: `nexmarsolutions.com`
3. Go to **DNS** → **Records**
4. **Delete** any existing A records pointing elsewhere
5. **Add these DNS records:**

   | Type | Name | Content | TTL |
   |------|------|---------|-----|
   | A | nexmarsolutions.com | 185.199.108.153 | Auto |
   | A | nexmarsolutions.com | 185.199.109.153 | Auto |
   | A | nexmarsolutions.com | 185.199.110.153 | Auto |
   | A | nexmarsolutions.com | 185.199.111.153 | Auto |
   | AAAA | nexmarsolutions.com | 2606:50c0:8000::153 | Auto |
   | AAAA | nexmarsolutions.com | 2606:50c0:8001::153 | Auto |
   | AAAA | nexmarsolutions.com | 2606:50c0:8002::153 | Auto |
   | AAAA | nexmarsolutions.com | 2606:50c0:8003::153 | Auto |
   | CNAME | www | marcuspratap.github.io | Auto |

6. Click **Save**

---

## Step 3: Configure GitHub Pages with Custom Domain

1. Go back to your repo → **Settings** → **Pages**
2. Under "Custom domain", enter: `nexmarsolutions.com`
3. Click **Save**
4. GitHub creates a `CNAME` file automatically (will appear in your repo)
5. Wait 5-10 minutes for HTTPS certificate to auto-generate
6. Check ✅ **Enforce HTTPS** once available

---

## Step 4: Verify & Test

**Check DNS propagation:**
- Visit [whatsmydns.net](https://whatsmydns.net)
- Search for `nexmarsolutions.com`
- Wait for all servers to show GitHub's IPs (usually 2-48 hours, typically 30 mins)

**Once DNS is live:**
- `https://nexmarsolutions.com` → Your site ✓
- `https://www.nexmarsolutions.com` → Your site ✓
- `https://marcuspratap.github.io/nexmarsolutions/` → Also works

---

## Cloudflare Settings (Recommended)

After your site is live, optimize in Cloudflare:

### Performance
1. Go to **Speed** → **Optimization**
2. Enable:
   - ✅ **Auto Minify** (HTML, CSS, JS)
   - ✅ **Brotli compression**
   - ✅ **Early Hints**

### Security
1. Go to **Security** → **Overview**
2. Set **Security Level** to `Medium` or `High`
3. Enable **Always Use HTTPS** (automatic with GitHub Pages)

### Caching
1. Go to **Caching** → **Configuration**
2. Set **Browser Cache TTL** to `4 hours`
3. Set **Cache Level** to `Cache Everything`

---

## Auto-Deploy on Push

Every time you push to `main` branch, your site updates automatically:

```bash
git add .
git commit -m "Update content"
git push origin main
```

GitHub deploys within **seconds**.

---

## Monitor Deployment

**GitHub Status:**
- Repo → **Settings** → **Pages** → Shows deployment status

**Cloudflare Status:**
- Dashboard → **Overview** → Shows DNS status

---

## Timeline

| Step | Time | What Happens |
|------|------|-------------|
| Enable GitHub Pages | Immediate | Site available at github.io URL |
| Add DNS records in Cloudflare | Immediate | Records created |
| DNS propagation | 2-48 hrs (avg 30 min) | All servers updated |
| HTTPS cert generation | 5-10 mins | After GitHub Pages custom domain set |
| **Site fully live** | **~1 hour** | ✅ nexmarsolutions.com with HTTPS |

---

## Troubleshooting

**DNS not resolving?**
- Verify A/AAAA records are exactly as listed above
- Check Cloudflare nameservers are set in domain registrar
- Wait 15 mins, then check [whatsmydns.net](https://whatsmydns.net)

**HTTPS not working?**
- Ensure GitHub Pages shows ✓ Certificate provisioned in Settings
- Cloudflare may need 5-10 mins to sync

**Site shows 404?**
- Verify `CNAME` file exists in repo root
- Ensure GitHub Pages source is set to `main` branch

---

## Next Steps

1. ✅ Enable GitHub Pages (Settings → Pages)
2. ✅ Add A/AAAA records in Cloudflare DNS
3. ✅ Set custom domain in GitHub Pages
4. ✅ Enable HTTPS
5. ✅ Optimize Cloudflare settings
6. ✅ Monitor with Google PageSpeed Insights

**You're all set!** 🚀
