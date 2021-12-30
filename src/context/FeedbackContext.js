import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackData from "../data/FeedbackData";
const FeedbackContext = createContext();

export const FeedbackProvider = ({
  children,
}) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is from context api",
      rating: 10,
    },
    ...FeedbackData,
  ]);

  const [feedbackEdit, setFeedbackEdit] =
    useState({
      item: {},
      edit: false,
    });
  const deleteFeedback = (id) => {
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

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // Update feedback item
  const updateFeedback = (id, updItm) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id
          ? { ...item, ...updItm }
          : item
      )
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
