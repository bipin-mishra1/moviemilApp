import React, { useState } from 'react';
import {P} from './rate.style';
const Rate = ({ callback }) => {
  const [value, setValue] = useState(5);

  return (
    <div>
      <input
        type='range'
        min='1'
        max='10'
        value={value}
        onChange={e => setValue(e.currentTarget.value)}
      />
      <P>
        <button onClick={() => callback(value)}>Rate : {value}</button>
      </P>
    </div>
  );
};

export default Rate;
