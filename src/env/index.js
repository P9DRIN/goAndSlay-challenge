import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
    NODE_ENV: z.enum(['dev', 'prod']).default('dev'),
    PORT: z.coerce.number().default(3000) 
})

const _env = envSchema.safeParse(process.env)

if(_env.success === false){
    console.error('Variaveis Ambiente Inválidas.', _env.error.format())
    throw new Error('Variaveis Ambiente Invádlidas.')
}

export const env = _env.data