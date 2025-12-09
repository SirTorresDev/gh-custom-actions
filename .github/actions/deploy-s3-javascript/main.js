const github = require('@actions/github');
const core = require('@actions/core');
const exec = require('@actions/exec');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const fs = require('fs');
const path = require('path');

function run() {
    core.notice('Starting S3 deployment action...');


}

run();