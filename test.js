const index = require('./index')
const assert = require('assert')

it("returns all the strings that contains the searched keyword", () => {
    x=[
        "Congratulations on your new job!", 
        "Starting a new job is exciting but stressful.", 
        "Don’t try to memorize complicated things.", 
        "How do you talk to your new coworkers?", 
        "You’re ready to learn"
    ];
    y=[ 
        'Congratulations on your new job!',
        'Starting a new job is exciting but stressful.' 
    ]
    assert.deepEqual(index.matches(x), y);
});

