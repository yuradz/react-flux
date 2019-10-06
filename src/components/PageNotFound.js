import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
    return (
        <div>
            <h2>Page not found</h2>
            <p>
                <Link to="/">Back to home page</Link>
            </p>
        </div>
    )
}

export default PageNotFound;