export default {
    Query: {
        getProfile: async (parent, args, { Profile }) => {
            // Profile is mongo collection passed through Apollo context
            const profile = await Profile.findOne({ 'name': args.name });
            return profile;
        }
    },
    Mutation: {
        createProfile: async (parent, args, { Profile }) => {
            const profile1 = await new Profile(args).save();
            profile1._id = profile1._id.toString();
            return profile1;
        }
    }
};
