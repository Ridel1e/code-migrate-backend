
/**
 * Abstract data access object
 * @abstract 
 * @class
 */
class AbstractDAO {
  /**
   * @constructs
   */
  constructor () {}

  findAll () {}

  findBy () {}

  findById () {}

  findOneBy () {}

  save (object) {
    if (!(object instanceof this.Entity )) {
      const error = 
        `Entity has incorrect type. "${this.Entity.name}" expected`;
      throw new Error(error);
    }

    console.log(object);
  }

  remove (object) {
    if (!(object instanceof this.Entity )) {
      const error = 
        `Entity has incorrect type. "${this.Entity.name}" expected`;
      throw new Error(error);
    }
  }

  /**
   * @abstract
   */
  get _conntection () { return {}; }

  get Entity () { return {}; } 
}

export { AbstractDAO }
