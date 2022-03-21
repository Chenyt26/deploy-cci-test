import * as core from '@actions/core';

export interface Inputs {
  accessKey: string;
  secretKey: string;
  region: string;
  manifest: string;
  namespace: string;
}

export function getInputs(): Inputs {
  return {
    accessKey: core.getInput('access_key'),
    secretKey: core.getInput('secret_key'),
    region: core.getInput('region'),
    manifest: core.getInput('manifest'),
    namespace: core.getInput('namespace')
  };
}
