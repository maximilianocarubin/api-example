import { NextFunction, Request, Response } from "express";

export const adminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if(req.user.rol == 'admin'){
        console.log(true);
    }
    else console.log(false);
    
    next();

  } catch (error) {
    return next(error);
  }
};