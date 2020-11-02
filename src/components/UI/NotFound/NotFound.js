import React from 'react';
import classes from './NotFound.css';
import {Link} from 'react-router-dom';

const test = () => {
    return (
        <div className={`container text-center ${classes.ErrorWrapper}`}>
    <div className="row">
        <div className="col-md-12">
            <div className={classes.ErrorTemplate}>
                <h1>
                    Oops!</h1>
                <h2>
                    404 Not Found</h2>
                <div className={classes.ErrorActions}>
                    Sorry, an error has occured, Requested page not found!
                </div>
                <div className={classes.ErrorActions}>
                    <Link to={'/launch/'} className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-home"></span>
                        Take Me Home </Link>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}

export default test;