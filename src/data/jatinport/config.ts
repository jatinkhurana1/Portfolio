const config = {
  title: "Jatin Meena | BA English Hons & JLPT N3",
  description: {
    long: "Explore the portfolio of Jatin Meena, a BA English Hons graduate with JLPT N3 certification. Passionate about creativity, languages, and building interactive 3D experiences on the web.",
    short: "Discover the portfolio of Jatin Meena, combining design, languages, and 3D interactivity.",
  },
  keywords: [
    "Jatin",
    "Jatin Meena",
    "JatinMeena portfolio",
    "portfolio",
    "BA English Hons",
    "Japanese JLPT N3",
    "creative technologist",
    "web development",
    "interactive websites",
    "3D portfolio",
    "React",
    "Next.js",
    "Three.js",
  ],
  author: "Jatin Meena",
  email: "Jatinmeena350@gmail.com.com",   // <-- put your correct email here
  site: "https://yourdomain.com",   // <-- replace with your domain (or GitHub Pages/Netlify/Vercel link)

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://twitter.com/YOUR_HANDLE",   // <-- replace with your real link
    linkedin: "https://linkedin.com/in/contactjatinmeena",
    instagram: "https://www.instagram.com/jatinkhuraana/",
    facebook: "#", // can remove if you don’t want it
    github: "https://github.com/jatinkhurana1",
  },
};

export { config };
