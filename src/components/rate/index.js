import React, { useState } from 'react';
import {I,P} from './rate.style';
const Rate = ({ callback }) => {
  const [value, setValue] = useState(5);

  return (
    <div>
      <I>
      <input class='range' 
      type='range' 
      name = "" 
      value={value} 
      min='1' 
      max="10" 
      onChange={e => setValue(e.currentTarget.value)} />
      <P>
        <button onClick={() => callback(value)}>Rate : {value}</button>
      </P>
      </I>
    </div>
  );
};

export default Rate;
