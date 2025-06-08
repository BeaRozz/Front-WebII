import React from "react";
import { Link } from "react-router-dom";
import "../styles/pages/HomePage.css";

const portalImage = new URL(
  "../assets/RickAndMortyPortal.png",
  import.meta.url
);

const portalAnimated = new URL(
  "../assets/RickAndMorty_Portal_Animated.gif",
  import.meta.url
);

const portalAnimated2 = new URL(
  "../assets/RickAndMorty_Portal_Animated_2.gif",
  import.meta.url
);

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="home-hero">
        <div className="hero-container">
          <div className="hero-text">
            <h1 className="hero-title">
              Travel the Multiverse Without Leaving Your Couch
            </h1>
            <p className="hero-description">
              Whether you're dodging Galactic Federations or just binge-watching
              Morty's latest existential crisis, we've got the portal for you.
              All your dimensions, in one place.
            </p>
            <div className="hero-buttons">
              <Link to="/episodes" className="btn btn-primary">
                See Episodes
                <svg
                  className="btn-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link to="/characters" className="btn btn-secondary">
                Vote for Characters
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img src={portalImage} alt="Rick and Morty portal" />
          </div>
        </div>
      </section>

      {/* Vote Section */}
      <section className="vote-section">
        <div className="vote-container">
          <div className="vote-image">
            <Link to="/characters/vote">
              <img src={portalAnimated} alt="Rick and Morty tech" />
            </Link>
          </div>
          <div className="vote-content">
            <h1>Vote for Your Favorite Rick and Morty Characters!</h1>
            <p>
              Who's your multiverse MVP? Cast your vote and decide who's top of
              the dimension! Whether it's Pickle Rick or Evil Morty, your vote
              shapes the rankings.
            </p>
            <Link to="/characters" className="cta-button">
              Cast your vote
              <svg
                className="cta-icon"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 
                  1.414l-6 6a1 1 0 01-1.414-1.414L14.586 
                  11H3a1 1 0 110-2h11.586l-4.293-4.293a1 
                  1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Character Gallery */}
      <div className="gallery-grid">
        <div className="gallery-column">
          <div>
            <img
              src={
                new URL(
                  "../assets/characters/Young_Adult_Rick.webp",
                  import.meta.url
                )
              }
              alt=""
            />
          </div>
          <div>
            <img
              src={
                new URL(
                  "../assets/characters/Alan_Trenes.webp",
                  import.meta.url
                )
              }
              alt="Alan Trenes"
            />
          </div>
          <div>
            <img
              src={
                new URL("../assets/characters/Snuggles.webp", import.meta.url)
              }
              alt="Snuggles"
            />
          </div>
        </div>
        <div className="gallery-column">
          <div>
            <img
              src={
                new URL("../assets/characters/Jessica.webp", import.meta.url)
              }
              alt="Jessica"
            />
          </div>
          <div>
            <img
              src={
                new URL(
                  "../assets/characters/Glaxo_Slimslom.webp",
                  import.meta.url
                )
              }
              alt="Glaxo Slimslom"
            />
          </div>
          <div>
            <img
              src={new URL("../assets/characters/Stealy.webp", import.meta.url)}
              alt="Stealy"
            />
          </div>
        </div>
        <div className="gallery-column">
          <div>
            <img
              src={
                new URL("../assets/characters/Hemorragia.webp", import.meta.url)
              }
              alt="Hemorragia"
            />
          </div>
          <div>
            <img
              src={
                new URL(
                  "../assets/characters/Cornvelious_Daniel.webp",
                  import.meta.url
                )
              }
              alt="Cornvelious Daniel"
            />
          </div>
          <div>
            <img
              src={
                new URL(
                  "../assets/characters/Padre_Greeby_Bob.webp",
                  import.meta.url
                )
              }
              alt="Padre Greeby Bob"
            />
          </div>
        </div>
        <div className="gallery-column">
          <div>
            <img
              src={
                new URL(
                  "../assets/characters/Empleado_de_la_Casa_de_Empeno.webp",
                  import.meta.url
                )
              }
              alt="Empleado de la casa de empeño"
            />
          </div>
          <div>
            <img
              src={
                new URL(
                  "../assets/characters/Rick_Sanchez.webp",
                  import.meta.url
                )
              }
              alt="Rick Sanchez"
            />
          </div>
          <div>
            <img
              src={
                new URL("../assets/characters/Robodrilo.webp", import.meta.url)
              }
              alt="Robodrilo"
            />
          </div>
        </div>
      </div>

      {/* Episode Detail */}
      <section className="episode-cta">
        <div className="cta-container">
          <div className="cta-text">
            <h2>Watch Unknown Details About Episodes</h2>
            <p>
              Dive deep into the multiverse secrets, character origins, and the
              wildest behind-the-scenes trivia from Rick and Morty episodes.
            </p>
            <Link to="/episodes" className="cta-button">
              Get Started
              <svg
                className="cta-icon"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 
                  1.414l-6 6a1 1 0 01-1.414-1.414L14.586 
                  11H3a1 1 0 110-2h11.586l-4.293-4.293a1 
                  1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>

          <div className="cta-image">
            <img
              src={portalAnimated2}
              alt="Portal 2"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
