// // // // src/components/ContentBox.js
// // // import React, { useState } from 'react';
// // // import './ContentBox.css';

// // // function ContentBox() {
// // //   const [selectedMethod, setSelectedMethod] = useState(null);
// // //   const [content, setContent] = useState('');

// // //   const handleIconClick = (method) => {
// // //     setSelectedMethod(method);
// // //   };

// // //   const handleContentChange = (e) => {
// // //     setContent(e.target.value);
// // //   };

// // //   return (
// // //     <div className="content-box">
// // //       {/* Left Box */}
// // //       <div className="left-box">
// // //         {!selectedMethod && (
// // //           <div className="icons">
// // //             <div
// // //               className="icon"
// // //               onClick={() => handleIconClick('file')}
// // //               title="Upload File"
// // //             >
// // //               📂
// // //             </div>
// // //             <div
// // //               className="icon"
// // //               onClick={() => handleIconClick('paste')}
// // //               title="Paste Content"
// // //             >
// // //               ✍️
// // //             </div>
// // //             <div
// // //               className="icon"
// // //               onClick={() => handleIconClick('url')}
// // //               title="Provide URL"
// // //             >
// // //               🌐
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* Input Field */}
// // //         {selectedMethod && selectedMethod === 'paste' && (
// // //           <textarea
// // //             placeholder="Paste your content here..."
// // //             value={content}
// // //             onChange={handleContentChange}
// // //             className="content-input"
// // //           />
// // //         )}
// // //         {/* You can add more options here like file input or URL input based on the selected method */}
// // //         {selectedMethod === 'url' && (
// // //           <input
// // //             type="text"
// // //             placeholder="Paste URL here..."
// // //             value={content}
// // //             onChange={handleContentChange}
// // //             className="content-input"
// // //           />
// // //         )}
// // //       </div>

// // //       {/* Right Box */}
// // //       <div className="right-box">
// // //         <h3>Summarized Output:</h3>
// // //         <div className="output-content">
// // //           {content ? content : 'The output will appear here...'}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default ContentBox;

// // // src/components/ContentBox.js
// // import React, { useState } from 'react';
// // import './ContentBox.css';

// // function ContentBox() {
// //   const [selectedMethod, setSelectedMethod] = useState(null);
// //   const [content, setContent] = useState('');

// //   const handleIconClick = (method) => {
// //     setSelectedMethod(method);
// //   };

// //   const handleContentChange = (e) => {
// //     setContent(e.target.value);
// //   };

// //   return (
// //     <div className="content-box">
// //       {/* Left Box */}
// //       <div className="left-box">
// //         {!selectedMethod && (
// //           <div className="icons">
// //             <div
// //               className="icon"
// //               onClick={() => handleIconClick('file')}
// //               title="Upload File"
// //             >
// //               <span className="icon-text">Upload File</span>
// //               📂
// //             </div>
// //             <div
// //               className="icon"
// //               onClick={() => handleIconClick('paste')}
// //               title="Paste Content"
// //             >
// //               <span className="icon-text">Paste Content</span>
// //               ✍️
// //             </div>
// //             <div
// //               className="icon"
// //               onClick={() => handleIconClick('url')}
// //               title="Provide URL"
// //             >
// //               <span className="icon-text">Provide URL</span>
// //               🌐
// //             </div>
// //           </div>
// //         )}

// //         {/* Input Field */}
// //         {selectedMethod && selectedMethod === 'paste' && (
// //           <textarea
// //             placeholder="Paste your content here..."
// //             value={content}
// //             onChange={handleContentChange}
// //             className="content-input"
// //           />
// //         )}
// //         {selectedMethod === 'url' && (
// //           <input
// //             type="text"
// //             placeholder="Paste URL here..."
// //             value={content}
// //             onChange={handleContentChange}
// //             className="content-input"
// //           />
// //         )}
// //       </div>

// //       {/* Right Box */}
// //       <div className="right-box">
// //         <h3>Summarized Output:</h3>
// //         <div className="output-content">
// //           {content ? content : 'The output will appear here...'}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default ContentBox;



// // src/components/ContentBox.js
// import React, { useState } from 'react';
// import './ContentBox.css';

// function ContentBox() {
//   const [selectedMethod, setSelectedMethod] = useState(null);
//   const [content, setContent] = useState('');

//   const handleIconClick = (method) => {
//     setSelectedMethod(method);
//   };

//   const handleContentChange = (e) => {
//     setContent(e.target.value);
//   };

//   return (
//     <div className="content-box">
//       {/* Left Box */}
//       <div className="left-box">
//         {!selectedMethod && (
//           <div className="icons">
//             <div
//               className="icon"
//               onClick={() => handleIconClick('file')}
//               title="Upload File"
//             >
//               <span className="icon-text">Upload File</span>
//               📂
//             </div>
//             <div
//               className="icon"
//               onClick={() => handleIconClick('paste')}
//               title="Paste Content"
//             >
//               <span className="icon-text">Paste Content</span>
//               ✍️
//             </div>
//             <div
//               className="icon"
//               onClick={() => handleIconClick('url')}
//               title="Provide URL"
//             >
//               <span className="icon-text">Provide URL</span>
//               🌐
//             </div>
//           </div>
//         )}

//         {/* Input Field */}
//         {selectedMethod && selectedMethod === 'paste' && (
//           <textarea
//             placeholder="Paste your content here..."
//             value={content}
//             onChange={handleContentChange}
//             className="content-input"
//           />
//         )}
//         {selectedMethod === 'url' && (
//           <input
//             type="text"
//             placeholder="Paste URL here..."
//             value={content}
//             onChange={handleContentChange}
//             className="content-input"
//           />
//         )}
//       </div>

//       {/* Right Box */}
//       <div className="right-box">
//         <h3>Summarized Output:</h3>
//         <div className="output-content">
//           {content ? content : 'The output will appear here...'}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContentBox;




// src/components/ContentBox.js
import React, { useState } from 'react';
import axios from 'axios';
import './ContentBox.css';
import fileIcon from '../assets/file_icon.png'; // Import the file.png image
import pasteIcon from '../assets/paste-icon.png'; // Import the paste icon image
import urlIcon from '../assets/url-icon.png'; // Import the URL icon image

function ContentBox() {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [maxWordLimit, setMaxWordLimit] = useState(100); // Default max word limit

  const handleIconClick = (method) => {
    setSelectedMethod(method); // Set the selected input method
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setContent(''); // Clear content if file is selected
  };

  const handleMaxWordLimitChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {  // Check if the input is a number
      setMaxWordLimit(value);
    }
  };

  const beautifySummary = (text) => {
    if (!text) return '';
    // Split text into sentences and wrap each in a styled <p> tag
    const sentences = text.split(/(?<=[.!?])\s+/); // Split by punctuation followed by a space
    return sentences.map((sentence, index) => (
      <p key={index} className="beautified-text">
        {sentence.trim()}
      </p>
    ));
  };
  

  const resetSelection = () => {
    setSelectedMethod(null);
    setContent('');
    setFile(null);
    setSummary('');
    setMaxWordLimit(100); // Reset to default
  };

  const handleSummarize = async () => {
    if (!selectedMethod) {
      alert('Please select an input method.');
      return;
    }

    setLoading(true);
    setSummary('');

    try {
      const wordLimit = parseInt(maxWordLimit, 10); // Convert to integer

      // Ensure wordLimit is a valid number and greater than 0
      if (isNaN(wordLimit) || wordLimit <= 0) {
        alert('Please enter a valid word limit.');
        setLoading(false);
        return;
      }

      const formData = new FormData();
      formData.append('words_limit', wordLimit); // Attach word limit

      if (selectedMethod === 'file' && file) {
        // Summarize file
        formData.append('file', file);

        const response = await axios.post('http://localhost:8000/summarize/file', formData);
        setSummary(response.data.summary);
      } else if (selectedMethod === 'paste' && content) {
        // Summarize pasted content
        formData.append('text', content); // Send the pasted text

        const response = await axios.post('http://localhost:8000/summarize/text', formData);
        setSummary(response.data.summary);
      } else if (selectedMethod === 'url' && content) {
        // Summarize URL
        formData.append('url', content); // Add URL content

        const response = await axios.post('http://localhost:8000/summarize/url', formData);
        setSummary(response.data.summary);
      } else {
        alert('Invalid input. Please upload a file, provide a URL, or paste valid content.');
      }
    } catch (error) {
      console.error('Error summarizing:', error);
      alert('An error occurred while summarizing.');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (summary) {
      // Create a Blob from the summary text
      const blob = new Blob([summary], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);

      // Create a download link
      const link = document.createElement('a');
      link.href = url;
      link.download = 'summary.txt'; // File name for download
      link.click();

      // Clean up URL object
      URL.revokeObjectURL(url);
    }
  };

  // CSS class for content input based on method
  const contentInputClass = selectedMethod === 'paste' ? 'content-input paste' : selectedMethod === 'url' ? 'content-input url' : 'content-input';

  return (
    <div className="content-box-container">
      {/* Left Box */}
      <div className="content-box left-box">
        <div className="input-method-container">
        <h3 className="center-heading">Select Input Method</h3>

        </div>
        <div className="max-word-limit-container">
            <label>Max Word Limit:</label>
            <input
              type="text"
              value={maxWordLimit}
              onChange={handleMaxWordLimitChange}
              placeholder="Enter word limit"
              className="max-word-limit-input"
            />
        </div>
      
        <div className="content-input-container">
          {!selectedMethod && (
            <div className="icons">
              <div
                className="icon"
                onClick={() => handleIconClick('file')}
                title="Upload File"
              >
                <img src={fileIcon} alt="Upload File" className="icon-image" />
                <span className="icon-text">Upload File</span>
              </div>
              <div
                className="icon"
                onClick={() => handleIconClick('paste')}
                title="Paste Content"
              >
                <img src={pasteIcon} alt="Paste Content" className="icon-image" />
                <span className="icon-text">Paste Content</span>
              </div>
              <div
                className="icon"
                onClick={() => handleIconClick('url')}
                title="Provide URL"
              >
                <img src={urlIcon} alt="Provide URL" className="icon-image" />
                <span className="icon-text">Provide URL</span>
              </div>
            </div>
          )}

          {/* Content Input Field */}
          {selectedMethod === 'paste' && (
            <div className="upload-container">
              <textarea
                placeholder="Paste your content here..."
                value={content}
                onChange={handleContentChange}
                className={contentInputClass}
              />
            </div>
          )}
          {selectedMethod === 'url' && (
            <div className="upload-container">
              <input
                type="text"
                placeholder="Paste URL here..."
                value={content}
                onChange={handleContentChange}
                className={contentInputClass}
              />
            </div>
          )}
          {selectedMethod === 'file' && (
            <div className="upload-container">
              <input
                type="file"
                onChange={handleFileChange}
                className="file-input"
              />
            </div>
          )}
        </div>

        {/* Button to Reset Selection */}
        {selectedMethod && (
          <button className="reset-btn" onClick={resetSelection}>
            Change Selection
          </button>
        )}
      </div>

      {/* Right Box */}
      <div className="content-box right-box">
      <h3 className="center-heading">Summarized Output:</h3>

      <div className="output-content">
        <div className="output-scrollable">
          {loading ? (
            'Summarizing, please wait...'
          ) : (
            beautifySummary(summary) || 'The output will appear here...'
          )}
        </div>
      </div>


      </div>

      {/* Summarize Button */}
      <button className="summarize-btn" onClick={handleSummarize} disabled={loading}>
        Summarize
      </button>

      {/* Download Button */}
      {summary && (
        <button className="download-btn" onClick={handleDownload}>
          Download Summary
        </button>
      )}
    </div>
  );
}

export default ContentBox;
