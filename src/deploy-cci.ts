import * as core from '@actions/core'

export async function deployCCI(manifest: string): Promise<void> {
  core.info('start deploy cci');
  await (
    cp.execSync(
      `kubectl apply -f ${manifest}`
    ) || ''
  ).toString()
}
