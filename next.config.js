/** @type {import('next').NextConfig} */
const path = require("path");
const withSass = require("@zeit/next-sass");
module.exports = withSass({
  reactStrictMode: true,
  cssModules: true,
});

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    NEXT_STRIPE_PUBLIC:
      "pk_test_51Ixx0QAMlDwmvrmg2JyqM3CuOMIWHnvYryjvAe3Go7ghfUwiH6mI1uEwmvE9gkm1ZPwq1FLeY69kK2eWDMgO0nnC00SPzoLZmo",
    NEXT_STRIPE_PRIVATE:
      "sk_test_51Ixx0QAMlDwmvrmgknmDYc1M76ZEl4kA0hV5XkngkSelhSeVaoorlQXN7qr0hf5UfNKTIWjVIIBagsEmvj4Fk8fc00JCSsXKZm",
    NEXT_PLATFORM: "development",
    NEXT_SERVER: "http://localhost:3000"
  },
  images: {
    domains: ['picsum.photos', 'files.stripe.com', "media.giphy.com"],
  },
};
