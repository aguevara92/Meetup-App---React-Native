import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles/MyMeetupList';

const MyMeetupList = ({ meetups }) => (
    <View style={styles.root}>

        <View style={styles.titleContainer}>
            <Text style={styles.title}>My meetups</Text>
        </View>

        <ScrollView horizontal style={styles.contentContainer}>

            {meetups.map((meetup, i) => (
                <View key={i} style={styles.meetupCard}>
                    <View style={styles.meetupCardInner}>
                        <View style={styles.meetupCardTopContainer}>
                            <Text style={styles.meetupCardTitle}>
                                {meetup.title}
                            </Text>
                        </View>
                        <View style={styles.meetupCardBottomContainer}>
                            <Text style={styles.meetupCardMetaName}>
                                {meetup.group[0].name}
                            </Text>
                            <Text style={styles.meetupCardMetaDate}>
                                -
                            </Text>
                        </View>
                    </View>
                </View>
            ))}

        </ScrollView>

    </View>
);

export default MyMeetupList;
