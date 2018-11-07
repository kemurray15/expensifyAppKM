import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        {/* We don't want to do the below because that href will point us back to the server
        rather than our javascript*/}
        {/* 404 - <a href="/"> Go home</a> */}
        404 - <Link to="/">Go home</Link>
    </div>
);

export default NotFoundPage;