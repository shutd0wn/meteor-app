if (Posts.find().count() === 0) {
    Posts.insert({
        name : 'Bob',
        title: 'Introducing Telescope',
        url: 'http://sachagreif.com/introducing-telescope/',
        category : 'science'
    });

    Posts.insert({
        name : 'Carol',
        title: 'Meteor',
        url: 'http://meteor.com',
        category : 'science'
    });

    Posts.insert({
        name : 'Bob',
        title: 'The Meteor Book',
        url: 'http://themeteorbook.com',
        category : 'music'
    });
}
