import ModalAwareness from 'modules/modals/ui/Components/Modals/ModalAwareness/ModalAwareness.jsx';
import stl from './AboutLitterria.module.css';
import React from 'react';

export const AboutLitteriaModal = props => {
    const data = {
        title: 'О Литтеррии',
        text: (
            <>
                <p>
                    <span className={`${stl.keyword}`}>Литтеррия </span> — наиуникальнейший проект для
                    выпуска и продажи книг. Здесь каждый автор найдёт своего читателя, а каждый читатель
                    - свою книгу. Мы стремимся к тому, чтобы каждая книга, выпущенная под брендом
                    Литтеррия, была уникальной и неповторимой, вызывая яркие эмоции у своих читателей. Мы
                    верим, что слово способно изменить мир, а книга - это инструмент передачи этой
                    мудрости от поколения к поколению.
                </p>
                <p>
                    Литтеррия стремится быть не просто издательством, а центром культурного развития, где
                    каждая книга становится частью чего-то большего, чем просто текст на бумаге. Мы
                    поддерживаем молодых и талантливых авторов, помогая им воплотить их идеи в
                    реальность, а также работаем с опытными писателями, чтобы предложить читателям самое
                    интересное и разнообразное чтение.
                </p>
                <p>
                    Мы верим, что книга способна не только открывать новые миры и идеи, но и вдохновлять
                    на действия, изменяя взгляды и жизни людей. Наши книги - это не просто страницы, а
                    возможность погрузиться в приключения, пережить судьбы героев, обрести новые знания и
                    обогатить свой внутренний мир.
                </p>
                <p>
                    Мы стремимся создать сообщество любителей книг, где каждый найдет не только то, что
                    искал, но и что-то, о чем даже не задумывался. Литтеррия - это место, где слова
                    оживают и становятся частью каждого, кто открывает страницы наших книг.
                </p>
            </>
        ),
        btnText: 'Понятно',
    };
    return <ModalAwareness {...data} {...props} />;
};