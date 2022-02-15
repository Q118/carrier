const express = require("express");

// Import the model to use its database functions.
const carrier = require("../models/carrier.js");

const router = express.Router();

// Create all our routes and logic within them
router.get("/", (req, res) => {
    carrier.selectAll((data) => {
        const hbsObject = {
            carriers: data,
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/carriers", (req, res) => {
    carrier.insertOne(
        {
            carrier_name: req.body.carrier_name,
            carrier_address: req.body.carrier_address,
            address_2: req.body.address_2,
            city: req.body.city,
            state_code: req.body.state_code,
            zip: req.body.zip,
            contact: req.body.contact,
            phone: req.body.phone,
            fax: req.body.fax,
            email: req.body.email
        },
        (result) => {
            // Send back the ID of the new carrier
            res.json({ id: result.insertId });
        }
    );
});

// using put to replace the value of specified attribute
router.put("/api/carriers/:id/update", (req, res) => {
    const condition = { id: req.params.id };
    const attribute = req.body.attribute;
    const update = { [attribute]: req.body.value };
    carrier.updateOne(update, condition, (result) => {
        if (result.affectedRows === 0) {
            // If no rows were affected, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();
    });
});


router.delete("/api/carriers/:id/delete", (req, res) => {
    const condition = { id: req.params.id };
    carrier.delete(condition, (result) => {
        if (result.affectedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();
    });
});


module.exports = router;