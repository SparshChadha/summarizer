from fastapi import FastAPI, File, UploadFile, Form
from fastapi.responses import JSONResponse
from langchain_groq import ChatGroq
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from PyPDF2 import PdfReader
from langchain_community.document_loaders import WebBaseLoader
import uvicorn
from fastapi.middleware.cors import CORSMiddleware

# Initialize the FastAPI app
app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to the Summarization API"}

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Frontend origin
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

# Initialize the ChatGroq model
grok_key = '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'
llm = ChatGroq(temperature=0, api_key=grok_key)

# Function to extract text from PDF
def extract_pdf_text(file):
    reader = PdfReader(file)
    text = ""
    for page in reader.pages:
        text += page.extract_text()
    return text

# Define summarization prompt
summarize_template = """Summarize the following content in {words_limit} words. 
Provide a clear, concise summary that captures the key points, ensuring the summary does not exceed the specified word limit.

{text}

Summary:

Important Highlights (bullet points in a new line, each point clearly defined):
- Point 1
- Point 2
- Point 3
- ...
"""


prompt = PromptTemplate(input_variables=["text", "words_limit"], template=summarize_template)

# Function to split text into manageable chunks
def split_text(text, chunk_size=4000, chunk_overlap=500):
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=chunk_size, chunk_overlap=chunk_overlap)
    return text_splitter.split_text(text)

# Function to summarize chunks and combine the results
def summarize_large_text(text, words_limit, chunk_size=4000, chunk_overlap=500):
    # Split text into chunks
    chunks = split_text(text, chunk_size, chunk_overlap)

    # Summarize each chunk
    chunk_summaries = []
    for chunk in chunks:
        chain = LLMChain(llm=llm, prompt=prompt)
        chunk_summary = chain.run({
            "text": chunk,
            "words_limit": words_limit // len(chunks)  # Proportionate limit per chunk
        })
        chunk_summaries.append(chunk_summary)

    # Combine chunk summaries into a single text
    combined_text = " ".join(chunk_summaries)

    # Generate a final summary of the combined text
    final_chain = LLMChain(llm=llm, prompt=prompt)
    final_summary = final_chain.run({
        "text": combined_text,
        "words_limit": words_limit
    })

    return final_summary

# Endpoint to summarize uploaded files
@app.post("/summarize/file")
async def summarize_file(file: UploadFile = File(...), words_limit: int = Form(...), text: str = Form(None)):
    try:
        # Check if direct text is provided, if not extract text from file
        if text:
            content_text = text
        else:
            # Extract text from the uploaded document
            if file.content_type == "application/pdf":
                content_text = extract_pdf_text(file.file)
            elif file.content_type == "text/plain":
                content_text = (await file.read()).decode("utf-8")
            else:
                return JSONResponse(status_code=400, content={"error": "Unsupported file format!"})

        # Summarize text
        summary = summarize_large_text(text=content_text, words_limit=words_limit)
        return {"summary": summary}
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})

# Endpoint to summarize content from a URL
@app.post("/summarize/url")
async def summarize_url(url: str = Form(...), words_limit: int = Form(...)):
    try:
        loader = WebBaseLoader(url)
        documents = loader.load()
        text = "\n".join([doc.page_content for doc in documents])

        # Summarize text
        summary = summarize_large_text(text=text, words_limit=words_limit)
        return {"summary": summary}
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})

# Endpoint to summarize direct text input
@app.post("/summarize/text")
async def summarize_text(text: str = Form(...), words_limit: int = Form(...)):
    try:
        # Summarize text
        summary = summarize_large_text(text=text, words_limit=words_limit)
        return {"summary": summary}
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e)})

if __name__ == "__main__":
    uvicorn.run(app, port=8000)
