import React from 'react';

export const App: React.FC = () => {
    return <div>{import.meta.env.VITE_PORT}</div>;
};
