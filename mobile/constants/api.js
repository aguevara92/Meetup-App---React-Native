export const fetchMeetups = () => {
    return fetch ('http://10.120.80.251:3000/api/meetups')
    .then((response) => {
        if(response) {
            return response.json();
        } else {
            throw new Error('Server response wasn\'t OK');
        }
    })
    .then((json) => {
        return json;
    });
  
}



  
