import React, {createContext, useContext, useState, ReactNode} from 'react';

type Tapestry = {
    states: boolean[]; // Array to hold the states of the tapestries
};

// Define the context type
interface ResponseContextType {
    statesDict: Tapestry;
    setTapState: React.Dispatch<React.SetStateAction<Tapestry>>;
    resetStates: () => void; // Add reset function to context
}

// Create the context with default values
const IndexContext = createContext<ResponseContextType | undefined>(undefined);

// Create a provider component
export const StatesProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    // Initialize tapestry states with three true values
    const [statesDict, setTapState] = useState<Tapestry>({
        states: [false, false, false, false, false, false, false,
            false, false]
    });

    // Function to reset states to all true
    const resetStates = () => {
        setTapState({states: [true, true, true]});
    };

    return (
        <IndexContext.Provider value={{statesDict, setTapState, resetStates}}>
            {children}
        </IndexContext.Provider>
    );
};

// Create a custom hook for easy access to the context
export const useTapestry = () => {
    const context = useContext(IndexContext);
    if (!context) {
        throw new Error('useTapestry must be used within a StatesProvider');
    }
    return context;
};
