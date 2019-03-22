import React from "react";

export default function DeleteBidBox(props) {
  return (
    <div className="delete-warning-container">
      <button
        onClick={event => {
          event.preventDefault();
          props.deleteBid(props.bidId);
        }}
      >
        Delete
      </button>
    </div>
  );
}
