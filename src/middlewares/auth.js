const adminAuth = (req,res,next)=>{
     console.log("admin auth middleware");
  const token = "xyz";
  const isAuthorized = token === "xyz";
  if (!isAuthorized) res.status(401).send("Unauthorized request");
  else next();
}

const userAuth = (req,res,next)=>{
     console.log("user auth middleware");
  const token = "xyz";
  const isAuthorized = token === "xyz";
  if (!isAuthorized) res.status(401).send("Unauthorized request");
  else next();
}

module.exports = {
    adminAuth,userAuth
}