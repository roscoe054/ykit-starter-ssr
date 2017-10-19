import React from 'react';

import Link from '../ssr/share/link';

const Home = (props) => {
    return (
        <div>
            <h1>Home Page</h1>
            {
                props.posts ? Object.keys(props.posts).map((key, i) => {
                    const show = props.posts[key].show;
                    return (
                        <Link key={i} to={`/detail/${key}`}>
                            <h3>{show.name}</h3>
                            <p>{show.summary}</p>
                            <hr/>
                        </Link>
                    )
                }) : null
            }
        </div>
    )
}

export default Home
