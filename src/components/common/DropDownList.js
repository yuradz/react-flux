import React from 'react';
import { PropTypes } from "prop-types";

function DropDownList(props) {
    
    let options = props.options.map(_ => _);
    options.unshift({value: "", valueName: ""});

    return (
      <>
        <div className="form-group">
          <label htmlFor={props.id}>{props.label}</label>
          <div className="field">
            <select
              id={props.id}
              name={props.name}
              value={props.value || ""}
              className="form-control"
              onChange={props.onChange}>
              {
                  options.map((option, idx) => <option key={idx} value={option.value}>{option.valueName}</option>)
              }
            </select>
          </div>
        </div>
        {props.error && <div className="alert alert-danger">{props.error}</div>}
      </>
    );
}

DropDownList.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.number,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.number.isRequired,
            valueName: PropTypes.string.isRequired, 
        })
    ),
    error: PropTypes.string
}

DropDownList.defaultProps = {
    value: "",
    options: []
}

export default DropDownList;