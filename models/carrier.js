const orm = require("../config/orm.js");


const carrier = {
    selectAll: (cb) => {
        orm.selectAll("carriers", (res) => {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insertOne: (newcarrier, cb) => {
        orm.insertOne("carriers", newcarrier, (res) => {
            cb(res);
        });
    },
    updateOne: (carrierData, criteria, cb) => {
        orm.updateOne("carriers", carrierData, criteria, (res) => {
            cb(res);
        });

    },
    delete: (criteria, cb) => {
        orm.delete("carriers", criteria, (res) => {
            cb(res);
        });
    }
};

module.exports = carrier;