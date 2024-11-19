// navigation/types.ts or types.ts

export type RootStackParamList = {
    HomeScreen: undefined; // No parameters for HomeScreen
    CreateNoteScreen: { title: string; note: string }; // Parameters for CreateNoteScreen
};
