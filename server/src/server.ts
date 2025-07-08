import { fastify } from 'fastify'
import { serializerCompiler, validatorCompiler, type ZodTypeProvider } from 'fastify-type-provider-zod'
import { fastifyCors } from '@fastify/cors'
import { ENV } from './env.ts'
import {getRoomsRoute} from './http/routes/get-rooms.ts'


const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
    origin: 'http://localhost:5173'
})

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.get('/health', () => {
    console.log({
        status: "Ok"
    })
})

app.register(getRoomsRoute)

app.listen({
    port: ENV.PORT
})