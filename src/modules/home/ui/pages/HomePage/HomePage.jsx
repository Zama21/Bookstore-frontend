import { BasePageLayout } from 'modules/home/ui/pages/BasePageLayout/BasePageLayout.jsx';
import { CategoryTop } from '../../widgets/CategoryTop/CategoryTop.jsx';
import cls from './HomePage.module.css';
import { CategoryNew } from '../../widgets/CategoryNew/CategoryNew.jsx';
import { CategoryRelevant } from '../../widgets/CategoryRelevant/CategoryRelevant.jsx';

export const HomePage = () => {
    return (
        <BasePageLayout title={'Главная'}>
            <div>
                <p className={cls.description}>
                    Литтеррия — наиуникальнейший проект для выпуска и продажи книг. Здесь каждый автор
                    найдёт своего читателя, а каждый читатель - свою книгу. Мы стремимся к тому, чтобы
                    каждая книга, выпущенная под брендом Литтеррия, была уникальной и неповторимой,
                    вызывая яркие эмоции у своих читателей. Мы верим, что слово способно изменить мир, а
                    книга - это инструмент передачи этой мудрости от поколения к поколению.
                </p>

                <CategoryTop />
                <CategoryNew />
                <CategoryRelevant />
            </div>
        </BasePageLayout>
    );
};
