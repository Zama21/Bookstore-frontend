import { BasePageLayout } from '../../../../home/ui/pages/BasePageLayout/BasePageLayout';
import { BooksList } from '../../widgets/BooksList/BooksList.jsx';
import { FiltersPanel } from '../../widgets/FiltersPanel/FiltersPanel.jsx';
import cls from './CatalogPage.module.css';

export const CatalogPage = () => {
    return (
        <BasePageLayout title={'Каталог'}>
            <section className={cls.content}>
                <FiltersPanel />
                <BooksList />
            </section>
        </BasePageLayout>
    );
};
