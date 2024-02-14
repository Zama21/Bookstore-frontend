import { StoreProvider } from './StoreProvider/StoreProvider.jsx';

export const withProviders = (component) => (props) => {
    return <StoreProvider>{component(props)}</StoreProvider>;
};
