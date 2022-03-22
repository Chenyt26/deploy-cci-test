import * as core from '@actions/core';

export interface Inputs {
  accessKey: string;
  secretKey: string;
  region: string;
  manifest: string;
  iamges: string;
}

export function getInputs(): Inputs {
  return {
    accessKey: core.getInput('access_key'),
    secretKey: core.getInput('secret_key'),
    region: core.getInput('region'),
    manifest: core.getInput('manifest'),
    images: core.getInput('images')
  };
}
