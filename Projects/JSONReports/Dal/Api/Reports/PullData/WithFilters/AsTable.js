//let DataSupplySendDataWithConfig = require("../../../../../../../DataSupply/Reports/Ledger/WithFilters");
let DataSupplyToDal = require("../../../../../../../DataSupply/Reports/ToDal/WithFilters/StartFuncs");

let DataWithConfig = async ({ inReportName, inDataPK, inFilterObject }) => {
    if (inDataPK > 0) {
        //console.log("inReportName, inDataPK, inFilterObject  : ", inReportName, inDataPK, inFilterObject);
        // return await DataSupplySendDataWithConfig.StartFunc({
        //     inLedgerName: inReportName,
        //     inDataPK, inFilterObject
        // });
        return await DataSupplyToDal.StartFunc({
            inLedgerName: inReportName, inDataPK,
            inFilterObject
        })

        //return await {};
    };
};

module.exports = { DataWithConfig };