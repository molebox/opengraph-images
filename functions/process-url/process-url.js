const cloudinary = require("cloudinary").v2;
const qs = require("querystring");
cloudinary.config({
    cloud_name: "richardhaines",
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

exports.handler = async function(event, ctx) {
    const {queryStringParameters} = event;

    try {
        const imageUrl = cloudinary.url(
            `${process.env.RICH_IMAGE_VERSION}/og-images/img-1.png`,
            {
                // resource_type: "raw"
                sign_url: true,
                // secure: true,
                custom_pre_function: {
                    function_type: "remote",
                    source: `https://vigilant-jones-f0730c.netlify.app/.netlify/functions/gen-opengraph-image?${qs.stringify(
                        queryStringParameters
                    )}`
                }
            }
        );
        return {
            statusCode: 302,
            headers: {
                Location: imageUrl
            },
            body: ""
        };
    } catch (e) {
        console.log(e);
    }
}