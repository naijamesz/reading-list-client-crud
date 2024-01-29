// BookCreate component = child component of App component.
import { useState } from 'react';

export default function BookCreate({ onCreate }) {
  const [title, setTitle] = useState('');

  const handleChange = e => {
    setTitle(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onCreate(title);
    setTitle('');
  };

  return (
    <div className='book-create'>
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>

        <input className='input is-rounded' value={title} onChange={handleChange} />
        <button className='button'>Create!</button>
      </form>
    </div>
    // <div className='wrapper'>
    //   <h2 style={{ fontSize: '1.5rem', margin: '1rem' }}>Add a title book</h2>
    //   <form onSubmit={handleSubmit}>
    //     <input className='input' value={title} onChange={handleChange} placeholder='Book title' />
    //     <button
    //       style={{
    //         backgroundColor: 'green',
    //         color: 'white',
    //         fontSize: '1rem',
    //         height: '2.25rem',
    //         boxShadow: '0.15rem 0.1rem 0.125rem 0.15rem rgba(121, 121, 121, 0.65)',
    //       }}
    //       type='submit'
    //       disabled={!title}
    //       className='button-create'>
    //       Create!
    //     </button>
    //   </form>
    // </div>
  );
}
