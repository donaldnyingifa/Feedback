import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { FeedbackProvider } from "./context/FeedbackContext";
import Header from "./components/Header";
import Feedbacklist from "./components/Feedbacklist";
import Feedbackstats from "./components/Feedbackstats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header text="Feedback Header" />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <Feedbackstats />
                  <Feedbacklist />
                </>
              }
            ></Route>
            <Route
              path="/about"
              element={<AboutPage />}
            />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
