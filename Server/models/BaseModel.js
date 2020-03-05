const Model = require('./config.js');

class BaseModel extends Model {
  static get modelPaths() {
    return [__dirname];
  }
}

module.exports = BaseModel;
