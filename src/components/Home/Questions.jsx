import React, { useState, useRef } from "react";
//components
import RegisterForm from "./RegisterForm";
import Divider from "./Divider";
//json data
import Questions_data from "../../json/Questions.json";
//css
import "../../css/Home/Questions.css";

function Questions() {
  const [showDescById, setShowDescById] = useState(null);
  const [show, setShow] = useState(false);
  const [icon, setIcon] = useState("+");
  const descRef = useRef();

  const handleDescreption = (id) => {
    setShowDescById(id);
    show ? setShow(false) : setShow(true);
  };

  return (
    <div className="questions">
      <div className="title">Frequently Asked Questions</div>
      <div className="questions_content">
        {Questions_data.map((question) => (
          <div className="question" key={question.id}>
            <div
              className="question_head"
              onClick={() => handleDescreption(question.id)}
            >
              <h3 className="head_title">{question.title}</h3>
              <span className="icon">
                {showDescById === question.id && show ? "x" : "+"}
              </span>
            </div>
            <Divider h="2px" color="black" />
            <p
              ref={descRef}
              className={`question_desc`}
              style={{
                display:
                  showDescById === question.id && show ? "block" : "none",
              }}
            >
              {question.description}
            </p>
          </div>
        ))}
      </div>
      <RegisterForm />
    </div>
  );
}

export default Questions;
