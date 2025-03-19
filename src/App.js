import { Route, Routes } from 'react-router-dom';

import CompletionPage from './pages/CompletionPage';
import SurveyPage from './pages/SurveyPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/done" element={<CompletionPage />} />
        <Route path="/survey/:surveyId/:step" element={<SurveyPage />} />
      </Routes>
    </div>
  );
}

export default App;
