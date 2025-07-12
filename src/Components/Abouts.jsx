import React from "react";
import { gameBgBase64 } from "../Assets/gameBg";

const Abouts = () => {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `url('${gameBgBase64}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}
      ></div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "900px",
          padding: "40px",
          color: "#ff0000",
          borderRadius: "24px",
          backdropFilter: "blur(10px)",
          background:
            "linear-gradient(to bottom right, rgba(75, 0, 130, 0.7), rgba(128, 0, 128, 0.7))",
          boxShadow: "0 10px 30px rgba(0,0,0,0.7)",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "10rem", marginBottom: "0px" }}>🎮</div>
        <h2
          style={{
            fontSize: "5rem",
            fontWeight: "800",
            marginBottom: "10px",
            textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
          }}
        >
          Abouts the Game
        </h2>
        <p
          style={{
            fontSize: "1.25rem",
            marginBottom: "16px",
            lineHeight: 1.6,
            textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
          }}
        >
          <strong>Typing Test</strong> is a real-time multiplayer typing game where
          players race each other by typing a random paragraph as fast and accurately
          as possible.
        </p>
        <p
          style={{
            fontSize: "1.25rem",
            marginBottom: "16px",
            lineHeight: 1.6,
            textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
          }}
        >
          Built with <strong>Node.js</strong>, <strong>Express</strong>, and{" "}
          <strong>Socket.IO</strong>, this game delivers real-time experiences and
          competitive excitement with each keystroke.
        </p>
        <p
          style={{
            fontSize: "1.25rem",
            lineHeight: 1.6,
            textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
          }}
        >
          Whether you're improving your typing skills or looking for a quick challenge
          with friends, SpeedType is your perfect destination.
        </p>
      </div>
    </section>
  );
};

export default Abouts;
