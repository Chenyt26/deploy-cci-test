import * as core from '@actions/core'
import * as context from './context'
import * as install from './install'
import * as auth from './auth'
import * as image from './image-update'
import * as deploy from './deploy-cci'


export async function run() {
    const input: context.Inputs = context.getInputs();
    core.info('install cci-auth');

    // 安装cci-iam-authenticator
    const cciIamAuthPath = await install.downloadCciIamAuthenticator();
    
    // 配置iam的aksk
    const cciIamAuth = await auth.configCciAuth();
    
    // 替换镜像地址
    const imageConfi = await image.updateImage(input);
    
    //部署cci
    const deployCCI = await deploy.deployCCI(input.manifest);
}

run();
