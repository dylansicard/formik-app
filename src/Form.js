import React from 'react';
import { useFormik } from 'formik';

const Form = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      alert('Login Successful!');
    },
    validate: (values) => {
      const errors = {};
      // username validation
      if (!values.email) {
        errors.email = 'Field required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Username should be an email';
      }

      // password validation
      if (!values.password) {
        errors.password = 'Field required';
      }

      return errors;
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {/* username form */}
        <div>Username: </div>
        <input
          type="email"
          name="email"
          id="emailField"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {/* username error */}
        {formik.errors.email ? (
          <div id="emailError" style={{ color: 'red' }}>
            {formik.errors.email}
          </div>
        ) : null}

        {/* password form */}
        <div>Password: </div>
        <input
          type="password"
          name="password"
          id="pswField"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {/* password error */}
        {formik.errors.password ? (
          <div id="pswErrorError" style={{ color: 'red' }}>
            {formik.errors.password}
          </div>
        ) : null}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
