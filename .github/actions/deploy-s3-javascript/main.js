const core = require('@actions/core');
const exec = require('@actions/exec');


function run() {
    // 1) Get some inputs values
    core.notice('Starting S3 deployment action...');
    const bucket = core.getInput('s3-bucket', { required: true });
    const region = core.getInput('region', { required: true });
    const distFolder = core.getInput('dist-folder', { required: true });


    // 2) Upload files to S3
    const s3uri = `s3://${bucket}`;

    exec.exec(`aws s3 sync ${distFolder} ${s3uri} --region ${region}`);

    const websiteUrl = `http://${bucket}.s3-website.${region}.amazonaws.com`;
    core.setOutput('website-url', websiteUrl);
    core.notice('S3 deployment action completed.');

}

run();