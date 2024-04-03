import React, { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from 'react';

export interface TagData {
    name: string,
    count: number,
}

export interface DataContextType {
    tagsData: TagData[];
    setTagsData: Dispatch<SetStateAction<TagData[]>>;
    sortBy: string;
    setSortBy: Dispatch<SetStateAction<string>>;
    sortOrder: string;
    setSortOrder: Dispatch<SetStateAction<string>>;
}

interface DataProviderProps {
    children: ReactNode;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
    const [tagsData, setTagsData] = useState<TagData[]>([]);
    const [sortBy, setSortBy] = useState<string>('count');
    const [sortOrder, setSortOrder] = useState<string>('desc');

    return (
        <DataContext.Provider value={{ tagsData, setTagsData, sortBy, setSortBy, sortOrder, setSortOrder }}>
            {children}
        </DataContext.Provider>
    );
};

export const useContextData = (): DataContextType => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useContextData must be used within a DataProvider');
    }
    return context;
};