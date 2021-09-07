exports.reset = () => {
  exports.state = {
    messages: null,
    var_names: null,
    blocks: new Map(),
  };
};
exports.reset();
