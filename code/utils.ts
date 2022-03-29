import * as context from './context'
import * as core from '@actions/core'


/**
 * 目前支持云容器实例CCI功能的region列表
 * 华北-北京四	cn-north-4	
 * 华东-上海二	cn-east-2
 * 华东-上海一	cn-east-3	
 * 华南-广州	cn-south-1
 */
const regionArray: string[] = ["cn-north-4",
    "cn-east-2",
    "cn-east-3",
    "cn-south-1",
    "cn-east-3",
    "cn-south-1"];

/**
 * 检查输入的各参数是否正常
 * @param inputs
 * @returns
 */
export function checkInputs(inputs: context.Inputs): boolean {
  if (!checkAkSk(inputs)) {
    core.info('ak or sk is not correct.');
  }
  if (!checkRegion(inputs.region)) {
    core.info('region is not correct.');
  }
  return true
}

/**
   * 检查aksk是否合法
   * @param inputs
   * @returns
   */
  export function checkAkSk(inputs: context.Inputs): boolean {
    const akReg:RegExp = new RegExp("[a-zA-Z0-9]{10,30}$")
    const skReg:RegExp = new RegExp("[a-zA-Z0-9]{30,50}$")
    return akReg.exec(inputs.accessKey) && skReg.exec(inputs.secretKey)
  }

/**
   * 检查region是否合法
   * @param inputs
   * @returns
   */
  export function checkRegion(region: string): boolean {
    return regionArray.includes(region)
  }
