import mongoose, { Schema } from 'mongoose';

const GroupSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, 'Name must be 5 characters long'],
    },
    description: {
        type: String,
        required: true,
        minlength: [5, 'Description must be 5 characters long'],
    },
    category: {
        type: String,
        // required: true
    },
    meetups: [{
        type: Schema.Types.ObjectId,
        ref: 'Meetup',
    }],
}, { timestamps: true });

/*
* Create a meetup and add it to the meetups array in the group
*/

GroupSchema.statics.addMeetup = async function (id, args) {
    const Meetup = mongoose.model('Meetup');
    // We add the group ID to the meetup group element
    // Finally this is the author mof the meetup
    const meetup = await new Meetup({ ...args, group: id });
    // We found the group with the ID provide in the URL
    // And we push the meetup ID in the meetups element
    const group = await this.findByIdAndUpdate(id, { $push: { meetups: meetup.id } });

    // const result = await Promise.all([meetup.save(), group.save()]);

    return {
        meetup: await meetup.save(),
        group,
    };
};

export default mongoose.model('Group', GroupSchema);
