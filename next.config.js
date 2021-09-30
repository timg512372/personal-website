const path = require('path');

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    webpack(config, options) {
        // Further custom configuration here

        return {
            ...config,
            node: {
                fs: 'empty',
                child_process: 'empty',
            },
        };
    },
    target: 'serverless',
};
