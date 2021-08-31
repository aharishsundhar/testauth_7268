import * as mongoose from 'mongoose';
import testingModel from '../models/testing';
import { CustomLogger } from '../config/Logger'


export class testingDao {
    private testing = testingModel;
    constructor() { }
    
    public async GpCreate(testingData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into testingDao.ts: GpCreate');

    let temp = new testingModel(testingData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from testingDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}