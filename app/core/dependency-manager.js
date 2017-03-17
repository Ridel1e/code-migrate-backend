
/* */
const DependencyManager = (() => {
  const dependencies = {};

  return {
    register,
    get
  }

  /**
   * Register dependency in container
   * @public 
   * @param {string} name 
   * @param {Object} object 
   */
  function register (name, object) {
    dependencies[name] = object;
    console.log(`dependency with name ${name} registered`);
  }

  /**
   * Retunrs dependency from container by name
   * @public 
   * @param {string} name 
   * @returns {Object} description
   */
  function get (name) {
    return dependencies[name];
  }
})();

export { DependencyManager }


