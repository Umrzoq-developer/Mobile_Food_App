import axios from 'axios';

export default axios.create({
    baseURL: `https://api.yelp.com/v3/businesses`,
    headers: {
        Authorization: 'Bearer ' + 'io_2oMz4vFXH_o7CZB9XW-E-2NKxMxKOmlEl8GNVBGG_vn1TTv8KBtz5TC603yUFWUTeXCUCC72b-6qscrjT0ON9ZPrxov7j7Uvip0XjDa5Cf8Sgit3YgnWDmFk5X3Yx'
    }
})

