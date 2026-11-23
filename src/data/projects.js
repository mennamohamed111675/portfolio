const projects = [
  {
    id: 1,
    title: "Smart School",
    year: "2026",
    role: "Full-Stack",
    description:
      "Graduation project — an AI-powered school platform with role-based dashboards, face-recognition attendance, online exams, and real-time reports. Awarded an A grade at Helwan University.",
    highlights: [
      "Admin, teacher, student & parent dashboards",
      "Face-recognition attendance",
      "AI chatbot and live analytics",
    ],
    tech: ["React", "Django", "FastAPI"],
    github: "https://github.com/mennamohamed111675/smart-school-frontend",
    live: "https://smart-school-frontend-wine.vercel.app",
    demo: [
      { role: "Admin", username: "admin", email: "admin@school.com", password: "admin123" },
      { role: "Teacher", username: "teacher1", email: "teacher1@school.com", password: "teacher123" },
      { role: "Student", username: "student1", email: "student1@school.com", password: "student123" },
      { role: "Parent", username: "parent1", email: "parent1@school.com", password: "parent123" },
    ],
    theme: "school",
    featured: false,
  },
  {
    id: 2,
    title: "Tilal Almustaqbal",
    year: "2026",
    role: "Full-Stack · Client",
    description:
      "A complete client delivery for a Dubai real-estate agency — I built the full product, not just the UI. Bilingual EN/AR, dark/light theme, services, reviews, and a live inquiry flow. Now in production.",
    highlights: [
      "End-to-end build — front and back",
      "English & Arabic + theme toggle",
      "Shipped live for the client",
    ],
    tech: ["Next.js", "React", "Tailwind"],
    github: "#",
    live: "https://tilalalmustaqbal.com/en",
    theme: "telal",
    featured: true,
  },
  {
    id: 3,
    title: "FreshCart",
    year: "2026",
    role: "Front-End",
    description:
      "A React storefront on the Route e-commerce API — catalog with search and filters, account auth, cart, wishlist, and a full checkout flow.",
    highlights: [
      "Search, category, brand & price filters",
      "Cart, wishlist & checkout",
      "Token auth + protected routes",
    ],
    tech: ["React", "Vite", "REST API"],
    github: "#",
    live: "https://ecommerce-project-ten-teal.vercel.app/",
    theme: "shop",
    featured: false,
  },
  {
    id: 4,
    title: "Cairo Bags",
    year: "2026",
    role: "Front-End · Client",
    description:
      "A complete client storefront for a bag house — responsive shopping screens in React, reusable components, and a clean structure prepared for a future backend.",
    highlights: [
      "Responsive, interactive shopping UI",
      "Reusable components and clean structure",
      "Frontend ready for backend integration",
    ],
    tech: ["React", "JavaScript", "Tailwind"],
    github: "#",
    live: "https://cairo-bags.vercel.app/",
    theme: "bags",
    featured: false,
  },
];

export default projects;
