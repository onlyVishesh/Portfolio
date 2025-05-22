# Project Setup & Running Instructions

This guide will help you set up, configure, and run the onlyVishesh Portfolio project locally, as well as provide troubleshooting and deployment tips.

---

## 🏁 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/onlyVishesh/Portfolio.git
cd Portfolio
```

### 2. Install Dependencies

```bash
npm install
```

---

## ⚙️ Environment Variables

1. Copy `.env.example` to `.env.local`:

   ```bash
   cp .env.example .env.local
   ```

2. Fill in the following variables in `.env.local`:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` – Your Sanity project ID
   - `NEXT_PUBLIC_SANITY_DATASET` – Your Sanity dataset (e.g., production)
   - `NEXT_PUBLIC_SANITY_API_VERSION` – API version (e.g., 2023-01-01)
   - `NEXT_PUBLIC_SANITY_ACCESS_TOKEN` – (Optional) Sanity API token for write access

### How to Get Sanity Variables

- Create a new Sanity project:

  ```bash
  npm create sanity@latest -- --template clean --create-project "onlyVishesh" --dataset production
  ```

- Find your `projectId` in `sanity.config.ts`.
- Generate an access token at [sanity.io/manage](https://sanity.io/manage) under your project’s API section.
- If you do not use an access token, comment out the related line in `lib/env.api.ts` to avoid errors.

---

## 🖥️ Running the Project

### 1. Start the Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

### 2. Access Sanity Studio

Visit [http://localhost:3000/studio](http://localhost:3000/studio) to manage your content.

---

## 🚀 Deployment

- The project is ready for deployment on [Vercel](https://vercel.com/) or any platform supporting Next.js.
- Set the same environment variables in your deployment dashboard.
- For custom domains, configure DNS as per your provider’s instructions.

---

## 🛠️ Troubleshooting

- **Build errors:** Double-check your environment variables and Sanity project setup.
- **Content not showing:** Ensure your Sanity dataset is public or your access token is correct.
- **Other issues:** Open an issue in the repository for support.

---

## 📚 Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Deployment Guide](https://vercel.com/docs)
- [Tutorial: Build a Portfolio with Sanity & Next.js](https://www.freecodecamp.org/news/how-to-build-a-portfolio-site-with-sanity-and-nextjs)

---

Happy coding! 🎉
