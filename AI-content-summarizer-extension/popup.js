document.getElementById("summarizeBtn").addEventListener("click", async () => {
    const url = document.getElementById("urlInput").value;
    if (!url) {
      alert("Please enter a URL.");
      return;
    }
  
    const response = await fetch("https://your-api.com/summarize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url })
    });
    const summary = await response.json();
    document.getElementById("summaryResult").innerText = summary.result;
  });
  
  document.getElementById("uploadBtn").addEventListener("click", async () => {
    const file = document.getElementById("fileInput").files[0];
    if (!file) {
      alert("Please select a file.");
      return;
    }
  
    const formData = new FormData();
    formData.append("file", file);
  
    const response = await fetch("https://your-api.com/summarize-file", {
      method: "POST",
      body: formData
    });
    const summary = await response.json();
    document.getElementById("summaryResult").innerText = summary.result;
  });
  