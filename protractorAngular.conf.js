const reporter = require('cucumber-html-reporter');

exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    specs: [
        './src/specs/*.feature'
    ],

    cucumberOpts: {
        strict: true,
        format: [
            'json:./reports/results.json',
            'pretty',
            'node_modules/cucumber-pretty'
        ],
        require: [
            './src/steps/*.js'
        ],
        tags: '@angular',
        dryRun: false
    },

    allScriptsTimeout: 11000,
    ignoreUncaughtExceptions: true,
    capabilities: {
        browserName: 'chrome'
    },
    directConnect: true,
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },

    afterLaunch() {
        const options = {
            columnLayout: 1,
            theme: 'bootstrap',
            jsonFile: './reports/results.json',
            output: './reports/cucumber_report.html',
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: true,
        };
        reporter.generate(options);
    }
};