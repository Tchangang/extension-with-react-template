const fs = require('fs');
const path = require('path');
const arg = require('arg');
const package = require('./package.json');
const extensionConfig = require('./public/manifest.json');

const args = arg(
    {
        '--mode': String,
        '-m': '--mode',
    }
);

if (args['--mode'] === 'true') {
    extensionConfig.browser_action.default_popup = 'index.html';
} else {
    extensionConfig.browser_action.default_popup = 'http://localhost:3000';
}
extensionConfig.version = package.version;

fs.writeFileSync(path.resolve(__dirname, 'public', 'manifest.json'), JSON.stringify(extensionConfig, null, 4));