import type { Request, Response } from "express"

import dotenv from "dotenv"
import jwt from "jsonwebtoken"
import { LogCreator } from "../../../../Contexts/Pawful/auth/application/LogCreator"
import type { LogRepository } from "../../../../Contexts/Pawful/auth/domain/repositories/LogRepository"
import { Log } from "../../../../Contexts/Pawful/auth/domain/valueObjects/Log"
import { MongooseLogRepository } from "../../../../Contexts/Pawful/auth/infrastructure/persistence/mongoose/MongooseLogRepository"
import { MissingFieldsError } from "../../../../Contexts/shared/domain/errors/MissingFieldsError"
import { HttpCode } from "../../../shared/HttpCode"
dotenv.config()

class CreateLogController {
  private readonly logRepository: LogRepository
  private readonly logCreator: LogCreator

  constructor() {
    this.logRepository = new MongooseLogRepository()
    this.logCreator = new LogCreator(this.logRepository)
  }

  async run(req: Request, res: Response): Promise<void> {
    const fields = req.body as { [key: string]: unknown }
    const { email, password } = fields

    if (typeof email !== "string" || typeof password !== "string") {
      throw new MissingFieldsError()
    }

    const log = new Log(email, password)

    const user = await this.logCreator.run(log)
    const token = jwt.sign(
      { id: user.id, roleId: user.roleId },
      process.env.JWT_PASS!,
      {
        expiresIn: "1h",
      },
    )
    const data = { id: user.id, email: user.email }
    res.status(HttpCode.Created).send({
      user: data,
      token: token,
    })
  }
}

export { CreateLogController }
