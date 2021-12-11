import React from 'react';

function Home() {
    return (
        <div className="home-page-container">
            <div className="iframe-container" id="iframe-container">
                <iframe width="340" height="360" src="https://www.youtube.com/embed/lc50eScMkjI?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default Home;