const dummyApiResponse = {
    showLightAndDarkTheme : false,
    showQRCodeScan : true,
    showGitHubProfileFinder : true,
    showTreeView : true,
    showStartRating : true
};

function featureFlagsDataServiceCall(){
    return new Promise((resolve, reject) => {
        if(dummyApiResponse){
            setTimeout(resolve(dummyApiResponse),500);
        }else{
            reject('Some Error Occured ! Please Wait...');
        }
    })
}

export default featureFlagsDataServiceCall;