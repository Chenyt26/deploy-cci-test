// import * as core from '@actions/core';
import * as main from "../code/main";

import * as context from "../code/context";
import * as install from "../code/install";
import * as auth from "../code/auth";
import * as image from "../code/image-update";
import * as deploy from "../code/deploy-cci";

jest.mock("../code/context");
jest.mock("../code/install");
jest.mock("../code/auth");
jest.mock("../code/image-update");
jest.mock("../code/deploy-cci");

test("mock main.ts module", async () => {
  await main.run();
  expect(context.getInputs).toHaveBeenCalled();
  expect(context.getInputs).toHaveBeenCalledTimes(1);

  expect(install.downloadCciIamAuthenticator).toHaveBeenCalled();
  expect(install.downloadCciIamAuthenticator).toHaveBeenCalledTimes(1);

  expect(auth.configCciAuth).toHaveBeenCalled();
  expect(auth.configCciAuth).toHaveBeenCalledTimes(1);

  expect(image.updateImage).toHaveBeenCalled();
  expect(image.updateImage).toHaveBeenCalledTimes(1);

  expect(deploy.deployCCI).toHaveBeenCalled();
  expect(deploy.deployCCI).toHaveBeenCalledTimes(1);
});
