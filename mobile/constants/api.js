import axios from 'axios';

axios.defaults.baseURL = 'http://10.120.80.251:3000/api';

const fakeGroupID = '59c52613b824f142c0e7ee96';

class MeetupApi {
    constructor() {
        this.groupId = fakeGroupID;
        this.path = `/groups/${this.groupId}/meetups`;
    }

    async fetchGroupMeetups() {
        const { data } = await axios.get(this.path);
        return data.meetups;
    }
}

export {
    MeetupApi,
};
/*
export const fetchMeetups = () => {
    return fetch('http://10.120.80.251:3000/api/meetups')
        .then((response) => {
            if (response) {
                return response.json();
            } else {
                throw new Error('Server response wasn\'t OK');
            }
        })
        .then((json) => {
            return json;
        });
}
*/
