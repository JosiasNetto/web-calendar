import type express from 'express';

function routes(app: express.Application){
    app.get("/", (req: express.Request, res: express.Response) => {
        res.send("Hello, world!");
    })
}

export default routes;