let express = require("express");
let Repo = require("../../../../../Repository/Api/Reports/PullData/WithFilters/OnPeriod")

let FilterOnDate = (req, res) => {
    let LocalDataPK;

    let LocalFilterObject = req.body;
    let LocalReportName = LocalFilterObject.ReportName;
    delete LocalFilterObject.ReportName;
    console.log("LocalFilterObject : ", LocalFilterObject);
    if ("KeshavSoft" in req) {
        if ("DataPk" in req.KeshavSoft) {
            LocalDataPK = req.KeshavSoft.DataPk;

            Repo.FilterOnDate({
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
};

module.exports = { FilterOnDate };