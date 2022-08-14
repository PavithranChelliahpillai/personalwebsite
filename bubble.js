const myTags = [
    'C++', 'JavaScript', 'CSS', 'HTML',
    'PHP', 'React',
    'Python', 'Java', 'EJS',
    'django', 'Node.js', 'MongoDB',
    'SCSS', 'MySQL', 'jQuery',
];

let val="abcd";

var tagCloud = TagCloud('.sphere', myTags, {
    radius: 300, 
    maxSpeed: 'slow', 
    initSpeed: 'normal', 

    direction: 135, 
    keep: true
}); 

