import React, { useState, useEffect } from 'react';

const AutoWriteText = () => {
  const text =
    "Let our accomplished team of online interior designers submit concepts for your space — it's easy and convenient!";
  const [displayText, setDisplayText] = useState(text.charAt(0));
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 1;
    const delay = 50; // Adjust the delay in milliseconds

    const addNextCharacter = () => {
      setDisplayText((prevText) => text.substring(0, index));
      index++;

      if (index <= text.length) {
        setShowCursor(false);
        setTimeout(() => {
          setShowCursor(true);
          addNextCharacter();
        }, delay);
      }
    };

    setTimeout(addNextCharacter, delay);

    return () => clearTimeout(addNextCharacter); // Clean up the timeout on component unmount
  }, [text]);

  return (
    <div
      style={{
        position: 'relative',
        fontSize: '22px',
        textAlign: 'center',
        display: 'inline-block', // Use inline-block to adjust width dynamically
        marginLeft: '100px',
        lineHeight: '1.1',
        fontWeight: '600',
        width: 'auto', // Set width to auto
      }}
    >
      <p style={{ position: 'relative', display: 'inline-block', margin: 0 }}>{displayText}</p>
      {showCursor && <span style={{ position: 'absolute', bottom: '8px', left: `${displayText.length * 15}px` }}>|</span>}
    </div>
  );
};

export default AutoWriteText;
