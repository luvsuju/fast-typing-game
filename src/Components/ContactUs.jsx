import React from "react";

const ContactUs = () => {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#2c2c54", // dark background
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
      }}
    >
      {/* Dark overlay - optional, can remove if solid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          zIndex: 0,
        }}
      ></div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "600px",
          width: "100%",
          padding: "40px",
          borderRadius: "24px",
          background:
            "linear-gradient(to bottom right, rgba(75, 0, 130, 0.7), rgba(128, 0, 128, 0.7))",
          boxShadow: "0 10px 30px rgba(0,0,0,0.7)",
          color: "#ff0000",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        <h2
          style={{
            fontSize: "4rem",
            fontWeight: "800",
            marginBottom: "24px",
            textAlign: "center",
            textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
          }}
        >
          Contact Us
        </h2>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted!"); // placeholder, replace with your logic
          }}
        >
          <label style={{ fontWeight: "600" }}>
            Name:
            <input
              type="text"
              required
              placeholder="Your name"
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "6px",
                borderRadius: "8px",
                border: "none",
                fontSize: "1rem",
              }}
            />
          </label>

          <label style={{ fontWeight: "600" }}>
            Email:
            <input
              type="email"
              required
              placeholder="Your email"
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "6px",
                borderRadius: "8px",
                border: "none",
                fontSize: "1rem",
              }}
            />
          </label>

          <label style={{ fontWeight: "600" }}>
            Message:
            <textarea
              required
              placeholder="Your message"
              rows={5}
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "6px",
                borderRadius: "8px",
                border: "none",
                fontSize: "1rem",
                resize: "vertical",
              }}
            />
          </label>

          <button
            type="submit"
            style={{
              padding: "14px",
              borderRadius: "12px",
              border: "none",
              backgroundColor: "#ff0000",
              color: "white",
              fontWeight: "700",
              fontSize: "1.25rem",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(255,0,0,0.6)",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#cc0000")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#ff0000")
            }
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
