import Navbar from './Navbar'
import Form from './Form'
import PageContent from './PageContent'
import './App.css';
import { ThemeProvider, ThemeContext } from "./contexts/ThemeContext";
import { LanguageProvider, LanguageContext } from "./contexts/LanguageContext";

function App() {
  return (
    
      <LanguageProvider>
        <ThemeProvider>
        <PageContent>
          <Navbar />
          <Form />
        </PageContent>
        </ThemeProvider>
      </LanguageProvider>
    
  );
}

export default App;