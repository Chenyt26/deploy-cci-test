import * as core from '@actions/core'
import * as io from '@actions/io'
import * as os from 'os'
import * as exec from '@actions/exec';

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
    core.info('current system is Linux');
    await exec.exec('curl', ['-LO', '"https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"']);
}

export async function installCciIamAuthenticatorOnMacos(): Promise<void> {
}
