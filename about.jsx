import React from "react";
import "./about.css";
import Header from "../header/header";

function About({ onPageChange }) {
  return (
    <div>
      <Header onPageChange={onPageChange} />
      <div className="about-container">
        <h1>About Movie Culture</h1>
        <p>
          <strong>Movie Culture</strong> is a responsive and modern web
          application built using React and powered by the TMDB (The Movie
          Database) API. Designed as a portfolio project, it provides users with
          a seamless experience for browsing, discovering, and exploring movies,
          TV shows, and popular figures in the entertainment industry.
        </p>
        <p>
          The app features infinite scrolling, real-time data updates,
          responsive layouts, and category-based filtering for content
          discovery. Users can easily search for their favorite titles, explore
          detailed media cards, and enjoy an intuitive interface optimized for
          both desktop and mobile devices.
        </p>
        <p>
          Built with modern development tools like Vite, React Router, and
          custom hooks, <strong>Movie Culture</strong>
          demonstrates practical use of API integration, component architecture,
          and performance-focused design — making it an ideal addition to a
          developer’s portfolio.
        </p>
        <p>
          <em>Movie Culture – Where movies become a way of life. 🎬✨</em>
        </p>
      </div>
    </div>
  );
}

export default About;
