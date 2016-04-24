Template.postsList.helpers({
    posts: Posts.find({name:'Bob', category : 'music'})
});