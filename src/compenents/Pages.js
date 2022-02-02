import React, { useState } from "react";
import { Pagination } from "semantic-ui-react";


function Pages ({ page }) {
    const [activePage, setActivePage] = useState(1)
    console.log(page)
    return (
        <div className="ui one column stackable center aligned page grid middle aligned pages">
            <Pagination className="ui center" defaultActivePage={activePage} totalPages={5} />
        </div>
    )
};

export default Pages;