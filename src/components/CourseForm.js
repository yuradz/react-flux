import React from "react";
import TextInput from './common/TextInput'
import DropDownList from "./common/DropDownList";
import { PropTypes } from "prop-types";

function CourseForm(props) {
  const courses = [
    {authorId: 1, authorName: "Cory House"},
    {authorId: 2, authorName: "Scott Allen"},
    {authorId: 3, authorName: "Dan Wahlin"}
  ];

  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        name="title"
        label="Title"
        onChange={props.onChange}
        value={props.course.title}
        error={props.errors.title}
      />

      <DropDownList
        id="author"
        name="authorId"
        label="Author"
        onChange={props.onChange}
        value={props.course.authorId}
        options={courses.map(course => ({ value: course.authorId, valueName: course.authorName }))}
        error={props.errors.authorId}
      />

      <TextInput
        id="category"
        name="category"
        label="Category"
        onChange={props.onChange}
        value={props.course.category}
        error={props.errors.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
}

export default CourseForm;
