let express = require("express");
let Router = express.Router();
let Repo = require("../../../../../Repository/Api/Reports/PullData/WithFilters/AsTable")

Router.post('/', (req, res) => {
    let LocalDataPK;

    let LocalFilterObject = req.body;
    let LocalReportName = LocalFilterObject.ReportName;
    delete LocalFilterObject.ReportName;
    console.log("LocalFilterObject : ", LocalFilterObject);
    if ("KeshavSoft" in req) {
        if ("DataPk" in req.KeshavSoft) {
            LocalDataPK = req.KeshavSoft.DataPk;

            Repo.DataWithConfig({
                inReportName: LocalReportName,
                inDataPK: LocalDataPK,
                inFilterObject: LocalFilterObject
            }).then(PromiseData => {
                res.end(JSON.stringify(PromiseData));
            }).catch();
        } else {
            res.json({ KTF: false, KReason: "DataPk not found in Request.Keshavsoft" });
        };
    } else {
        res.json({ KTF: false, KReason: "KeshavSoft not found in Request" });
    };
});

Router.get('/DataWithConfigFromWithOutFilters/:inReportName', (req, res) => {
    let LocalDataPK;
    let LocalReportName;

    if ("KeshavSoft" in req) {
        if ("DataPk" in req.KeshavSoft) {
            LocalDataPK = req.KeshavSoft.DataPk;

            if ("inReportName" in req.params) {
                LocalReportName = req.params.inReportName;

                Repo.DataWithConfig({
                    inReportName: LocalReportName,
                    inDataPK: LocalDataPK,
                }).then(PromiseData => {
                    res.end(JSON.stringify(PromiseData));
                }).catch();

            } else {
                res.json({ KTF: false, KReason: "Need to send inReportName" });
            };
        } else {
            res.json({ KTF: false, KReason: "DataPk not found in Request.Keshavsoft" });
        };
    } else {
        res.json({ KTF: false, KReason: "KeshavSoft not found in Request" });
    };
});


module.exports = Router;