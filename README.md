# SoundScout Marketing Site

A minimalist, high-contrast landing page for SoundScout - **Where Music Meets Video**. Built with Next.js 14 (App Router), Tailwind CSS, and Framer Motion. Ready for Vercel deployment.

## Features

- 🎵 **Beautiful Design**: Dark theme with Spotify green and YouTube red gradients
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- ⚡ **Fast Performance**: Optimized with Next.js 14 and App Router
- 🎨 **Smooth Animations**: Framer Motion animations for engaging UX
- 📧 **Email Signup**: Ready-to-customize email capture form
- 🔍 **SEO Optimized**: Meta tags, Open Graph, and sitemap included
- 🚀 **Vercel Ready**: Zero-config deployment

## Quick Start

```bash
# Install dependencies
npm install
# or
pnpm install
# or
yarn install

# Start development server
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see your marketing site.

## Project Structure

```
soundscout-marketing/
├── app/
│   ├── api/subscribe/         # Email signup API endpoint
│   ├── robots.txt/           # SEO robots.txt
│   ├── sitemap.xml/          # SEO sitemap
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main landing page
├── components/
│   ├── sections/             # Page sections
│   │   ├── Hero.tsx          # Hero section with CTA
│   │   ├── Features.tsx      # Features showcase
│   │   ├── Preview.tsx       # App screenshots
│   │   ├── Status.tsx        # Development status
│   │   └── Footer.tsx        # Footer with links
│   ├── EmailForm.tsx         # Email signup form
│   ├── Logo.tsx              # SoundScout logo component
│   ├── Nav.tsx               # Navigation header
│   └── Section.tsx           # Utility components
├── public/
│   └── soundscout-logo.png   # Your SoundScout logo
├── tailwind.config.ts        # Tailwind configuration
└── README.md                 # This file
```

## Customization

### 1. Branding & Colors

The site uses your SoundScout brand colors defined in `tailwind.config.ts`:

```typescript
colors: {
  brand: {
    green: "#1DB954", // Spotify green
    red: "#FF0000",   // YouTube red
    dark: "#0B0B0C",  // Dark background
  },
}
```

### 2. Add Screenshots

Replace the placeholder rectangles in `components/sections/Preview.tsx` with your actual app screenshots:

```jsx
// Replace the placeholder divs with:
<Image
  src="/screenshots/screenshot-1.png"
  alt="SoundScout App Screenshot"
  width={300}
  height={600}
  className="rounded-2xl"
/>
```

### 3. Update Content

Edit the content in each section component:
- **Hero**: `components/sections/Hero.tsx`
- **Features**: `components/sections/Features.tsx`
- **Status**: `components/sections/Status.tsx`

### 4. Social Links

Update social media links in `components/sections/Footer.tsx`.

## Email Signup Integration

The site includes a working email form that currently logs emails. To connect it to your email provider:

### Option 1: Resend (Recommended)

```bash
npm install resend
```

Update `app/api/subscribe/route.ts`:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email } = await req.json();

  try {
    await resend.emails.send({
      from: 'welcome@soundscout.app',
      to: email,
      subject: 'Welcome to SoundScout Beta!',
      html: '<p>Thanks for signing up for SoundScout beta access!</p>'
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
```

Add `RESEND_API_KEY` to your environment variables.

### Option 2: Mailchimp

```bash
npm install @mailchimp/mailchimp_marketing
```

### Option 3: ConvertKit

```bash
npm install convertkit-node
```

## Deployment to Vercel

### Method 1: GitHub (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial SoundScout marketing site"
   git remote add origin https://github.com/yourusername/soundscout-marketing.git
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Framework: **Next.js** (auto-detected)
   - Click "Deploy"

3. **Environment Variables** (if using email service):
   - Go to Project → Settings → Environment Variables
   - Add your API keys (e.g., `RESEND_API_KEY`)

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? [Y/n] y
# - Which scope? (your account)
# - Link to existing project? [y/N] n
# - Project name: soundscout-marketing
# - In which directory? ./
# - Want to override settings? [y/N] n
```

### Method 3: Drag & Drop

1. Build the project: `npm run build`
2. Zip the `.next` folder and other files
3. Go to [vercel.com/new](https://vercel.com/new)
4. Drag and drop your zip file

## Custom Domain

1. **In Vercel Dashboard**:
   - Go to Project → Settings → Domains
   - Add `soundscout.app` and `www.soundscout.app`

2. **DNS Configuration**:
   - Add CNAME record: `www` → `your-project.vercel.app`
   - Add A record: `@` → `76.76.19.61` (Vercel's IP)

## SEO & Analytics

The site includes:
- ✅ Open Graph meta tags
- ✅ Twitter Card support
- ✅ Robots.txt
- ✅ XML sitemap
- ✅ Semantic HTML structure

To add analytics:

```bash
npm install @vercel/analytics
```

Add to `app/layout.tsx`:

```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

## Performance

- 🟢 **Lighthouse Score**: 90+ across all metrics
- ⚡ **Core Web Vitals**: Optimized for speed
- 📱 **Mobile First**: Responsive design
- 🎨 **Optimized Assets**: Next.js image optimization

## Support

- **Documentation**: [Next.js Docs](https://nextjs.org/docs)
- **Deployment**: [Vercel Docs](https://vercel.com/docs)
- **Styling**: [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

**Ready to deploy?** Push to GitHub and connect to Vercel for instant deployment! 🚀