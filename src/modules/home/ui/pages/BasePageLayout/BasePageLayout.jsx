import cls from './BasePageLayout.module.css';

export const BasePageLayout = ({ children, title }) => {
    return (
        <main className={cls.main}>
            <h1 className={cls.title}>{title}</h1>
            {children}
        </main>
    );
};
