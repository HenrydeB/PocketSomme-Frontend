import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation';
import Home from './routes/home';
import Authentication from './routes/authentication';
import EditWine from './routes/edit-wine';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="auth" element={<Authentication />} />
                <Route path="edit-wine" element={<EditWine />} />
            </Route>
        </Routes>
    );
};

export default App;
