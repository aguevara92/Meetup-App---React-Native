
import Group from './model';

export const createGroup = async (req, res) => {
    const {
        name,
        description,
        category
    } = req.body;

    const newGroup = new Group ({ name, description });


    if ( !name ) {
        return res.status(400).json({error: true, message: 'Name must be provided'});
    } else if ( typeof name !== 'string' ){
        return res.status(400).json({error: true, message: 'Name must be a string'});
    } else if ( name.length < 5 ){
        return res.status(400).json({error: true, message: 'Name is too short'});
    }

    if ( !description ) {
        return res.status(400).json({error: true, message: 'Description must be provided'});
    } else if ( typeof description !== 'string' ){
        return res.status(400).json({error: true, message: 'Description must be a string'});
    } else if ( description.length < 10 ){
        return res.status(400).json({
            error: true,
            message: 'Description is too short'
        });
    }

    try {
        return res.status(201).json({
            error: false,
            group: await newGroup.save()
        });
    } catch (e) {
        return res.status (e.status).json({
            error: true,
            message: 'Error with Group'
        });
    }
}

export const createGroupMeetup = async (req, res) => {
    const { title, description } = req.body;
    const { groupId } = req.params;

    if ( !title ) {
        return res.status(400).json({error: true, message: 'Title must be provided'});
    } else if ( typeof title !== 'string' ){
        return res.status(400).json({error: true, message: 'Title must be a string'});
    } else if ( title.length < 5 ){
        return res.status(400).json({error: true, message: 'Title is too short'});
    }

    if ( !description ) {
        return res.status(400).json({error: true, message: 'Description must be provided'});
    } else if ( typeof description !== 'string' ){
        return res.status(400).json({error: true, message: 'Description must be a string'});
    } else if ( description.length < 10 ){
        return res.status(400).json({error: true, message: 'Description is too short'});
    }

    if (!groupId){
        return res.status(400).json({error: true, message: 'GroupId must be provided'});
    }


    try {
        //group: await newGroup.save()
        const [meetup, group] = await Group.addMeetup(groupId, { title, description });
        //console.log(result);
        return res.status(201).json({
            meetup,
            group
        });
    } catch (e) {
        return res.status (e.status).json({
            error: true,
            message: 'Meetup cannot be created'
        });
    }
}

