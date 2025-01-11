const API_BASE_URL = 'http://localhost:8000';  // Adjust for production if needed

export const summarizeService = {
    // Summarize a file
    async summarizeFile(file, wordsLimit) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('words_limit', wordsLimit);

        try {
            const response = await fetch(`${API_BASE_URL}/summarize/file`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                let error;
                try {
                    error = await response.json();
                } catch (e) {
                    throw new Error('Unexpected server error');
                }
                throw new Error(error.error || 'Failed to summarize file');
            }
            return response.json();
        } catch (error) {
            console.error('Error in summarizeFile:', error);
            throw error;
        }
    },

    // Summarize a URL
    async summarizeUrl(url, wordsLimit) {
        const formData = new FormData();
        formData.append('url', url);
        formData.append('words_limit', wordsLimit);
        try {
            const response = await fetch(`${API_BASE_URL}/summarize/url`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                let error;
                try {
                    error = await response.json();
                } catch (e) {
                    throw new Error('Unexpected server error');
                }
                throw new Error(error.error || 'Failed to summarize URL');
            }
            return response.json();
        } catch (error) {
            console.error('Error in summarizeUrl:', error);
            throw error;
        }
    },

    // Summarize direct text input
    async summarizeText(text, wordsLimit) {
        const formData = new FormData();
        formData.append('text', text);
        formData.append('words_limit', wordsLimit);

        try {
            const response = await fetch(`${API_BASE_URL}/summarize/text`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                let error;
                try {
                    error = await response.json();
                } catch (e) {
                    throw new Error('Unexpected server error');
                }
                throw new Error(error.error || 'Failed to summarize text');
            }
            return response.json();
        } catch (error) {
            console.error('Error in summarizeText:', error);
            throw error;
        }
    }
};
