import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from './constants/Colors';
// import { HomeScreen } from './src/screens';
import { cachedFonts } from './helpers';
import { LoadingScreen } from './src/commons';
import Root from './src/Root';

EStyleSheet.build(Colors);

export default class App extends React.Component {
    state = {
        fontLoaded: false,
    }

    componentDidMount() {
        this._loadAssetsAsync();
    }

    async _loadAssetsAsync() {
        const fontAssets = cachedFonts([
            {
                lato: require('./assets/fonts/Lato-Regular.ttf'),
            },
            {
                latoBold: require('./assets/fonts/Lato-Bold.ttf'),
            },
            {
                latoLight: require('./assets/fonts/Lato-Light.ttf'),
            },
        ]);
        await Promise.all(fontAssets);

        this.setState({ fontLoaded: true });
    }

    render() {
        if (!this.state.fontLoaded) {
            return <LoadingScreen />;
        }
        return <Root />;
    }
}
