import { ThemeProvider } from "styled-components"
import GlobalStyle from "./globalStyles"
import { lightTheme} from "./components/Theme"
import Main from "./components/Main";
import BlogPage from "./components/BlogPage";
import MySkillsPage from "./components/MySkillsPage";
import AboutPage from "./components/AboutPage"
import WorkPage from "./components/WorkPage"
import Contact from "./components/Contact";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

function App() {
 
  const options = {
    timeout: 5000,
    position: positions.BOTTOM_CENTER
  };
  return <>

<GlobalStyle/>

<ThemeProvider theme={lightTheme}>
<Main/>
<AboutPage/>
<BlogPage/>
<MySkillsPage/>
<WorkPage/>
<Provider template={AlertTemplate} {...options}>

<Contact/>
</Provider>
</ThemeProvider>




    
  </>
}

export default App