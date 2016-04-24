Meteor.publish('posts', function(userName) {
    return Posts.find({name: userName});
});