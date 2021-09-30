const $ = require('jquery');
const fs = require('fs');
const path = require('path');
const chai = require("chai");
const should = chai.should();
const JWebDriver = require('jwebdriver');
chai.use(JWebDriver.chaiSupportChainPromise);
const resemble = require('resemblejs-node');
resemble.outputSettings({
    errorType: 'flatDifferenceIntensity'
});

const rootPath = getRootPath();
const storeName = '';

module.exports = function (url) {

    let driver, testVars;

    before(function () {
        let self = this;
        driver = self.driver;
        testVars = self.testVars;
    });


        it('url: https://admin.sw65.shoplinestg.com/admin', async function(){
        await driver.url(_(`https://admin.sw65.shoplinestg.com/admin`));
    });

    it('waitBody: ', async function(){
        await driver.sleep(500).wait('body', 30000).html().then(function(code){
            isPageError(code).should.be.false;
        });
    });

    it('點用戶名', async function(){
        await driver.sleep(300).wait('#staff_email', 30000)
               .sleep(300).mouseMove(106, 26).click(0);
    });

    it('insertVar: staff[email] ( #staff_email, {{login}} )', async function(){
        await driver.sleep(300).wait('#staff_email', 30000)
               .val(_(`{{login}}`));
    });

    it('點密碼', async function(){
        await driver.sleep(300).wait('#staff_password', 30000)
               .sleep(300).mouseMove(120, 16).click(0);
    });

    it('insertVar: staff[password] ( #staff_password, {{pwd}} )', async function(){
        await driver.sleep(300).wait('#staff_password', 30000)
               .val(_(`{{pwd}}`));
    });

    it('點登錄', async function(){
        await driver.sleep(300).wait('//button[@name="button"]', 240000)
               .sleep(300).click();
    });

    it('sleep: 4000', async function(){
        await driver.sleep(4000);
    });

    it('點用戶名', async function(){
        await driver.sleep(300).wait('#menu-user', 60000)
               .sleep(300).click();
    });

    it('sleep: 1000', async function(){
        await driver.sleep(1000);
    });

    it('進入My sub page', async function(){
        await driver.sleep(300).wait('//a[@class="plan ng-binding"]', 60000)
               .sleep(300).click();
    });

    it('switchFrame: iframe[id="msiframe"]', async function(){
        await driver.switchFrame(null)
               .wait('iframe[id="msiframe"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('sleep: 2000', async function(){
        await driver.sleep(2000);
    });

    it('立即關閉商店', async function(){
        await driver.sleep(300).wait('//*[@id="root"]/div[2]/div[5]/div[2]/div/div/div/div/div[2]/button', 30000)
               .sleep(300).click();
    });

    it('sleep: 2000', async function(){
        await driver.sleep(2000);
    });

    it('勾選同意', async function(){
        await driver.sleep(300).wait('//*[@id="root"]/div[2]/div[3]/div[2]/div[2]/div[2]/label/div[2]/span', 30000)
               .sleep(300).click();
    });

    it('確定關閉', async function(){
        await driver.sleep(300).wait('//*[@id="root"]/div[2]/div[3]/div[2]/div[3]/div/button/div/span', 30000)
               .sleep(300).click();
    });

    it('sleep: 12000', async function(){
        await driver.sleep(12000);
    });

    it('switchFrame: null', async function(){
        await driver.switchFrame(null);
    });

    it('switchFrame: iframe[id="msiframe"]', async function(){
        await driver.switchFrame(null)
               .wait('iframe[id="msiframe"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('成功關閉商店', async function(){
        await driver.sleep(300).wait('//*[@id="root"]/div[2]/div[4]/div/div[1]/div/div/span', 60000)
            .text()
            .should.not.be.a('error')
            .should.equal(_(`商店已鎖定`));
    });

    it('sleep: 3000', async function(){
        await driver.sleep(3000);
    });

    it('點購買開店方案', async function(){
        await driver.sleep(300).wait('//*[@id="root"]/div[2]/div[3]/div/div/button/div/span/div/span', 30000)
               .sleep(300).mouseMove(62, 10).click(0);
    });

    it('sleep: 5000', async function(){
        await driver.sleep(5000);
    });

    it('switchFrame: null', async function(){
        await driver.switchFrame(null);
    });

    it('switchFrame: iframe[id="msiframe"]', async function(){
        await driver.switchFrame(null)
               .wait('iframe[id="msiframe"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('選第一個bundle', async function(){
        await driver.sleep(300).wait('//*[@id="root"]/div[2]/div[5]/div/div[1]/div[2]/div[2]/div/span/button', 60000)
               .sleep(300).click();
    });

    it('sleep: 2000', async function(){
        await driver.sleep(2000);
    });

    it('點去結賬', async function(){
        await driver.sleep(300).wait('//*[@id="root"]/div[2]/div[9]/div/div/div/div[2]/button/div', 30000) 
               .sleep(300).click();
    });

    it('sleep: 30000', async function(){
        await driver.sleep(30000);
    });

    it('勾選同意', async function(){
        await driver.sleep(300).wait('//*[@id="root"]/div[2]/form/div/div[2]/div/div/div[6]/div/div/div[1]/label/div[1]', 30000)
               .sleep(300).click();
    });

    it('結賬', async function(){
        await driver.sleep(300).wait('//*[@id="root"]/div[2]/form/div/div[2]/div/div/div[7]/button', 30000)
               .sleep(300).click();
    });

    it('switchFrame: null', async function(){
        await driver.switchFrame(null);
    });

    it('sleep: 12000', async function(){
        await driver.sleep(12000);
    });

    it('switchFrame: iframe[id="msiframe"]', async function(){
        await driver.switchFrame(null)
               .wait('iframe[id="msiframe"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });


    it('檢查order status是否變已完成', async function(){
        await driver.sleep(300).wait('//*[@id="root"]/div[2]/div[2]/div[1]/div[2]/div[4]/span[2]', 60000)
            .text()
            .should.not.be.a('error')
            .should.equal(_(`已完成`));
    });

    it('返回my sub page', async function(){
        await driver.sleep(300).wait('//*[@id="root"]/div[2]/div[1]/div/div/a', 30000)
               .sleep(300).click();
    });

    it('sleep: 3000', async function(){
        await driver.sleep(3000);
    });

    it('檢查sub是否生效', async function(){
        await driver.sleep(300).wait('//*[@id="root"]/div[2]/div[4]/div/div[2]/div[1]/div/div[1]/div/div/span', 30000)
            .text()
            .should.not.be.a('error')
            .should.equal(_(`啟用中`));
    });

    it('sleep: 2000', async function(){
        await driver.sleep(2000);
    });

    it('點購買方案加購本期', async function(){
        await driver.sleep(1000).wait('//*[@id="root"]/div[2]/div[4]/div/div[2]/div[1]/div/div[2]/div/button[1]/div/span', 30000)
               .sleep(300).click();    
    });

    it('sleep: 2000', async function(){
        await driver.sleep(2000);
    });

    it('選第一個Module', async function(){
        await driver.sleep(300).wait('//*[@id="root"]/div[2]/div[9]/div/div[2]/div/div[1]/div/div[4]/div[2]/div/div', 30000)
               .sleep(300).click();
    });

    it('點去結賬', async function(){
        await driver.sleep(300).wait('//*[@id="root"]/div[2]/div[10]/div/div/div/div[2]/button', 30000)
               .sleep(300).click();
    });

    it('sleep: 30000', async function(){
        await driver.sleep(30000);
    });

    it('檢查是否進入本期加購', async function(){
        await driver.sleep(300).wait('//*[@id="root"]/div[2]/div[2]/div[2]', 30000)
            .text()
            .should.not.be.a('error')
            .should.contain(_(`本期訂閱加購`));
    });

    it('勾選同意', async function(){
        await driver.sleep(300).wait('//*[@id="root"]/div[2]/form/div/div[2]/div/div/div[6]/div/div/div[1]/label/div[1]', 30000)
               .sleep(300).click();
    });

    it('結賬', async function(){
        await driver.sleep(300).wait('//*[@id="root"]/div[2]/form/div/div[2]/div/div/div[7]/button/div', 30000)
               .sleep(300).click();
    });

    it('switchFrame: null', async function(){
        await driver.switchFrame(null);
    });

    it('sleep: 12000', async function(){
        await driver.sleep(12000);
    });

    it('switchFrame: iframe[id="msiframe"]', async function(){
        await driver.switchFrame(null)
               .wait('iframe[id="msiframe"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('檢查order status是否變已完成', async function(){
        await driver.sleep(300).wait('//*[@id="root"]/div[2]/div[2]/div[1]/div[2]/div[4]/span[2]', 30000)
            .text()
            .should.not.be.a('error')
            .should.equal(_(`已完成`));
    });

    it('返回my sub page', async function(){
        await driver.sleep(300).wait('//*[@id="root"]/div[2]/div[1]/div/div/a', 30000)
               .sleep(300).click();
    });

    it('點擊下期訂閱', async function(){
        await driver.sleep(300).wait('//*[@id="root"]/div[2]/div[4]/div/div[1]/div[3]/div[2]/div', 30000)
               .sleep(300).click();
    });

    it('檢查是否有生成下期', async function(){
        await driver.sleep(300).wait('//*[@id="root"]/div[2]/div[4]/div/div[2]/div[1]/div/div[1]/span[2]/div[1]/span', 30000)
            .text()
            .should.not.be.a('error')
            .should.contain(_(`待付款`));
    });

    it('返回本期訂閱', async function(){
        await driver.sleep(300).wait('//*[@id="root"]/div[2]/div[4]/div/div[1]/div[3]/div[1]/div', 30000)
               .sleep(300).click();
    });

    it('更改繳費週期', async function(){
        await driver.sleep(300).wait('//*[@id="root"]/div[2]/div[4]/div/div[2]/div[1]/div/div[2]/div/button[2]', 30000)
               .sleep(300).click();
    });

    it('更改繳費週期購買下期', async function(){
        await driver.sleep(300).wait('//*[@id="root"]/div[2]/div[2]/div/div[2]/span', 30000)
            .text()
            .should.not.be.a('error')
            .should.contain(_(`目前正在建立下期方案`));
    });


    it('sleep: 30000', async function(){
        await driver.sleep(30000);
    });

    it('勾選同意', async function(){
        await driver.sleep(3000).wait('//*[@id="root"]/div[2]/form/div/div[2]/div/div/div[6]/div/div/div[1]/label/div[1]', 50000)
               .sleep(3000).click();
    });

    it('結賬', async function(){
        await driver.sleep(300).wait('//*[@id="root"]/div[2]/form/div/div[2]/div/div/div[7]/button/div', 30000)
               .sleep(300).click();
    });

    it('switchFrame: null', async function(){
        await driver.switchFrame(null);
    });

    it('sleep: 12000', async function(){
        await driver.sleep(12000);
    });

    it('switchFrame: iframe[id="msiframe"]', async function(){
        await driver.switchFrame(null)
               .wait('iframe[id="msiframe"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('檢查order status是否變已完成', async function(){
        await driver.sleep(300).wait('//*[@id="root"]/div[2]/div[2]/div[1]/div[2]/div[4]/span[2]', 30000)
            .text()
            .should.not.be.a('error')
            .should.equal(_(`已完成`));
    });

    it('返回my sub page', async function(){
        await driver.sleep(300).wait('//*[@id="root"]/div[2]/div[1]/div/div/a', 30000)
               .sleep(300).click();
    });

    it('點擊下期訂閱', async function(){
        await driver.sleep(300).wait('//*[@id="root"]/div[2]/div[4]/div/div[1]/div[3]/div[2]/div', 30000)
               .sleep(300).click();
    });

    it('檢查下期是否成功付款', async function(){
        await driver.sleep(300).wait('//*[@id="root"]/div[2]/div[4]/div/div[2]/div[1]/div/div[1]/span[2]/div[1]/span', 30000)
            .text()
            .should.not.be.a('error')
            .should.contain(_(`已付款`));
    });

    it('購買下期方案', async function(){
        await driver.sleep(300).wait('//*[@id="root"]/div[2]/div[4]/div/div[2]/div[1]/div/div[2]/div/button[1]', 30000)
               .sleep(300).click();
    });

    it('sleep: 30000', async function(){
        await driver.sleep(30000);
    });

    it('選第二個module', async function(){
        await driver.sleep(300).wait('//*[@id="root"]/div[2]/div[8]/div/div[2]/div/div[2]/div/div[4]/div[2]/div/div/span/button', 30000)
               .sleep(300).click();
    });

    it('去結賬', async function(){
        await driver.sleep(300).wait('//*[@id="root"]/div[2]/div[9]/div/div/div/div[2]/button/div', 30000)
               .sleep(300).click();
    });

    it('sleep: 30000', async function(){
        await driver.sleep(30000);
    });

    it('勾選同意', async function(){
        await driver.sleep(300).wait('//*[@id="root"]/div[2]/form/div/div[2]/div/div/div[6]/div/div/div[1]/label/div[1]', 30000)
               .sleep(300).click();
    });

    it('結賬', async function(){
        await driver.sleep(300).wait('//*[@id="root"]/div[2]/form/div/div[2]/div/div/div[7]/button/div', 30000)
               .sleep(300).click();
    });

    it('switchFrame: null', async function(){
        await driver.switchFrame(null);
    });

    it('sleep: 12000', async function(){
        await driver.sleep(12000);
    });

    it('switchFrame: iframe[id="msiframe"]', async function(){
        await driver.switchFrame(null)
               .wait('iframe[id="msiframe"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('檢查order status是否變已完成', async function(){
        await driver.sleep(300).wait('//*[@id="root"]/div[2]/div[2]/div[1]/div[2]/div[4]/span[2]', 30000)
            .text()
            .should.not.be.a('error')
            .should.equal(_(`已完成`));
    });

    it('返回my sub page', async function(){
        await driver.sleep(300).wait('//*[@id="root"]/div[2]/div[1]/div/div/a', 30000)
               .sleep(300).click();
    });

    




    it('switchFrame: null', async function(){
        await driver.switchFrame(null);
    });




    function _(str) {
        if (typeof str === 'string') {
            return str.replace(/\{\{(.+?)\}\}/g, function (all, key) {
                return testVars[key] || '';
            });
        } else {
            return str;
        }
    }

};

if (module.parent && /mocha\.js/.test(module.parent.id)) {
    runThisSpec();
}

function runThisSpec() {
    // read config
    let webdriver = process.env['webdriver'] || '';
    let proxy = process.env['wdproxy'] || '';
    let config = require(rootPath + '/config.json');
    let webdriverConfig = Object.assign({}, config.webdriver);
    let host = webdriverConfig.host;
    let port = webdriverConfig.port || 4444;
    let group = webdriverConfig.group || 'default';
    let match = webdriver.match(/([^\:]+)(?:\:(\d+))?/);
    if (match) {
        host = match[1] || host;
        port = match[2] || port;
    }
    let testVars = config.vars;
    let browsers = webdriverConfig.browsers;
    browsers = browsers.replace(/^\s+|\s+$/g, '');
    delete webdriverConfig.host;
    delete webdriverConfig.port;
    delete webdriverConfig.group;
    delete webdriverConfig.browsers;

    // read hosts
    let hostsPath = rootPath + '/hosts';
    let hosts = '';
    if (fs.existsSync(hostsPath)) {
        hosts = fs.readFileSync(hostsPath).toString();
    }
    let specName = path.relative(rootPath, __filename).replace(/\\/g, '/').replace(/\.js$/, '');

    // read testVars
    function _(str) {
        if (typeof str === 'string') {
            return str.replace(/\{\{(.+?)\}\}/g, function (all, key) {
                return testVars[key] || '';
            });
        } else {
            return str;
        }
    }

    let url = _('https://' + storeName + '.{{env}}' + '.{{domain}}');

    browsers.split(/\s*,\s*/).forEach(function (browserName) {
        let caseName = specName + ' : ' + browserName;

        let browserInfo = browserName.split(' ');
        browserName = browserInfo[0];
        let browserVersion = browserInfo[1];

        describe(caseName, function () {

            this.timeout(1200000);
            this.slow(1000);

            let driver;
            before(function () {
                let self = this;
                let driver = new JWebDriver({
                    'host': host,
                    'port': port
                });
                let sessionConfig = Object.assign({}, webdriverConfig, {
                    'group': group,
                    'browserName': browserName,
                    'version': browserVersion,
                    'ie.ensureCleanSession': true,
                });
                if (proxy) {
                    sessionConfig.proxy = {
                        'proxyType': 'manual',
                        'httpProxy': proxy,
                        'sslProxy': proxy
                    }
                } else if (hosts) {
                    sessionConfig.hosts = hosts;
                }

                try {
                    self.driver = driver.session(sessionConfig).windowSize(1400, 1050).config({
                        pageloadTimeout: 120000, // page onload timeout
                        scriptTimeout: 5000, // sync script timeout
                        asyncScriptTimeout: 10000 // async script timeout
                    });
                } catch (e) {
                    console.log(e);
                }

                self.testVars = testVars;
                let casePath = path.dirname(caseName);
                if (config.reporter && config.reporter.distDir) {
                    self.screenshotPath = config.reporter.distDir + '/reports/screenshots/' + casePath;
                    self.diffbasePath = config.reporter.distDir + '/reports/diffbase/' + casePath;
                } else {
                    self.screenshotPath = rootPath + '/reports/screenshots/' + casePath;
                    self.diffbasePath = rootPath + '/reports/diffbase/' + casePath;
                }
                self.caseName = caseName.replace(/.*\//g, '').replace(/\s*[:\.\:\-\s]\s*/g, '_');
                mkdirs(self.screenshotPath);
                mkdirs(self.diffbasePath);
                self.stepId = 0;
                return self.driver;
            });

            module.exports(url);

            beforeEach(function () {
                let self = this;
                self.stepId++;
                if (self.skipAll) {
                    self.skip();
                }
            });

            afterEach(async function () {
                let self = this;
                let currentTest = self.currentTest;
                let title = currentTest.title;
                if (currentTest.state === 'failed' && /^(url|waitBody|switchWindow|switchFrame):/.test(title)) {
                    self.skipAll = true;
                }

                if ((config.screenshots && config.screenshots.captureAll && !/^(closeWindow):/.test(title)) || currentTest.state === 'failed') {
                    const casePath = path.dirname(caseName);
                    const filepath = `${self.screenshotPath}/${self.caseName}_${self.stepId}`;
                    const relativeFilePath = `./screenshots/${casePath}/${self.caseName}_${self.stepId}`;
                    let driver = self.driver;
                    try {
                        // catch error when get alert msg
                        await driver.getScreenshot(filepath + '.png');
                        let url = await driver.url();
                        let html = await driver.source();
                        html = '<!--url: ' + url + ' -->\n' + html;
                        fs.writeFileSync(filepath + '.html', html);
                        let cookies = await driver.cookies();
                        fs.writeFileSync(filepath + '.cookie', JSON.stringify(cookies));
                        appendToContext(self, relativeFilePath + '.png');
                    } catch (e) {
                    }
                }
            });

            after(function () {
                return this.driver.close();
            });

        });
    });
}

function getRootPath() {
    let rootPath = path.resolve(__dirname);
    while (rootPath) {
        if (fs.existsSync(rootPath + '/config.json')) {
            break;
        }
        rootPath = rootPath.substring(0, rootPath.lastIndexOf(path.sep));
    }
    return rootPath;
}

function mkdirs(dirname) {
    if (fs.existsSync(dirname)) {
        return true;
    } else {
        if (mkdirs(path.dirname(dirname))) {
            fs.mkdirSync(dirname);
            return true;
        }
    }
}

function callSpec(name) {
    try {
        require(rootPath + '/' + name)();
    } catch (e) {
        console.log(e)
        process.exit(1);
    }
}

function isPageError(code) {
    return code == '' || / jscontent="errorCode" jstcache="\d+"|diagnoseConnectionAndRefresh|dnserror_unavailable_header|id="reportCertificateErrorRetry"|400 Bad Request|403 Forbidden|404 Not Found|500 Internal Server Error|502 Bad Gateway|503 Service Temporarily Unavailable|504 Gateway Time-out/i.test(code);
}

function appendToContext(mocha, content) {
    try {
        const test = mocha.currentTest || mocha.test;

        if (!test.context) {
            test.context = content;
        } else if (Array.isArray(test.context)) {
            test.context.push(content);
        } else {
            test.context = [test.context];
            test.context.push(content);
        }
    } catch (e) {
        console.log('error', e);
    }
};

function catchError(error) {

}
