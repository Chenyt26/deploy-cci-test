import * as core from '@actions/core';
import * as context from './context';
import * as cp from 'child_process'

/*
 * 使用AK/SK的方式配置IAM认证信息
 */
export async function configCciAuth(): Promise<void> {
    core.info('Configuring IAM Authentication Information Using AK/SK');
    const input: context.Inputs = context.getInputs();
    const result = await (
    cp.execSync(
      `cci-iam-authenticator generate-kubeconfig --cci-endpoint=https://cci.${input.region}.myhuaweicloud.com --ak=${input.accessKey} --sk=${input.secretKey}`
    ) || ''
  ).toString()
    core.info('generate-kubeconfig result: ' + result)
    
    // 检查aksk 是否配置成功
    const checkResult = await (
    cp.execSync(
      `kubectl config get-contexts`
    ) || ''
  ).toString()
    core.info('generate-kubeconfig check result: ' + checkResult)
}
