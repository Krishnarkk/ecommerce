import React, { forwardRef } from "react";

const FormInput = forwardRef(({ ...otherProps }, ref) => {
  return (
    <div className="form-input">
      <input {...otherProps} ref={ref} />
    </div>
  );
});

export default FormInput;
