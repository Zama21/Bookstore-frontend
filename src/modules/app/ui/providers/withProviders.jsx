import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from './StoreProvider/StoreProvider.jsx';

export const withProviders = component => props => {
    return (
        <StoreProvider>
            <BrowserRouter>{component(props)}</BrowserRouter>
        </StoreProvider>
    );
};
