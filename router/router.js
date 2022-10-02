const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({
        message: "GET - SUCCESS",
        metadata: {
        hostname: req.hostname,
        method: req.method,
        },
    });
});
// GET by ID - http://localhost:3000/45
router.get("/:id", (req, res) => {
    const id = req.params.id;
    res.status(200).json({
    message: "GET SUCCESSFUL",
    id: id,
    metadata: {
    hostname: req.hostname,
    method: req.method,
    },
    });
    });
    // POST -  http://localhost:3000
    router.post("/", (req, res) => {
    res.status(200).json({
    message: "POST-POSTED",
    metadata: {
    hostname:req.hostname,
    method: req.method,
          },
       });
    });
    // PATCH or PUT by ID - http://localhost:3000/89
    router.patch("/:id", (req,res) => {
    const id= req.params.id;
    res.status(200).json({
    message: "PATCH - POSTED",
    id: id,
    metadata: {
    hostname:req.hostname,
    method: req.method,
              },
         });
    });
    // DELETE by ID - http://localhost:3000/9
    router.delete("/:id", (req, res) => {
    const id= req.params.id;
    res.status(200).json({
    message: "DELETE - DELETED",
    id: id,
    metadata: {
    hostname:req.hostname,
    method: req.method,
            },
        });
    });



module.exports = router;