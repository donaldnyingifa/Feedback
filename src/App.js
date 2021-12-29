import React from "react";
import { useState } from "react";

import Header from "./components/Header";
import Feedbacklist from "./components/Feedbacklist";
import FeedbackData from "./data/FeedbackData";
import Feedbackstats from "./components/Feedbackstats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [feedback, setFeedback] =
    useState(FeedbackData);

  const handleDelete = (id) => {
    if (
      window.confirm(
        "Are you sure you want to delete?"
      )
    ) {
      setFeedback(
        feedback.filter((item) => item.id !== id)
      );
    }
  };
  return (
    <>
      <Header text="Feedback Header" />
      <div className="container">
        <FeedbackForm />
        <Feedbackstats feedback={feedback} />
        <Feedbacklist
          feedback={feedback}
          onDelete={handleDelete}
        />
      </div>
    </>
  );
}

export default App;
