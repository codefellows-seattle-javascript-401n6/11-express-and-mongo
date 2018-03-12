

//or
Beer.remove()
.then(info => {
    console.log('infor', info);
    let saves = [
        rainier.save(),
        mannys.save(),
    ]

    Promise.all(saves)
    .then((savedBeer) =>{
        console.log('saved:', savedBeer)
        return Beer.find({rating: 10});
    })
    .then((results) => {
        console.log('found', results);
        console.log('found total',  results.length);
        mongoose.disconnect();
    })
})

Beer.findOne({name: 'Rainier'})
.then(rainier => {
    rainier.rating = 1;
    return rainier.save();
})
.then(newRainer => {
    console.log('rating now:', newRainer)
})

