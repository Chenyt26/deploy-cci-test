import * as core from '@actions/core';
import * as context from './context';
import * as install from './install';


export async function run() {
    const input: context.Inputs = context.getInputs();
    core.info('install cci-auth');
    core.info('input message:' + input.namespace);

    // 安装cci-iam-authenticator
    const cachedPath = await install.downloadCciIamAuthenticator();
}

run();