import React, { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button variant="primary" onClick={handleShow}>
        Launch demo modal
      </button>

      <div style={{ display: show ? "block" : "none" }}>
        <div>Woohoo, you're reading this text in a modal!</div>
        <div>
          <button variant="secondary" onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
