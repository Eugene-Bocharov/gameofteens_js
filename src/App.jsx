import React, { Component } from 'react';
import styles from "./App.module.css";
import { withTranslation } from 'react-i18next';

class App extends Component {
    state = {
        currentLanguage: null,
    }

    componentDidMount() {
        const language = localStorage.getItem("language");
    
        if (language !== "null") {
          this.setState({
            currentLanguage: language,
          });

          localStorage.setItem("language", language);
        } else {
          this.setState({
            currentLanguage: "en",
          });

          localStorage.setItem("language", "en");
        }
    }

    render() { 
        return (
            <>
                <h1 className={styles.mainTitle}>{this.props.t('Greeting')}</h1>
            </>
        );
    }
}
 
export default withTranslation()(App);