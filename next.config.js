module.exports.redirects = async function () {
    return [
        {
            source: "/resume",
            destination:
                "https://tanvesh.vercel.app/resume.pdf",
            permanent: true,
        },
        {
            source: "/cv",
            destination:
                "https://tanvesh.vercel.app/resume.pdf",
            permanent: true,
        },
        // this is a joke
        {
            source: "/rashi",
            destination:
                "https://tanvesh.vercel.app/resume.pdf",
            permanent: true,
        },
    ];
};
