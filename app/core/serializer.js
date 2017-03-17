
const Serializer = (() => {
  /* interface */
  return {
    serialize
  }

  function serialize (data) {
    if(typeof data !== 'object') {
      // TODO: throw error;
    }
    
    if(data instanceof Array) {
      return data.map((object) => object.toJson());
    }

    return object.toJson();

  }
})();

export { Serializer }
