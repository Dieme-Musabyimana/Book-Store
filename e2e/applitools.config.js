//module.exports = {
//    apiKey: f98X1Y71kWlje2ekG7y2ZYqLOoB78Yz798VRCWfwJZ80g110,
//    appName:'Automation Bookstore'
//}
module.exports = {
    apiKey: process.env.APPLITOOLS_API_KEY,
    appName: 'Automation Bookstore',
    batchName: 'BDD Visual Tests',
    browser: { width: 800, height: 600, name: 'chrome' }
}