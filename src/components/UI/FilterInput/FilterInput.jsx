import React from 'react';
import { Formik } from 'formik';

const FilterInput = () => (
  <>
    <Formik
      initialValues={{ query: ''}}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="query"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.query}
          />
        </form>
      )}
    </Formik>
  </>
);

export default FilterInput;