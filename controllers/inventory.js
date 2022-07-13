// Create a reference to the model
let InventoryModel = require('../models/inventory');

function getErrorMessage(err) {    
    if (err.errors) {
        for (let errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
        }
    } 
    if (err.message) {
        return err.message;
    } else {
        return 'Unknown server error';
    }
};


module.exports.inventoryList = function(req, res, next){
    try {
            InventoryModel.find( (err, inventoryList)=>{

                if(err){
                    console.error(err);
                    return res.status(400).json(
                        {
                                success: false,
                                message: getErrorMessage(err)
                        }
                    );

                }
                else{

                    res.status(200).json(inventoryList);
        
                }
        
            }) ; 
        
    } catch (error) {
        return res.status(400).json(
            {
                    success: false,
                    message: getErrorMessage(error)
            }
        );
        
    }

    

}


module.exports.processEdit = (req, res, next) => {
    try {
            let id = req.params.id

        let updatedItem = InventoryModel({
            _id: id,
            item: req.body.item,
            qty: req.body.qty,
            status: req.body.status,
            size : {
                h : req.body.size.h,
                w : req.body.size.w,
                uom : req.body.size.uom,
            },
            tags: req.body.tags.split(",").map(word => word.trim())
        });

        // console.log(updatedItem);

        InventoryModel.updateOne({_id: id}, updatedItem, (err) => {
            if(err)
            {
                console.log(err);
                // res.end(err);
                return res.status(400).json(
                    {
                            success: false,
                            message: getErrorMessage(err)
                    }
                );
            }
            else
            {
                // console.log(req.body);
                // refresh the book list
                //res.redirect('/inventory/list');
                res.status(200).json(
                    {
                            success: true,
                            message: 'Item updated Successfully'
                    }
                );
            }
        });
        
    } catch (error) {
        return res.status(400).json(
            {
                    success: false,
                    message: getErrorMessage(error)
            }
        );
        
    }
    
}


module.exports.performDelete = (req, res, next) => {

    try {
            let id = req.params.id;

        InventoryModel.remove({_id: id}, (err) => {
            if(err)
            {
                console.log(err);
                // res.end(err);
                return res.status(400).json(
                    {
                            success: false,
                            message: getErrorMessage(err)
                    }
                );
            }
            else
            {
                // refresh the book list
                // res.redirect('/inventory/list');
                res.status(200).json(
                    {
                            success: true,
                            message: 'Item deleted Successfully'
                    }
                );
            }
        });
        
    } catch (error) {
        return res.status(400).json(
            {
                    success: false,
                    message: getErrorMessage(error)
            }
        );
        
    }
    
}


module.exports.processAdd = (req, res, next) => {
    try
    {
        let newItem = InventoryModel({
            _id: req.body.id,
            item: req.body.item,
            qty: req.body.qty,
            status: req.body.status,
            size : 
            {
                h: req.body.size.h,
                w: req.body.size.w,
                uom: req.body.size.uom,
            },
            tags: req.body.tags.split(",").map(word => word.trim())
        });

        InventoryModel.create(newItem, (err, item) =>{
            if(err)
            {
                console.log(err);
                // res.end(err);
                return res.status(400).json(
                    {
                            success: false,
                            message: getErrorMessage(err)
                    }
                );
            }
            else
            {
                // refresh the book list
                console.log(item);
            // res.redirect('/inventory/list');
            res.status.json(item);
            }
        });

    }catch(error)
    {
        return res.status(400).json(
            {
                    success: false,
                    message: getErrorMessage(error)
            }
        );
    }



}