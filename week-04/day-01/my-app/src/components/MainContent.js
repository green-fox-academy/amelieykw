import React from 'react';

import Sidebar from './Sidebar';
import Main from './Main';

function MainContent() {
    return (
        <div className="mainContent">
            <Sidebar />
            <Main />
        </div>
    );
}

export default MainContent;