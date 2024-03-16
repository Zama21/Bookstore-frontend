import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from '../providers/StoreProvider/StoreProvider.jsx';
import { AuthProvider } from '../../../auth/ui/providers/AuthProvider/AuthProvider.jsx';

export const withProviders = component => props => {
    return (
        <StoreProvider>
            <BrowserRouter>
                <AuthProvider>{component(props)}</AuthProvider>
            </BrowserRouter>
        </StoreProvider>
    );
};
