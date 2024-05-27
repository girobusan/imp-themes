npx sass  \
  src/styleswitch.scss:docs/styleswitch.css\
  src/netart.scss:docs/netart.css\
  src/tbimp_bw.scss:docs/base_bw.css\
  src/tbimp_bw_inverted.scss:docs/base_bw_i.css\
  src/tbimp_c1.scss:docs/base_c1.css\
  src/default.scss:docs/style.css\
  src/default_i.scss:docs/style_i.css\
  src/simplecss.scss:docs/simplecss.css\
  src/awsm_imp.scss:docs/awsm_imp.css\
  --no-source-map\
  --style=compressed

cp test/sampler.html docs/
cp test/index.html docs/
cp test/styleswitch.css docs/
cp test/styleswitch.js docs/
