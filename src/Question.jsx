import { useState } from "react";

export default function Question({
  qtsBank,
  onSubmit,
  onNext,
  currentQts,
  answered,
}) {
  const [answer, setAnswer] = useState("");
  return (
    <div style={{ width: "500px" }}>
      <div>
        Q{currentQts + 1}, {qtsBank.question}
      </div>
      <div>
        {qtsBank.choices.map((ch, key) => (
          <span key={key}>
            <input
              type="radio"
              id={ch}
              checked={answer === ch}
              name="answer"
              value={ch}
              onChange={(e) => {
                setAnswer(ch);
              }}
              disabled={answered}
            />
            <label htmlFor={ch}>{ch}</label>
            <br />
          </span>
        ))}
        <br />
        <br />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingInline: 10,
        }}
      >
        <button
          onClick={() => {
            onSubmit(answer);
          }}
          disabled={answer === "" || answered}
        >
          OK
        </button>
        <button
          onClick={() => {
            onNext();
            setAnswer("");
          }}
          disabled={!answered}
        >
          Next
        </button>
      </div>
      {answered && (
        <div
          style={{
            backgroundColor: answer === qtsBank.correctAnswer ? "green" : "red",
          }}
        >
          {answer === qtsBank.correctAnswer ? "Correct" : "Incorrect"}
        </div>
      )}
    </div>
  );
}
