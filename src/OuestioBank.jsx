import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Question from "./Question";

export default function Bank() {
  const questionBank = [
    {
      id: 1,
      topic: "Javascript",
      level: "Beginner",
      totalQuestions: 4,
      perQuestionScore: 5,
      questions: [
        {
          question:
            "Which function is used to serialize an object into a JSON string in Javascript?",
          choices: ["stringify()", "parse()", "convert()", "None of the above"],
          type: "MCQs",
          correctAnswer: "stringify()",
        },
        {
          question:
            "Which of the following keywords is used to define a variable in Javascript?",
          choices: ["var", "let", "var and let", "None of the above"],
          type: "MCQs",
          correctAnswer: "var and let",
        },
        {
          question:
            "Which of the following methods can be used to display data in some form using Javascript?",
          choices: [
            "document.write()",
            "console.log()",
            "window.alert",
            "All of the above",
          ],
          type: "MCQs",
          correctAnswer: "All of the above",
        },
        {
          question: "How can a datatype be declared to be a constant type?",
          choices: ["const", "var", "let", "constant"],
          type: "MCQs",
          correctAnswer: "const",
        },
      ],
    },
    {
      id: 2,
      topic: "Javascript",
      level: "Beginner",
      totalQuestions: 4,
      perQuestionScore: 5,
      questions: [
        {
          question:
            "Which function is used to serialize an object into a JSON string in Javascript?",
          choices: ["stringify()", "parse()", "convert()", "None of the above"],
          type: "MCQs",
          correctAnswer: "stringify()",
        },
        {
          question:
            "Which of the following keywords is used to define a variable in Javascript?",
          choices: ["var", "let", "var and let", "None of the above"],
          type: "MCQs",
          correctAnswer: "var and let",
        },
        {
          question:
            "Which of the following methods can be used to display data in some form using Javascript?",
          choices: [
            "document.write()",
            "console.log()",
            "window.alert",
            "All of the above",
          ],
          type: "MCQs",
          correctAnswer: "All of the above",
        },
        {
          question: "How can a datatype be declared to be a constant type?",
          choices: ["const", "var", "let", "constant"],
          type: "MCQs",
          correctAnswer: "const",
        },
      ],
    },
  ];
  const { id } = useParams();

  const [currentQts, setCurrentQts] = useState(0);
  const [testStarted, setTestStarted] = useState(true);
  const [correct, setCorrect] = useState(0);
  const [answered, setAnswered] = useState(false);
  const timer = useRef();

  useEffect(() => {
    timer.current = setTimeout(() => {
      nextQuestion();
      console.log(currentQts + 1);
    }, 10000);

    return () => clearTimeout(timer.current);
  }, [currentQts]);

  const submitAnswer = (answer) => {
    if (answer !== undefined) {
      setAnswered(true);
      if (answer === questionBank[id].questions[currentQts].correctAnswer) {
        setCorrect((prev) => prev + 1);
      }
    }
  };

  const nextQuestion = () => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
    setAnswered(false);
    if (currentQts === questionBank[id].questions.length - 1) {
      setTestStarted(false);
    } else {
      setCurrentQts((prev) => prev + 1);
    }
  };
  return (
    <>
      {testStarted ? (
        <Question
          qtsBank={questionBank[id].questions[currentQts]}
          onSubmit={submitAnswer}
          onNext={nextQuestion}
          currentQts={currentQts}
          answered={answered}
        />
      ) : (
        <>
          <div>
            <div>Correct: {correct}</div>
            <div>Incorrect: {questionBank[id].questions.length - correct}</div>
          </div>
        </>
      )}
    </>
  );
}
