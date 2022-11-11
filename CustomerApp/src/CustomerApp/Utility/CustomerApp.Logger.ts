//browser console 
//email
//db
 export interface ILogger{
    Log():any;
   
}

export class BaseLogger implements ILogger{
        Log() {
            console.log("Using is base logger class");
            
        }
}

export class ConsoleLogger extends BaseLogger {
    override Log(): void {
        console.log("Using is ConsoleLogger");
        
    }
    
}

export class DBLogger extends BaseLogger{
    override Log(): void {
        console.log("Using is DBlogger");
        
    }
}