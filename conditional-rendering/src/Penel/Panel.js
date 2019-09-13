import React, { useState } from 'react';
import './panel.css';

function PanelView() {
  const [isShowing, setIsShowing] = useState(true);

  function handleViewButtonClick() {
    setIsShowing(!isShowing);
  }

  return (
    <React.Fragment>
      <Panel isShowing={isShowing} />
      <button onClick={handleViewButtonClick}>
        {isShowing ? 'Hide Panel' : 'Show Panel'}
      </button>
    </React.Fragment>
  );
}

function Panel(props) {
  if(!props.isShowing)
  {
    return null;
  }

  return (
    <div className="warning">
      Warning
    </div>
  );
}

export default PanelView;