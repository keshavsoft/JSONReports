let Repos = require("../../../../Repository/Validate/Users/InUserDataJson/ForUserNameAndPassword")
let CommonjwtFunc = require("../../../../../../common/Jwt/ForLogin/UserCredentials");

let ForUserAndPasswordReturnFirmDetails = async (req, res, next) => {
    let LocalUserName = req.body.inUserName;
    let LocalPassWord = req.body.inPassWord;

    Repos.ForUserAndPasswordReturnFirmDetails({
        inUserName: LocalUserName,
        inPassWord: LocalPassWord,
    }).then(PromiseData => {
        if (PromiseData.KTF === false) {
            res.json(PromiseData);
        } else {
            if (PromiseData.kPK > 0) {
                CommonjwtFunc.CreateToken({
                    inUserName: LocalUserName,
                    inDataPk: PromiseData.kPK
                }).then((PromiseDataFromJwt) => {
                    res.cookie('KToken', PromiseDataFromJwt, { maxAge: 900000, httpOnly: false });

                    PromiseData.KTF = true;

                    res.json(PromiseData);
                });
            };
        };
    });
};

module.exports = {
    ForUserAndPasswordReturnFirmDetails
};
