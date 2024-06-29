
const getCategoriesData = async() => {
    const res = await fetch("https://lynea-server.vercel.app/categories",{
        cache: 'no-cache'
    })
    const data = await res.json()
    return data;
};

export default getCategoriesData;