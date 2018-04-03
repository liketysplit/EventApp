if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI: 'mongodb://minecraft:plan@ds153845.mlab.com:53845/minecraft-prod'}
  } else {
    module.exports = {mongoURI: 'mongodb://localhost/mcideas-dev'}
  }