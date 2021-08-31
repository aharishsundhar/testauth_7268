import { Request, Response } from 'express';
import {testingDao} from '../dao/testingDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let testing = new testingDao();

export class testingService {
    
    constructor() { }
    
    public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testingService.ts: GpCreate')
     let  testingData = req.body;
     testing.GpCreate(testingData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testingService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}