import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MeetupApi } from '../../../constants/api';
import { LoadingScreen } from '../../commons';
import { MyMeetupList } from './components/';
import Colors from '../../../constants/Colors';
import styles from './styles/HomeScreen';

const meetupApi = new MeetupApi();

class HomeScreen extends Component {
    static defaultProps = {
        meetupApi
    }

    static navigationOptions = {
        headerStyle: {
            backgroundColor: Colors.redColor,
        },
        tabBarIcon: ({ tintColor }) => (
            <FontAwesome
                name="home"
                size={25}
                color={tintColor}
            />
        )
    }

    state = {
        loading: false,
        meetups: []
    }

    async componentDidMount() {
        this.setState({ loading: true });
        const meetups = await this.props.meetupApi.fetchGroupMeetups();
        this.setState({ loading: false, meetups });
    }

    render() {
        if (this.state.loading) {
            return (
                <LoadingScreen />
            );
        }
        console.log(this.state.meetups);

        return (
            <View style={styles.root}>
                <View style={styles.topContainer}>
                    <Text>Home Screen</Text>
                </View>
                <View style={styles.bottomContainer}>
                    <MyMeetupList meetups={this.state.meetups} />
                </View>
            </View>
        );
    }
}

export default HomeScreen;
