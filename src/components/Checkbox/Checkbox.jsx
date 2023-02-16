import React from 'react';

export default function Checkbox({ ...rest }) {
  return (
    <label>
      <input type="checkbox" {...rest} />
      <span> {...rest.text}</span>
    </label>
  );
}
