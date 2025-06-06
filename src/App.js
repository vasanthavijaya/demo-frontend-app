import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('http://localhost:8080/hello') // Update to your backend URL in prod
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => setMessage('Error fetching data'));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Demo Frontend Just Got changed</h1>
        <p>Backend Message: {message}</p>
      </header>
    </div>
  );
}

export default App;// Test pipeline
// Test Docker Hub pipeline
// Test Docker Hub pipeline
// Trigger pipeline Wed Apr 30 15:15:37 BST 2025
// Trigger pipeline Wed Apr 30 15:38:27 BST 2025
// Trigger pipeline Wed Apr 30 15:42:50 BST 2025
// Trigger pipeline Wed Apr 30 16:01:50 BST 2025
// Trigger pipeline Wed Apr 30 16:07:23 BST 2025
// Trigger pipeline Wed Apr 30 16:13:39 BST 2025
// Trigger pipeline Wed Apr 30 16:16:24 BST 2025
// Trigger pipeline Wed Apr 30 16:17:50 BST 2025
// Trigger pipeline Wed Apr 30 16:30:51 BST 2025
// Trigger pipeline Wed Apr 30 16:40:43 BST 2025
// Trigger pipeline Wed Apr 30 16:43:56 BST 2025
// Trigger pipeline Wed Apr 30 16:46:31 BST 2025
// Trigger pipeline Wed Apr 30 16:53:09 BST 2025
// Trigger pipeline Wed Apr 30 16:56:14 BST 2025
