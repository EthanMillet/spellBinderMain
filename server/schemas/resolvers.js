const { AuthenticationError } = require('apollo-server-express');
const { User, Binder, Maps, Note, Token } = require('../models')
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
              const user = await User.findOne({_id: context.user._id}).populate(
                [{path: 'binders', strictPopulate: false}]
              )
              return user;
            }
              throw new AuthenticationError('Not logged in');
            },
        binder: async(parent,{_id}) => {
          return await Binder.findById(_id)
        },
        notes: async(parent, args, context) => {
          return await Note.findById(_id);
        }
              
    },
    Mutation: {
        addUser: async (parent, args, context) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
          },
        addBinder: async (parent, args, context) => {
          if (context.user) {
            const binder = await Binder.create(args);

            await User.findOneAndUpdate(
              {_id: context.user._id},
              {$push: {binders: binder}})
              return binder;
          }
        },
        addNote: async (parent, args, context) => {
          if (context.user) {
            const note = await Note.create(args);

            await User.findOneAndUpdate(
              {_id: context.user._id},
              {$push: {notes: note.id}})
          }
        },
        addMap: async (parent, args, context) => {
          if (context.user) {
            const map = await Maps.create(args);

            await User.findOneAndUpdate(
              {_id: context.user._id},
              {$push: {maps: map.id}})
          }
        },
        addToken: async (parent, args, context) => {
          if (context.user) {
            const token = await Token.create(args);

            await Map.findOneAndUpdate(
              {_id: args.map},
              {$push: {tokens: token.id}})
          }
        },
        deleteBinder: async(parent, args, context) => {
          if (context.user) {
            await Binder.findOneAndDelete({_id, userId: context.user._id});
            await User.findByIdandUpdate(context.user._id, {$pull: { outfits: _id }});
            return _id;
          }
          throw new AuthenticationError('Not logged in');
        },
        deleteNote: async(parent, args, context) => {
          if (context.user) {
            await Note.findOneAndDelete({_id, userId: context.user._id});
            await User.findByIdandUpdate(context.user._id, {$pull: { outfits: _id }});
            return _id;
          }
          throw new AuthenticationError('Not logged in');
        },
        deleteMap: async(parent, args, context) => {
          if (context.user) {
            await Maps.findOneAndDelete({_id, userId: context.user._id});
            await User.findByIdandUpdate(context.user._id, {$pull: { outfits: _id }});
            return _id;
          }
          throw new AuthenticationError('Not logged in');
        },
        deleteToken: async(parent, args, context) => {
          if (context.user) {
            await Token.findOneAndDelete({_id, userId: context.user._id});
            await User.findByIdandUpdate(context.user._id, {$pull: { outfits: _id }});
            return _id;
          }
          throw new AuthenticationError('Not logged in');
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
      
            return { token, user };
          }
    },
};

module.exports = resolvers;