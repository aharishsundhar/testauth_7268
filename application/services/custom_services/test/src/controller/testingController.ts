import { Request, Response } from 'express';
import { testingService } from '../service/testingService';
import { CustomLogger } from '../config/Logger'
let testing = new testingService();

export class testingController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
testing.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testingController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testingController.ts: GpCreate');
    })}


}