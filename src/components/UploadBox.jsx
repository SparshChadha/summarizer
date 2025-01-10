// src/components/UploadBox.jsx
import React, { useState } from 'react';
import './UploadBox.css';

const UploadBox = ({ onFileChange, onLinkChange }) => {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
    onFileChange(e.target.files[0]);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
    onLinkChange(e.target.value);
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
      </div>
    </div>
  );
};

export default UploadBox;
