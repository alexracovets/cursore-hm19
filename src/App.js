import Navigation from "./components/Navigation/Navigation";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Photos from "./pages/photos/Photos";
import Publications from "./pages/publications/Publications";
import Contacts from "./pages/contacts/Contacts";
import Page404 from "./pages/Page404/Page404";
import PhotoDetail from "./pages/photoDetail/PhotoDetail";
import React from "react";

function App() {
    return (
        <React.Fragment>
            <Navigation/>
            <Routes>
                <Route index element={<Home/>} />
                <Route path="photos" element={<Photos/>}/>
                <Route path="photos/:photoId" element={<PhotoDetail/>} />
                <Route path="publications" element={<Publications/>} />
                <Route path="contacts" element={<Contacts/>} />
                <Route path="*" element={<Page404/>} />
            </Routes>
        </React.Fragment>
    );
}

export default App;