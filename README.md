

# 🌐 My Portfolio

A modern, responsive personal portfolio built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui.

It showcases my projects, blogs, resume, and professional background — optimized for performance, SEO, and social sharing.

## 🚀 Features

  * ⚡ **Next.js 14 (App Router):** Blazing fast, server-side rendering (SSR) & static generation (ISR)
  * 🎨 **Tailwind CSS + shadcn/ui:** Clean, minimal, and fully responsive UI
  * 🔐 **NextAuth.js:** Secure authentication (if included)
  * 🧠 **TypeScript:** Type-safe, maintainable codebase
  * 📝 **Blog System:** Create, edit, and view blogs
  * 💼 **Project Showcase:** Add and display professional projects
  * 🧾 **Resume Builder:** Dynamic resume generation
  * 🌍 **SEO Optimized:** Meta tags and Open Graph (OG) image support
  * 🧩 **Reusable Components:** Sidebar, navigation, forms, and modals

-----

## 🧱 Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | Next.js 14 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS, shadcn/ui |
| **Icons** | Lucide Icons |
| **Forms** | React Hook Form + Zod |
| **Auth** | NextAuth.js |
| **Deployment** | Vercel |
| **API** | Custom Backend (Express + MongoDB) (if used) |

-----

## 📁 Folder Structure

```plaintext
.
├── app/
│   ├── (dashboard)/dashboard/
│   │   ├── blog/
│   │   ├── project/
│   │   ├── resume/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── (public)/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── login/
│   │   ├── projects/
│   │   ├── register/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── actions/
│   ├── api/
│   ├── helpers/
│   ├── types/
│   ├── favicon.ico
│   ├── globals.css
│   └── layout.tsx
├── components/
├── hooks/
├── lib/
├── public/
├── .gitignore
├── README.md
├── bun.lock
├── components.json
└── ...
```

-----

## ⚙️ Installation & Setup

1.  **Clone the Repository**

    ```bash
    git clone https://github.com/Sohag-Ahmed056/MyPortfolio-Frontend.git
    cd MyPortfolio-Frontend
    ```

2.  **Install Dependencies**

    ```bash
    npm install
    ```

3.  **Setup Environment Variables**

    Create a `.env.local` file in the root directory:

    ```.env
    NEXTAUTH_SECRET=your_nextauth_secret
    NEXT_PUBLIC_API_URL=https://your-backend-api.vercel.app
    EMAIL_USER=your_email@gmail.com
    EMAIL_PASS=your_email_password
    ```

4.  **Run the Development Server**

    ```bash
    npm run dev
    ```

The app will be running on `http://localhost:3000`
