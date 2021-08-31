import { Request, Response, NextFunction } from "express";
import { testingController } from '../controller/testingController';


export class Routes {
    private testing: testingController = new testingController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/testing').post(this.testing.GpCreate);
     }

}