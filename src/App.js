import React from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  const handleWeeklyJournalClick = () => {
    // Redirect to the weekly journal HTML page
    window.location.href = "/weeklyjournal.html";
  };

  const journals = [
    { name: "Weekly Journal", image: "/images/weekly.png", onClick: handleWeeklyJournalClick },
    { name: "Gratitude Journal", image: "/images/gratitude.png", link: "/gratitudejournal.html" },
    { name: "Self-Care Journal", image: "/images/selfcare.png", link: "/selfcarejournal.html" },
    { name: "Travel Journal", image: "/images/travel.png", link: "/traveljournal.html" },
    { name: "Cooking Journal", image: "/images/cooking.png", link: "/cookingjournal.html" },
    { name: "Mood Journal", image: "/images/mood.png", link: "/moodjournal.html" },
    { name: "Meditation Journal", image: "/images/meditation.png", link: "/meditationjournal.html" },
    { name: "Daily Journal", image: "/images/daily.png", link: "/dailyjournal.html" },
    { name: "Diet Journal", image: "/images/diet.png", link: "/dietjournal.html" },
    { name: "Monthly Journal", image: "/images/monthly.png", link: "/monthlyjournal.html" },
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
            onClick={journal.onClick ? journal.onClick : () => (window.location.href = journal.link)}
          >
            <img src={journal.image} alt={journal.name} />
            <div className="overlay">{journal.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
