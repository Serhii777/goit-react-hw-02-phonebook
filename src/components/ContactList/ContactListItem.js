import React from "react";
import PropTypes from "prop-types";

const ContactListItem = ({ name, number, onRemove }) => {
  return (
    <li className="ContactList-item">
      <p className="ContactList-name">{name}:</p>
      <span className="ContactList-number">{number}</span>
      <button
        type="button"
        className="ContactList-button"
        onClick={onRemove}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

ContactListItem.defaultProps = {
  name: "",
  number: '',
};

export default ContactListItem;
