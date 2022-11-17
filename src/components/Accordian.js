import React from "react";
import data from "./data";
import QuestionList from "./QuestionList";

function Accordian() {
  return (
    <main class="container">
      <img
        src="/images/illustration-box-desktop.svg"
        class="illustration-box"
        alt=""
      />
      <article class="card">
        <div class="woman-image-container">
          <img
            src="/images/illustration-woman-online-mobile.svg"
            class="woman-image-mobile"
            alt=""
          />
          <img
            src="/images/bg-pattern-mobile.svg"
            class="pattern-image-mobile"
            alt=""
          />

          <img
            src="/images/illustration-woman-online-desktop.svg"
            class="woman-image-desktop"
            alt=""
          />
          <img
            src="/images/bg-pattern-desktop.svg"
            class="pattern-image-desktop"
            alt=""
          />
        </div>
        <div class="accordian">
          <h1 class="card-title | text-center">FAQ</h1>
          {data.map((questions, index) => {
            return <QuestionList key={index} {...questions} />;
          })}
        </div>
      </article>
    </main>
  );
}

export default Accordian;
