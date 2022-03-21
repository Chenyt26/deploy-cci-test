import * as core from '@actions/core'
import * as io from '@actions/io'
import * as os from 'os'
import * as toolCache from '@actions/tool-cache';

/*
 *
 */
export async function downloadCciIamAuthenticator(): Promise<void> {
    core.info('start install cci-iam-authenticator');
    let platform = os.platform();
    platform = 'linux';
    installCciIamAuthenticatorByPlatform(platform);
  }

  /**
 * 针对不同操作系统完成cci-iam-authenticator安装
 * @param platform
 */
export async function installCciIamAuthenticatorByPlatform(platform: string): Promise<void> {
    if (platform === 'darwin') {
      await installCciIamAuthenticatorOnMacos()
    }
    if (platform === 'linux') {
      await installCciIamAuthenticatorOnLinux()
    }
  }

export async function installCciIamAuthenticatorOnLinux(): Promise<void> {
    let downloadPath = '';
    try {
        downloadPath = await toolCache.downloadTool('https://cci-iam-authenticator.obs.cn-north-4.myhuaweicloud.com/latest/linux-amd64/cci-iam-authenticator');
        core.info('start install cci-iam-authenticator ' + downloadPath);
    } catch (exception) {
        if (exception instanceof toolCache.HTTPError && exception.httpStatusCode === 404) {
            throw new Error("cci-iam-authenticator arch not found.");
        } else {
            throw new Error('DownloadKubectlFailed');
        }
    }
}

export async function installCciIamAuthenticatorOnMacos(): Promise<void> {
}
