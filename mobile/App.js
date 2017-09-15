import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { fetchMeetups } from './constants/api'

export default class App extends React.Component {
    
    static defaultProps = {
        fetchMeetups
    }

    state = {
        loading: false,
        meetups: []
    }


    async componentWillMount () {
        this.setState({ loading:true });
        let data = await this.props.fetchMeetups();

        this.setState({ loading: false, meetups: data.meetups });
    }
     
    
    render() { 
        if (this.state.loading){
            console.log('is loading');
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large"/>
                </View>
            )
        } 
            
        return (
            <View style={styles.container}>
            
            {this.state.meetups.map((meetup, i) => (
                <Text key = {i}>{meetup.title}</Text>
            ))}

            
            </View>
        );        
    }
}

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
    }
);
