import { BrowserRouter, Routes , Route } from "react-router-dom";
import { Box } from '@mui/material';
import ErrorBoundary from "./components/ErrorBoundary";

import { ChannelDetail, VideoDetail, SearchFeed, Navbar , Feed } from './components';

const App = () => (
 <BrowserRouter>
 <ErrorBoundary>
    <Box sx ={{ backgroundColor : '#000' }}>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path = '/video/:id' element={<VideoDetail />} />
        <Route path = '/channel/:id' element={<ChannelDetail />} />
        <Route path = '/search/:searchTerm' element={<SearchFeed />} />
       </Routes>
      </Box>
     </ErrorBoundary>
    </BrowserRouter>
);

export default App;



