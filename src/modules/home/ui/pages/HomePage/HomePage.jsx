import { BasePageLayout } from 'modules/home/ui/pages/BasePageLayout/BasePageLayout.jsx';
import { BooksCategory } from '../../components/BooksCategory/BooksCategory.jsx';

export const HomePage = () => {
    return (
        <BasePageLayout title={'Главная'}>
            <BooksCategory />
        </BasePageLayout>
    );
};
