import React from 'react';
//See SearchBook.js from Book Project

const Home = () => {
    return (
        <section>
            <h2>Search for Pets</h2>
            <form>
                <input></input>
                <button type='submit' variant='success' size='lg'>
                    Submit Search
                            </button>
            </form>
            <br></br>
            <div>Pet Cards go here.</div>
        </section>
    )
}

export default Home;