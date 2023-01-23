import React from 'react';

const InputGroup = ({ total, name, setId }) => {

	return (

		<div className="input-group">
		  <select className="form-select"	id={name} onChange={(e) => setId(e.target.value)}>
		    {
		    	[...Array(total).keys()].map((n) => <option value={n + 1}>{name} - {n + 1}</option>)
		    }
		  </select>
		</div>

	);
};

export default InputGroup;