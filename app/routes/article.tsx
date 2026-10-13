import React from 'react';

const Article = () => {
    return (
        <div className='bg-gray-100 min-h-screen text-gray-900 flex flex-col items-center justify-center gap-4'>
            <h1>Статті</h1>
            <p>Це сторінка статей. Тут можна розміщувати різні статті, новини або блоги.</p>

            <form className='flex flex-col gap-4 border border-gray-300 rounded-md p-4 w-1/2 bg-white shadow-md '>
                <label htmlFor="title">Заголовок статті:</label>
                <input type="text" id="title" name="title" placeholder="Введіть заголовок статті" />

                <label htmlFor="content">Текст статті:</label>
                <textarea id="content" name="content" placeholder="Введіть текст статті"></textarea>    

                <button type="submit">Опублікувати</button>
            </form>
        </div>
    );
}

export default Article;
