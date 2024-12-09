import React from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function HomePage() {
  const navigate = useNavigate();

  const journals = [
    { name: "Weekly Journal", image: "/images/weekly.png", link: "/weekly" },
    { name: "Gratitude Journal", image: "/images/gratitude.png" },
    { name: "Self-Care Journal", image: "/images/selfcare.png" },
    { name: "Travel Journal", image: "/images/travel.png" },
    { name: "Cooking Journal", image: "/images/cooking.png" },
    { name: "Mood Journal", image: "/images/mood.png" },
    { name: "Meditation Journal", image: "/images/meditation.png" },
    { name: "Daily Journal", image: "/images/daily.png" },
    { name: "Diet Journal", image: "/images/diet.png" },
    { name: "Monthly Journal", image: "/images/monthly.png" },
  ];

  return (
    <div className="app">
      <header className="header">
        <h1>journee</h1>
        <p>Capture Moments, Cultivate Memories, Create Magic.</p>
      </header>
      <div className="gallery">
        {journals.map((journal, index) => (
          <div
            key={index}
            className="card"
            onClick={() => journal.link && navigate(journal.link)}
            style={{
              cursor: journal.link ? "pointer" : "default",
            }}
          >
            <img src={journal.image} alt={journal.name} />
            <div className="overlay">{journal.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
