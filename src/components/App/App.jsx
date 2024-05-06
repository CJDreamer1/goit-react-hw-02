import { useState, useEffect } from "react";

import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

const getClicks = () => {
  const savedClicks = localStorage.getItem("my-clicks");
  return savedClicks !== null
    ? JSON.parse(savedClicks)
    : { good: 0, neutral: 0, bad: 0 };
};

export default function App() {
  const [values, setValues] = useState(getClicks);

  const totalFeedback = values.good + values.neutral + values.bad;

  const updateFeedback = (type) => {
    setValues({ ...values, [type]: values[type] + 1 });
  };

  const handleReset = () => {
    setValues({ good: 0, neutral: 0, bad: 0 });
  };

  const positiveFeedback = Math.round((values.good / totalFeedback) * 100);

  useEffect(() => {
    localStorage.setItem("my-clicks", JSON.stringify(values));
  }, [values]);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        handleReset={handleReset}
      />
      {totalFeedback > 0 ? (
        <Feedback values={values} feedback={positiveFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
}
