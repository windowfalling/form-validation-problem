import React from "react";
import { withFormik } from "formik";
import schema from "./schema";

const initialValues = {
  email: "",
  password: "",
  colour: "",
  animal: "",
  tiger_type: ""
};

const Form = formik => {
  const { values, touched, errors, handleChange, handleSubmit } = formik;

  const commonFormikProps = fieldName => {
    return {
      id: fieldName,
      name: fieldName,
      onChange: handleChange,
      value: values[fieldName]
    };
  };

  const errorClass = fieldName => {
    return {
      className:
        (formik.submitCount > 0 || touched[fieldName]) &&
        errors[fieldName] &&
        "error"
    };
  };

  const handleFormSubmit = e => {
    handleSubmit(e);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h1>Fill out this awesome form</h1>
      <fieldset>
        <h3>Your details</h3>
        <p {...errorClass("email")}>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input type="email" {...commonFormikProps("email")} />
        </p>

        <p {...errorClass("password")}>
          <label className="label" htmlFor="password">
            Password
          </label>
          <input type="password" {...commonFormikProps("password")} />
        </p>
      </fieldset>

      <fieldset>
        <h3>Your animal</h3>
        <p {...errorClass("colour")}>
          <label className="label" htmlFor="colour">
            Colour
          </label>
          <select {...commonFormikProps("colour")}>
            <option value="">Choose colour</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="black">Black</option>
            <option value="brown">Brown</option>
          </select>
        </p>
        <p {...errorClass("animal")}>
          <label className="label">Animal</label>

          <input
            type="checkbox"
            name="animal"
            value="bear"
            id="bear"
            onChange={handleChange}
          />
          <label htmlFor="bear">Bear</label>

          <input
            type="checkbox"
            name="animal"
            value="tiger"
            id="tiger"
            onChange={handleChange}
          />
          <label htmlFor="tiger">Tiger</label>

          <input
            type="checkbox"
            name="animal"
            value="snake"
            id="snake"
            onChange={handleChange}
          />
          <label htmlFor="snake">Snake</label>

          <input
            type="checkbox"
            name="animal"
            value="donkey"
            id="donkey"
            onChange={handleChange}
          />
          <label htmlFor="donkey">Donkey</label>
        </p>
        <p {...errorClass("tiger_type")}>
          <label className="label" htmlFor="tiger_type">
            Type of tiger
          </label>
          <input
            type="text"
            name="tiger_type"
            id="tiger_type"
            onChange={handleChange}
          />
        </p>
      </fieldset>

      <input type="submit" value="Create account" />
    </form>
  );
};

const FormikForm = withFormik({
  initialValues,

  validationSchema: schema,

  handleSubmit: (values, { setSubmitting }) => {
    alert("Account successfully created!");
  },

  displayName: "AwesomeForm"
})(Form);

const App = () => <FormikForm />;

export default App;
