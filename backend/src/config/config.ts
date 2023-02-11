import dotenv from 'dotenv'
import { get } from 'env-var'

dotenv.config()

export const SERVER_PORT = get('SERVER_PORT').asIntPositive()
export const SERVER_HOST = get('SERVER_HOST').required().asString()
export const DATABASE_URL = get('DATABASE_URL').required().asString()
