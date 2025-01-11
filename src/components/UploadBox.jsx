import React, { useState } from 'react';
import axios from 'axios';
import './UploadBox.css';

const UploadBox = ({ onSummarizeComplete }) => {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState('');
  const [maxWordLimit, setMaxWordLimit] = useState(100); // Default max word limit
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = async (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    setUrl(''); // Clear URL field when a file is selected

    if (uploadedFile) {
      const formData = new FormData();
      formData.append('file', uploadedFile);
      formData.append('words_limit', maxWordLimit); // Pass the dynamic word limit

      try {
        setIsLoading(true);
        const response = await axios.post('http://localhost:8000/summarize/file', formData);
        onSummarizeComplete(response.data.summary);
      } catch (error) {
        console.error('Error summarizing file:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
    setFile(null); // Clear file field when a URL is entered
  };

  const handleUrlSubmit = async () => {
    if (url) {
      const formData = new FormData();
      formData.append('url', url);
      formData.append('words_limit', maxWordLimit); // Pass the dynamic word limit

      try {
        setIsLoading(true);
        const response = await axios.post('http://localhost:8000/summarize/url', formData);
        onSummarizeComplete(response.data.summary);
      } catch (error) {
        console.error('Error summarizing URL:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleMaxWordLimitChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {  // Check if the input is a number
      setMaxWordLimit(value);
    }
  };

  return (
    <div className="upload-container">
      <div className="upload-box">
        <label className="upload-label">Upload File</label>
        <input
          type="file"
          onChange={handleFileUpload}
          className="upload-input"
        />
      </div>
      <div className="upload-box">
        <label className="upload-label">Or Enter URL</label>
        <input
          type="url"
          value={url}
          onChange={handleUrlChange}
          placeholder="Enter website URL"
          className="upload-input"
        />
        <button
          onClick={handleUrlSubmit}
          className="upload-submit-btn"
          disabled={!url || isLoading}
        >
          Submit URL
        </button>
      </div>

      <div className="max-word-limit-box">
        <label>Max Word Limit:</label>
        <input
          type="text"
          value={maxWordLimit}
          onChange={handleMaxWordLimitChange}
          placeholder="Enter word limit"
          className="max-word-limit-input"
        />
      </div>

      {isLoading && <p className="loading-message">Processing...</p>}
    </div>
  );
};

export default UploadBox;
