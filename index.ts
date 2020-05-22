import { serve } from 'https://deno.land/std@0.52.0/http/server.ts'

const app = serve({ port: 3333 })
console.log('Running into http://localhost:3333/')

for await (const req of app) {
  req.respond({ body: "Hello World"})
}