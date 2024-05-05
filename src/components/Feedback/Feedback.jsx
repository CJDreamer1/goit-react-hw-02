export default function Feedback({ values: { good, neutral, bad }, feedback }) {
  return (
    <>
      <p>Good: {good} </p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {good + neutral + bad}</p>
      <p>Positive: {feedback}%</p>
    </>
  );
}
