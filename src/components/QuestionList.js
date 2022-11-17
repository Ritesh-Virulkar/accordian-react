import React, { useState } from "react";

function QuestionList(questions) {
  const { question, answer } = questions;
  const [display, setDisplay] = useState(false);

  return (
    <article className="question-answer">
      <div className="question" onClick={() => setDisplay(!display)}>
        <p className={display ? "question-text active" : "question-text"}>
          {question}
        </p>
        <img
          src="/images/icon-arrow-down.svg"
          className={display ? "upside-down" : ""}
          alt=""
        />
      </div>
      {display && <p className="answer">{answer}</p>}
    </article>
  );
}

export default QuestionList;
