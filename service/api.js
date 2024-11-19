import axios from 'axios';

const BASE_URL = "http://192.168.1.178:5000/api/notes";

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
