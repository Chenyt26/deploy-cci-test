import * as core from '@actions/core'
import * as context from './context'
import * as fs from 'fs'
import * as path from 'path'

/*
 * 更新k8s模板文件的镜像url
 */
export async function updateImage(inputs: context.Inputs): Promise<void> {
  core.info('update manifest file')
  const manifestPath = path.resolve(inputs.manifest)

  await replaceMatchingFileContent(inputs.imageList, manifestPath)
}

export async function replaceMatchingFileContent(
  imageArray: string[],
  manifestPath: string
): Promise<void> {
  /*
   * manifest文件镜像信息替换成占位符
   */
  const prePlaceholder = 'IMAGE_PLACEHOLDER_'
  for (let i = 0; i < imageArray.length; i++) {
    const replaceStr = prePlaceholder + i
    //readFile方法读取文件内容
    const data = fs.readFileSync(manifestPath, 'utf8')
    const placeholder = data.replace(RegExp('image: .*'), replaceStr)
    //writeFile改写文件内容
    fs.writeFileSync(manifestPath, placeholder, 'utf8')
  }

  /*
   * 镜像占位符替换成新镜像信息
   */
  for (let i = 0; i < imageArray.length; i++) {
    const replaceStr = prePlaceholder + i
    //readFile方法读取文件内容
    const data = fs.readFileSync(manifestPath, 'utf8')
    core.info(imageArray[i])
    const result = data.replace(
      RegExp(replaceStr),
      "image: '" + imageArray[i] + "'"
    )
    //writeFile改写文件内容
    fs.writeFileSync(manifestPath, result, 'utf8')
  }
}
