import * as core from '@actions/core';
import * as context from './context';
import * as install from './install';
import * as auth from './auth';
import * as image from './ImageUpdate';


export async function run() {
    const input: context.Inputs = context.getInputs();
    core.info('install cci-auth');
    core.info('input message:' + input.namespace);

    // 安装cci-iam-authenticator
    const cciIamAuthPath = await install.downloadCciIamAuthenticator();
    
    // 配置iam的aksk
    const cciIamAuth = await auth.configCciAuth();
    
    // 替换镜像地址
    const imageConfi = await image.updateImage(input);
}

run();
