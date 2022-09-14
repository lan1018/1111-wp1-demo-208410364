import React from 'react';
import Book_64 from './Book_64';
import { data } from './data';

const Booklist_64 = () => {
    return (
      <section className='bookList'>
        { data.map( (book, index) => {
          const {id, img, title, author } = book;
          return <Book_64 key={id} img={img} title={title} author={author}/>
        })}
      </section>
    );
  }

export default Booklist_64;