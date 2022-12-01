let Dal = require("../../../../../Dal/Api/Reports/PullData/WithFilters/OnPeriod");

exports.FilterOnDate = async ({ inReportName, inDataPK, inFilterObject }) => {
    return await Dal.FilterOnDate({ inReportName, inDataPK, inFilterObject });
};
