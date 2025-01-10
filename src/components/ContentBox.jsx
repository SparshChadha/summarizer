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
import './ContentBox.css';

function ContentBox() {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);

  const handleIconClick = (method) => {
    setSelectedMethod(method);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setContent(''); // Clear content if file is selected
  };

  const resetSelection = () => {
    setSelectedMethod(null);
    setContent('');
    setFile(null);
  };

  const handleSummarize = () => {
    alert('Summarizing content...');
  };

  return (
    <div className="content-box-container">
      {/* Left Box */}
      <div className="content-box left-box">
        <h3>Select Input Method</h3>
        <div className="content-input-container">
          {!selectedMethod && (
            <div className="icons">
              <div
                className="icon"
                onClick={() => handleIconClick('file')}
                title="Upload File"
              >
                <span className="icon-text">Upload File</span>
                📂
              </div>
              <div
                className="icon"
                onClick={() => handleIconClick('paste')}
                title="Paste Content"
              >
                <span className="icon-text">Paste Content</span>
                ✍️
              </div>
              <div
                className="icon"
                onClick={() => handleIconClick('url')}
                title="Provide URL"
              >
                <span className="icon-text">Provide URL</span>
                🌐
              </div>
            </div>
          )}

          {/* Content Input Field */}
          {selectedMethod === 'paste' && (
            <textarea
              placeholder="Paste your content here..."
              value={content}
              onChange={handleContentChange}
              className="content-input"
            />
          )}
          {selectedMethod === 'url' && (
            <input
              type="text"
              placeholder="Paste URL here..."
              value={content}
              onChange={handleContentChange}
              className="content-input"
            />
          )}
          {selectedMethod === 'file' && (
            <input
              type="file"
              onChange={handleFileChange}
              className="file-input"
            />
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
        <h3>Summarized Output:</h3>
        <div className="output-content">
          {content || (file ? 'File selected, please wait for processing...' : 'The output will appear here...')}
        </div>
      </div>

      {/* Summarize Button */}
      <button className="summarize-btn" onClick={handleSummarize}>
        Summarize
      </button>
    </div>
  );
}

export default ContentBox;
