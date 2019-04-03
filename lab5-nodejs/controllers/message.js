/* GET: /api/v1/messages */
let get = (req, res, next) =>{
    let name = req.query.username; 
    console.log(name);
    if(name === undefined){
        res.json({
            "status": "success",
            "message": "GETTING messages"
        });
    } else{
        res.json({
            "status": "success",
            "message": "GETTING messages for username: " + name
        });
    }
    
    
}

/* GET: /api/v1/messages/:id */
let getId = (req, res, next) => {
    let messageId = req.params.id;
    res.json({
        "status": "success",
        "message": "GETTING message with ID: " + messageId
    });
}

/* POST: /api/v1/messages */
let post = (req, res, next) => {
    res.json({
        "status": "success",
        "message": "POSTING a new message for user Pikachu"
    });
}

/* PUT: /api/v1/messages/:id */
let put = (req, res, next) => {
    let messageId = req.params.id;
    res.json({
        "status": "success",
        "message": "UPDATING a message with ID: " + messageId
    });
}

/* DELETE: /api/v1/messages/:id */
let del = (req, res, next) => {
    let messageId = req.params.id;
    res.json({
        "status": "success",
        "message": "DELETING a message with ID: " + messageId
    });
}


module.exports.get = get;
module.exports.getId = getId;
module.exports.post = post;
module.exports.put = put;
module.exports.del = del;