import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MeetupApi } from '../../../constants/api';
import styles from './styles/HomeScreen';
import { LoadingScreen } from '../../commons';
import { MyMeetupList } from './components/';

const meetupApi = new MeetupApi();

class HomeScreen extends Component {
    static defaultProps = {
        meetupApi,
    }

    state = {
        loading: false,
        meetups: [],
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
