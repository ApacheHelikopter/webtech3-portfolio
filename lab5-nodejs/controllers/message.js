let get = (req, res) =>{
    res.json({
        "status": "success",
        "messages": "GET messages"
    });
}

module.exports.get = get;