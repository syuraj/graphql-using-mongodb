import mongoose from 'mongoose';

const Profile = mongoose.model('Profile', {
    id: String,
    name: String,
    title: String,
    workplace: String
});

const Notification = mongoose.model('Notification', {
    id: String,
    name: String
});


export default {
    Profile, Notification
};
