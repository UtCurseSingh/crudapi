const CustModel = require('../database/model');
const mongoose = require('mongoose');


/**
 *  
 * @DESC CREATE/ADD NEW CUSTOMER
 * @METHOD POST 
 */

exports.create = (req,res) => {
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty"
        })
    }

    const customer = new CustModel({
        phone : req.body.phone,
        name : req.body.name,
        age : req.body.age,
        gender : req.body.gender
    });

    customer.save().then(data => {
        res.status(201).send(data);
    }).catch(err =>{
        res.status(500).send({
            message: err.message || "Customer addition operation can't be completed"
        })
    });

};


/**
 *  
 * @DESC GET ALL CUSTOMERS
 * @METHOD GET 
 */

exports.find = (req,res) => {

         CustModel.find().then(data => {
            if(!data){
                res.status(404).send({
                    message : "Can't find any data"
                })
            }else{
                res.send({
                    count : data.length,
                    data: data
                });
               // console.log(data);
            }
        });   
   
    };   
    

/**
 *  
 * @DESC UPDATE CUSTOMER BY ID
 * @METHOD PUT 
 */

exports.update = (req,res) => {
    if(!req.body){
        res.status(404).send({
            message : "Can not update empty data"
        })
    }

    const id = req.params.id ;

    CustModel.findByIdAndUpdate(id, req.body, { new: true}).then(data => {
        if(!data){
            res.status(404).send({
                message : "Can't find any data to update for customer with id" + id
            })
        }else{
            res.send(data);
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Update customer error"
        })
    })
};


/**
 *  
 * @DESC DELETE CUSTOMER BY ID
 * @METHOD DELETE 
 */

exports.delete = (req,res) => {
       
        CustModel.findByIdAndDelete(req.params.id, (err, data) => {
            if (err) {
              return res.status(500).json();
            } else {
              if (data) {
                return res.json(data);
              } else {
                return res.status(400).send("Document not found, check id");
              }
            }
        });
    };


