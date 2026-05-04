# 🎓 SkillSphere | Premium E-Learning Platform

**SkillSphere** is a high-performance, minimalist online learning platform built for modern students. It features a sleek "Total Dark" user interface, dynamic course searching, and a seamless authentication flow.

### 🔗 Live Deployment
**Live URL:** https://skill-sphere-online-learning-platfo-seven.vercel.app/


---

## ✨ Key Features

*   **Premium Minimalist Design:** A sophisticated "Total Dark" aesthetic with clean borders and high-end UI components.
*   **Dynamic Course Library:** Users can browse and search through a diverse library of courses with real-time filtering.
*   **Optimized Performance:** Built with Next.js App Router and Server-Side Rendering (SSR) for lightning-fast data fetching.
*   **Secure Authentication:** Powered by **Better-Auth**, supporting secure Google and Email-based sign-ins.
*   **Total Responsiveness:** Tailored experience across Mobile, Tablet, and Desktop. Essential UI elements like the Avatar and Logout remain accessible on all devices.
*   **Instant Feedback:** Integrated **React-Toastify** for sleek, non-intrusive user notifications.

---

## 🛠️ Tech Stack

*   **Framework:** Next.js (App Router)
*   **Language:** JavaScript (JSX)
*   **Styling:** Tailwind CSS & DaisyUI
*   **Components:** HeroUI (formerly NextUI) & Framer Motion
*   **Database:** MongoDB
*   **Authentication:** Better-Auth
*   **Icons:** Lucide React

---

## 📦 Core Dependencies

The project utilizes the following key npm packages:

*   `@heroui/react`
*   `better-auth`
*   `react-toastify`
*   `framer-motion`
*   `lucide-react`
*   `mongodb`

---

## ⚙️ Environment Configuration

To run this project locally, create a `.env.local` file and configure the following variables:

```env
DATABASE_URL=your_mongodb_uri
BETTER_AUTH_SECRET=your_auth_secret
NEXT_PUBLIC_APP_URL=http://localhost:3000