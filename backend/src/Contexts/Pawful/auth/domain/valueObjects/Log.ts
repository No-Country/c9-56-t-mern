import type { LogModel } from "../models/LogModel"

class Log implements LogModel {
  constructor(readonly email: string, readonly password: string) {}
}

export { Log }
