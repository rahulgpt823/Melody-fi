import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import * as dotenv from 'dotenv';
import user_model from '../model/user_model';
/**
 * Strategies are responsible for authenticating requests, which they accomplish by implementing an authentication mechanism.
 *  Authentication mechanisms define how to encode a credential, such as a password or an assertion from an identity provider (IdP), in a request. 
 * They also specify the procedure necessary to verify that credential. 
 * If the credential is successfully verified, the request is authenticated.
 */

dotenv.config();

let opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_KEY,
};

passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
  try {
    const user = await user_model.findOne({ id: jwt_payload.sub });
    //done(error,doesTheUserExist)
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
      // or you could create a new account
    }
  } catch (err) {
    return done(err, false);
  }
}));
