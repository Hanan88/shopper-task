import React, { useState } from "react";

const Filter = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const filterForm = "ss";

  return (
    <div className="w-75">
      
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-container="body"
        data-bs-toggle="popover"
        data-bs-placement="bottom"
        data-bs-content="Bottom popover"
      >
        Popover on bottom
      </button>

      {/* {open ? filterForm : null} */}
    </div>
  );
};

export default Filter;
