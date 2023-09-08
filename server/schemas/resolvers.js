const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models')
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
        binder: async(parent, args, context) => {
          return await Binder.findById(_id).populate(
            [{ path: 'maps', strictPopulate: false }],
            [{ path: 'notes', strictPopulate: false }]
          )
        },
        notes: async(parent, args, context) => {
          return await Notes.findById(_id);
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

            const user = await User.findOneAndUpdate(
              {_id: context.user._id},
              {$push: {binders: binder.id}})
          }
        },
        addNote: async (parent, args, context) => {
          if (context.user) {
            const note = await Note.create(args);

            const user = await User.findOneAndUpdate(
              {_id: context.user._id},
              {$push: {notes: note.id}})
          }
        },
        addMap: async (parent, args, context) => {
          if (context.user) {
            const map = await Maps.create(args);

            const user = await User.findOneAndUpdate(
              {_id: context.user._id},
              {$push: {maps: map.id}})
          }
        },
        addToken: async (parent, args, context) => {
          if (context.user) {
            const token = await Token.create(args);

            const map = await Map.findOneAndUpdate(
              {_id: args.map},
              {$push: {tokens: token.id}})
          }
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