import {
  createContext,
  useState,
  useEffect,
} from "react";
const FeedbackContext = createContext();

export const FeedbackProvider = ({
  children,
}) => {
  const [isLoading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch(
      "http://localhost:5000/feedback?_sort=id&_order=desc"
    );
    const data = await response.json();
    setFeedback(data);
    setLoading(false);
  };

  const [feedbackEdit, setFeedbackEdit] =
    useState({
      item: {},
      edit: false,
    });
  const deleteFeedback = async (id) => {
    if (
      window.confirm(
        "Are you sure you want to delete?"
      )
    ) {
      await fetch(
        `http://localhost:5000/feedback/${id}`,
        {
          method: "DELETE",
        }
      );
      setFeedback(
        feedback.filter((item) => item.id !== id)
      );
    }
  };

  const addFeedback = async (newFeedback) => {
    const response = await fetch(
      "http://localhost:5000/feedback",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newFeedback),
      }
    );

    const data = await response.json();

    setFeedback([data, ...feedback]);
  };

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // Update feedback item
  const updateFeedback = async (id, updItm) => {
    const response = await fetch(
      `http://localhost:5000/feedback/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updItm),
      }
    );

    const data = await response.json();
    setFeedback(
      feedback.map((item) =>
        item.id === id
          ? { ...item, ...data }
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
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
