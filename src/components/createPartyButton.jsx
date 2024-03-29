import React from 'react';

const FloatingButton = ({ targetScreen }) => {

  return (
    <div style={styles.container}>
      <button
        style={styles.button}
      >
        <span style={styles.buttonText}>+</span>
      </button>
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    bottom: 70,
    right: 16,
    zIndex: 2,
  },
  button: {
    backgroundColor: 'red',
    width: 80,
    height: 80,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    cursor: 'pointer',
  },
  buttonText: {
    color: 'white',
    fontSize: 40,
  },
};

export default FloatingButton;