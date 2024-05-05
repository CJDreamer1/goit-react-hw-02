export default function Options({ updateFeedback, totalFeedback, setValues }) {
  const handleReset = () => {
    setValues({ good: 0, neutral: 0, bad: 0 });
  };
  return (
    <>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && <button onClick={handleReset}>Reset</button>}
    </>
  );
}
