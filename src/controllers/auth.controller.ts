import { Request, Response, NextFunction } from "express";
import User from "../models/user.model";
import IUser from "../interfaces/user.interface";
import jwt from "jsonwebtoken";

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { nombre, email, contraseña, rol } = req.body;
    let user: IUser = new User({
      nombre,
      email,
      contraseña,
      rol,
    });

    if ((await user.guardarContraseña()) === false) {
      res.status(400).json("Password encryption failed");
    }

    await user.save();

    // Devolver datos
    const userData = await User.findById(user._id);
    if (!userData) return res.status(404).json("UserData not found");
    return res.json(userData);
  } catch (err) {
    return next(err);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user: IUser = await User.findOne({ email: req.body.email }).select(
      "+contraseña"
    );

    if (!user) return res.status(404).json("User Not Found");
    if (!user.contraseña)
      return res.status(401).json("Unauthorized, missing password");

    const correctPassword = await user.validarContraseña(req.body.contraseña);
    if (!correctPassword) return res.status(401).json("Invalid Password");

    // Create a Token
    const token: string = jwt.sign(
      { sub: user._id },
      process.env.JWT_SECRET || "",
      {
        expiresIn: process.env.JWT_EXPIRATION,
      }
    );

    const { contraseña, ...data } = user.toJSON();
    return res.header("auth-token", token).json({ ...data, token });
  } catch (error) {
    return next(error);
  }
};
