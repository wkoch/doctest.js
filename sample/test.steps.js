step("The <function> of <a> and <b> is <result>", async () => {
  assert(await function(a, b).equals(result));
});
