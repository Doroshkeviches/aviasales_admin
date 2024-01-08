import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundaryComp from './components/error-boundary.comp';
import AppRoutes from './app.routes';
// import './app.sass';
import { Provider } from "react-redux";
import store from "./store";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";

function App() {


  return (
    <ErrorBoundaryComp>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <AppRoutes />
          </Router>
        </ThemeProvider>
      </Provider>
    </ErrorBoundaryComp>
  );
}

export default App;
