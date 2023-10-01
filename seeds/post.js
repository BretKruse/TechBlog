const { Post } = require('../models');

const postData = [{
        title: 'Iphone 15',
        content: 'Iphone 15 will now feature the USB-C port.',
        user_id: 1

    },
    {
        title: 'Google Chrome',
        content: 'Chrome will add more features to allow or disallow ad tracking.',
        user_id: 2
    },
    {
        title: 'Project IDX',
        content: 'Google is planning on releasing their own code editor.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
