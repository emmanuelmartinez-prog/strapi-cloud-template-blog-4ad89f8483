module.exports = (plugin) => {
  const register = plugin.controllers.auth.register;

  plugin.controllers.auth.register = async (ctx) => {
    const { password } = ctx.request.body;

    if (!password || password.length < 8) {
      return ctx.badRequest('La contraseña debe tener al menos 8 caracteres.');
    }

    return register(ctx);
  };

  return plugin;
};
