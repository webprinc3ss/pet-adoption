import React from 'react';
//See SearchBook.js from Book Project

const Home = () => {
    return (
        <>
            <h1>Search for Pets</h1>
            <form>
                <input></input>
                <button type='submit' variant='success' size='lg'>
                    Submit Search
                            </button>
            </form>
            <br></br>
            <div>Pet Cards go here.</div>
        </>
    )
}

export default Home;