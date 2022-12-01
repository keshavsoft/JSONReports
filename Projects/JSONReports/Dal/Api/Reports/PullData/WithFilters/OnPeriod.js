let DataSupplyToDal = require("../../../../../../../DataSupply/Reports/ToDal/WithFilters/StartFuncs");

let FilterOnDate = async ({ inReportName, inDataPK, inFilterObject }) => {
    if (inDataPK > 0) {
        return await DataSupplyToDal.StartFunc({
            inLedgerName: inReportName, inDataPK,
            inFilterObject
        })
    };
};

module.exports = { FilterOnDate };