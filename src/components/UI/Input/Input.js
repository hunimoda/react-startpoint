import React, { useState, useEffect } from "react";

/**
 * @param {onUpdate, id, label} props	All props required.
 *
 * @returns
 */
const Input = (props) => {
	/*** States *****************************************/
	const [value, setValue] = useState("");
	const [isTouched, setIsTouched] = useState(false);
	const [error, setError] = useState(null);

	/**
	 * Updates the value in the parent component
	 *
	 * onUpdate prop must be memoized in the parent-side (useCallback)
	 * and should return any validation error.
	 */
	const { onUpdate } = props;
	useEffect(() => {
		setError(onUpdate(value));
	}, [onUpdate, value]);

	/*** Handlers ***************************************/
	const changeHandler = (event) => {
		setIsTouched(true);
		setValue(event.target.value);
	};
	const blurHandler = () => {
		setIsTouched(true);
	};

	const showError = error && isTouched;
	const divClassName = "form-control " + (showError ? "invalid" : "");
	const errorMessage = showError ? (
		<p className="error-message">{error}</p>
	) : null;

	/*** JSX ********************************************/
	return (
		<div className={divClassName}>
			<label htmlFor={props.id}>{props.label}</label>
			<input
				type="text"
				id={props.id}
				onChange={changeHandler}
				onBlur={blurHandler}
				value={value}
			/>
			{errorMessage}
		</div>
	);
};

// Prevent evaluation on parent evaluation
export default React.memo(Input);
