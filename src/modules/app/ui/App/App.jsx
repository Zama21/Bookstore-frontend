import { AppRouter } from '../components/AppRouter/AppRouter.jsx';
import { GlobalHeader } from '../components/GlobalHeader/GlobalHeader.jsx';
import { withProviders } from '../providers/withProviders.jsx';

export const App = withProviders(() => {
    return (
        <>
            <GlobalHeader />
            <AppRouter />
        </>
    );
});
