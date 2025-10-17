import React, { useEffect, useState } from "react";
import axios from "axios";
import { color } from "motion";

const UserQueries = () => {
  const [queries, setQueries] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const fetchQueries = async () => {
    try {
      const res = await axios.get("http://localhost/projects/Scrollview/fetch_queries.php");
      if (res.data.status === "success") {
        setQueries(res.data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await axios.post("http://localhost/projects/Scrollview/submit_query.php", formData);
      if (res.data.status === "success") {
        setStatus("✅ Thanks for your message!");
        setFormData({ name: "", email: "", message: "" });
        fetchQueries(); // Refresh list instantly
      } else {
        setStatus("❌ Failed to send.");
      }
    } catch (err) {
      setStatus("⚠️ Network error!");
    }
  };

  useEffect(() => {
    fetchQueries();
  }, []);

  return (
    <div className="warper" style={{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:"0"}}>

    <section style={styles.section}>
      <h2 style={styles.heading}>Share Your Thoughts 💬</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          style={styles.input}
        />
        <textarea
          name="message"
          placeholder="Your Message..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          rows="5"
          style={styles.textarea}
        ></textarea>
        <button type="submit" style={styles.button}>Send Message</button>
      </form>

      <p>{status}</p>

      <h3 style={{ marginTop: "30px" }}>Recent Queries 📝</h3>
      <div style={styles.queryContainer}>
        {queries.length > 0 ? (
          queries.map((q) => (
            <div key={q.id} style={styles.queryBox}>
              <h4>{q.name}</h4>
              <p><strong>Email:</strong> {q.email}</p>
              <p>{q.message}</p>
              <small>{q.created_at}</small>
            </div>
          ))
        ) : (
            <p>No queries yet...</p>
        )}
      </div>
    </section>
        </div>
  );
};

// Inline styles (you can replace with CSS)

const styles = {
  
 section: {
  height: "60vh",                  // Fixed section height (60% of viewport)
  overflowY: "auto",    
   WebkitOverflowScrolling: "touch",           // Enable vertical scrolling inside the section
  scrollBehavior: "smooth",        // Smooth scrolling
  marginTop: "90px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "40px",
  background: "linear-gradient(135deg, #f3f3f3, #e0e0e0)",
  borderRadius: "10px",            // optional: makes it look clean
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)", // optional
  color: "#333",
}
,
heading: {
    fontSize: "2rem",
    marginBottom: "20px",
},
form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "100%",
    maxWidth: "400px",
  },
  input: {
      padding: "12px",
      border: "1px solid #ccc",
      borderRadius: "10px",
  },
  textarea: {
      padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "10px",
  },
  button: {
    background: "#007bff",
    color: "#fff",
    padding: "12px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "0.3s",
  },
  queryContainer: {
      marginTop: "20px",
      width: "100%",
    maxWidth: "600px",
},
  queryBox: {
    background: "#fff",
    borderRadius: "10px",
    padding: "15px",
    marginBottom: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    color    : "#000000ff",
  },
};

export default UserQueries;
