import axios from 'axios';

const BASE_URL = "http://172.20.10.4:5000/api/notes";

// Function to save the note
export const saveNote = async (title, note) => {
    console.log(note)
    try {
        const response = await axios.post(BASE_URL, {
            title: title,
            note: note
        });
        return response.data; // Assuming the backend returns the saved note or success message
    } catch (error) {
        console.error("Error saving note:", error);
        throw error;
    }
};
export const fetchNotes = async () => {
    try {
        const response = await axios.get(BASE_URL); // Assuming GET method is used to fetch notes
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error("Error fetching notes:", error);
        throw error; // Throw error to handle it in the component
    }
};