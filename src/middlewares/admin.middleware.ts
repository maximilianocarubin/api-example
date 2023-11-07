import User from "../models/user.model";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { HttpException, UnauthorizedException } from "../utils/http.exception";
import { createLogger } from "winston";

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