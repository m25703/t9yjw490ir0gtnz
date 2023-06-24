import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function CreatePost() {
  const initialValues = {
    question: "",
    answer: "",
    username: "abcd",
    lastClick: 1,
  };

  const validationSchema = Yup.object().shape({
    question: Yup.string().required("You must input a Question!"),
    answer: Yup.string().required(),
    username: Yup.string().min(3).max(15).required(),
  });
  

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/posts", data).then((response) => {
      console.log("it worked");
    });
  };
  return (
    <div className="createPostPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Question: </label>
          <ErrorMessage name="question" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="question"
            placeholder="(Ex. Question...)"
          />
          <label>Answer: </label>
          <ErrorMessage name="answer" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="answer"
            placeholder="(Ex. Answer...)"
          />
        
          <button type="submit"> Create Card</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
