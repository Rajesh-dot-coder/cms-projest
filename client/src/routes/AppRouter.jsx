import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Signin from '../pages/Signin';
import SignUp from '../pages/SignUp';

function AppRouter(props) {
    return (
        <Routes>
				<Route index element={<Home />} />
				<Route path="/home" element={<Home />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<SignUp />} />
        </Routes>
    );
}

export default AppRouter;