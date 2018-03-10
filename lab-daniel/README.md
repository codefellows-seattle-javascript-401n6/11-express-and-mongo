# Lab: Express and Mongo
#### Daniel Pillay

## GET
##### Gets a fighter by it's ID or returns all the fighters 

``` router.get('/', (req, res) => {
    if(!req.query.id){
        res.status(404);
        res.send('not found');
    }
    else if(req.query.id){
        let id = req.query.id;
        storage.get(id)
        .then(fighter => {
            res.send(fighter)
        });
    }else {
        storage.getAll()
        .then(fighters => {
            res.send(fighters);
        });
    }
}); 
```
## POST
##### Saves fighter
``` router.post('/', (req, res) => {
    if (req.body.name === undefined || 
        req.body.wins === undefined || 
        req.body.losses === undefined) {
            res.status(400);
            res.send('Bad Request!');
      }
    else{
    let fighter = {
      name: req.body.name,
      wins: req.body.wins,
      losses: req.body.losses,
    };
    storage.save(fighter)
    .then(figher => {
    res.status(200);
    res.send(fighter);
    });
    }
  }) 
```
## PUT
##### Updates and saves new fighter.
```router.put('/', (req, res) => {
    let id = req.query.id;
    storage.get(id)
    .then(fighter => {
        if(req.body.name){
            fighter.name = req.body.name;
        }
        if(req.body.wins){
            fighter.wins = req.body.wins;
        }
        if (req.body.losses){
            fighter.losses = req.body.losses
        }
        
        fighter.save((err, fighter) => {
            res.send(fighter)
        })
    });
});
```

## DELETE
##### Removes fighter from storage.
``` router.delete('/', (req, res) => {
    let id = req.query.id;
    storage.remove(id)
    .then((fighter) => {
        res.writeHead(204);
        res.send(fighter);
    })
});
```
